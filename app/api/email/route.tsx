import { type NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export const dynamic = "force-dynamic";

const MAX_LENGTHS = { email: 254, subject: 200, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
    const now = Date.now();
    const recent = (hits.get(ip) ?? []).filter(t => now - t < RATE_WINDOW_MS);
    if (recent.length >= RATE_LIMIT) return true;
    recent.push(now);
    hits.set(ip, recent);
    return false;
}

export async function POST(request: NextRequest) {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
    if (rateLimited(ip)) {
        return NextResponse.json(
            { error: 'Too many messages, please try again later.' },
            { status: 429 }
        );
    }

    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
    }

    const { email, subject, message } = (body ?? {}) as Record<string, unknown>;
    if (
        typeof email !== 'string' || !EMAIL_RE.test(email) || email.length > MAX_LENGTHS.email ||
        typeof subject !== 'string' || !subject.trim() || subject.length > MAX_LENGTHS.subject ||
        typeof message !== 'string' || !message.trim() || message.length > MAX_LENGTHS.message
    ) {
        return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
    }

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.APPEMAIL,
            pass: process.env.APPPASSWORD,
        },
    });

    try {
        await transport.sendMail({
            from: process.env.APPEMAIL,
            to: process.env.APPEMAIL,
            replyTo: email,
            subject: `Message from (${email}): ${subject}`,
            text: message,
        });
        return NextResponse.json({
            message: 'Thank you for reaching out, I will get back as soon as possible',
        });
    } catch (err) {
        console.error('Contact form send failed:', err);
        return NextResponse.json(
            { error: 'Something went wrong sending your message.' },
            { status: 500 }
        );
    }
}
