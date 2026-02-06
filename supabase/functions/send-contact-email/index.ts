import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactRequest = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      throw new Error("Name, E-Mail und Nachricht sind erforderlich");
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Ungültige E-Mail-Adresse");
    }

    // Send email to restaurant
    const emailResponse = await resend.emails.send({
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
      replyTo: email,
    });

    // Send confirmation email to sender
    const confirmationResponse = await resend.emails.send({
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

    console.log("Contact email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
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
