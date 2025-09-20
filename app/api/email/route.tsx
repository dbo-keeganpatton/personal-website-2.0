import { type NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";


export async function POST(request: NextRequest) {
    const { email, subject, message } = await request.json();
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
        subject: `Message from (${email}): ${subject}`,
        text: message,
    };

    const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
            transport.sendMail(mailOptions, function (err) {
                if (!err) {
                    resolve('Thank you for reaching out, I will get back as soon as possible');
                } else {
                    reject(err.message);
                }
            });
        });
    
    try {
        await sendMailPromise();
        return NextResponse.json({ message: 'Thank you for reaching out, I will get back as soon as possible' });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}
