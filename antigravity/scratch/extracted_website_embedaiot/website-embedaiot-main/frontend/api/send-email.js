import nodemailer from 'nodemailer';
import dns from 'dns';

// Force IPv4 lookup for Nodemailer connection
dns.setDefaultResultOrder('ipv4first');

export default async function handler(req, res) {
  // CORS support
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { secret, to, subject, text, html, replyTo } = req.body;

  // Verify the shared secret
  if (!secret || secret !== process.env.EMAIL_RELAY_SECRET) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  if (!to || !subject || (!text && !html)) {
    return res.status(400).json({ message: 'Missing email parameters (to, subject, text/html)' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"Embed AIoT" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html,
      replyTo,
    });
    return res.status(200).json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('Error sending email via Vercel relay:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
