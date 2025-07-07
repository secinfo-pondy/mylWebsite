import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { form } = req.body;

  // Basic validation
  if (!form || typeof form !== 'object') {
    return res.status(400).json({ message: 'Invalid form data' });
  }

  // Check required environment variables
  if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return res.status(500).json({ message: 'SMTP configuration missing' });
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
    to: 'your@email.com', // Change to your destination email
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

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ 
      message: 'Error sending email', 
      error: process.env.NODE_ENV === 'development' ? error : 'Internal server error'
    });
  }
}