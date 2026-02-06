import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

async function sendEmail(payload: {
  from: string;
  to: string[];
  subject: string;
  html: string;
  reply_to?: string;
}) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Resend API error: ${error}`);
  }

  return await res.json();
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactRequest = await req.json();

    if (!name || !email || !message) {
      throw new Error("Name, E-Mail und Nachricht sind erforderlich");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Ungültige E-Mail-Adresse");
    }

    const emailResponse = await sendEmail({
      from: "Doydem Restaurant <noreply@doydem-restaurant.de>",
      to: ["info@doydem-restaurant.de"],
      subject: `Neue Kontaktanfrage von ${name}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ""}
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      reply_to: email,
    });

    console.log("Contact email sent:", emailResponse);

    const confirmationResponse = await sendEmail({
      from: "Doydem Restaurant <noreply@doydem-restaurant.de>",
      to: [email],
      subject: "Vielen Dank für Ihre Nachricht - Doydem Restaurant",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Vielen Dank für Ihre Nachricht!</h2>
          <p>Liebe/r ${name},</p>
          <p>wir haben Ihre Nachricht erhalten und werden uns so schnell wie möglich bei Ihnen melden.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Ihre Nachricht:</strong></p>
          <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${message.replace(/\n/g, "<br>")}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p>Mit freundlichen Grüßen,<br/>Ihr Doydem Restaurant Team</p>
          <p style="font-size: 12px; color: #666;">
            Kaufpark Freiberg<br/>
            Adalbert-Stifter-Straße 101<br/>
            70437 Stuttgart<br/>
            Tel: 0162 3254444
          </p>
        </div>
      `,
    });

    console.log("Confirmation email sent:", confirmationResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
