import { NextResponse } from "next/server";
import { Resend } from "resend";
import { isEmail, validateContact, type ContactInput } from "@/lib/contact";

export async function POST(request: Request) {
  let body: ContactInput;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill every field. Pretend it worked and drop it.
  if (body.company) return NextResponse.json({ message: "Message sent." }, { status: 200 });

  const errors = validateContact(body);
  if (Object.keys(errors).length) return NextResponse.json({ errors }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  if (!apiKey || !to) {
    console.error("Contact form is not configured: set RESEND_API_KEY and CONTACT_EMAIL.");
    return NextResponse.json({ error: "Contact form is not configured." }, { status: 500 });
  }

  const name = body.name?.trim().slice(0, 100) || "Someone";
  const contact = body.contact!.trim();
  const message = body.message!.trim();

  try {
    // Created per request so the build doesn't need the key.
    const { error } = await new Resend(apiKey).emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to,
      ...(isEmail(contact) ? { replyTo: contact } : {}),
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nContact: ${contact}\n\n${message}`,
    });

    if (error) {
      console.error(error);
      return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
    }

    return NextResponse.json({ message: "Message sent." }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
