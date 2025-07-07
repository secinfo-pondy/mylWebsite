import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { form } = await request.json();

    // Basic validation
    if (!form || typeof form !== 'object') {
      return NextResponse.json({ message: 'Invalid form data' }, { status: 400 });
    }

    // Check required environment variables
    if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP configuration missing');
      return NextResponse.json({ message: 'SMTP configuration missing' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Format form data for email
    const formData = Object.entries(form)
      .map(([key, value]) => {
        const formattedKey = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
        const formattedValue = Array.isArray(value) ? value.join(', ') : String(value);
        return `${formattedKey}: ${formattedValue}`;
      })
      .join('\n');

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'support@mylogiq.com', // Change to your destination email
      subject: 'New CompanyIQ Demo Request',
      text: `New demo request received:\n\n${formData}`,
      html: `
        <h2>New CompanyIQ Demo Request</h2>
        <div style="font-family: Arial, sans-serif;">
          ${Object.entries(form)
            .map(([key, value]) => {
              const formattedKey = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
              const formattedValue = Array.isArray(value) ? value.join(', ') : String(value);
              return `<p><strong>${formattedKey}:</strong> ${formattedValue}</p>`;
            })
            .join('')}
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ 
      message: 'Error sending email', 
      error: process.env.NODE_ENV === 'development' ? error : 'Internal server error'
    }, { status: 500 });
  }
}