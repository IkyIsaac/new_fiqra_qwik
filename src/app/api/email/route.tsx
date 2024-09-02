import axios from "axios";
import emailjs from "@emailjs/nodejs";

export async function POST(req: any) {
  const data = await req.formData();

  const full_name = data.get("userName");
  const email = data.get("email");
  const support = data.get("subject");
  const message = data.get("message");

  if (!full_name || !email || !support || !message) {
    return new Response(
      JSON.stringify({ message: "Please fill out all required fields" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const templateParams = {
    userName: full_name,
    email: email,
    subject: support,
    message: message,
  };

  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      templateParams,
      {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_USER_ID!,
        privateKey: process.env.NEXT_PUBLIC_EMAILJS_PRIVATE_KEY!,
      }
    );

    return new Response(
      JSON.stringify({ message: "Your message has been sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ message: `Failed to send message: ${err}` }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}