import { type NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";


export async function POST(request: NextRequest) {
    const { email, name, message } = await request.json();
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.APPEMAIL,
            pass: process.env.APPPASSWORD,
        },
    });

    const mailOptions: Mail.Options = {
        from: process.env.APPEMAIL,
        to: process.env.APPEMAIL,
        subject: `Message from ${name} (${email})`,
        text: message,
    };

    const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
            transport.sendMail(mailOptions, function (err) {
                if (!err) {
                    resolve('Email Sent');
                } else {
                    reject(err.message);
                }
            });
        });
    
    try {
        await sendMailPromise();
        return NextResponse.json({ message: 'Email Sent' });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}
