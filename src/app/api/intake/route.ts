import { NextResponse } from "next/server";

// Stub intake endpoint. Phase 7 will wire this to email (Resend / Mailgun)
// or persist to a backing store. For now it logs server-side and returns OK
// so the form completes the success state during development.

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body?.name || !body?.email || !body?.reason || !body?.prior) {
      return NextResponse.json(
        { ok: false, message: "Missing required fields." },
        { status: 400 },
      );
    }
    // eslint-disable-next-line no-console
    console.log("[intake]", {
      receivedAt: new Date().toISOString(),
      name: body.name,
      email: body.email,
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Server error. Try again or email directly." },
      { status: 500 },
    );
  }
}
