import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import axios from 'axios';

// SMTP Configuration
const SMTP_CONFIG = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'bobcoenradi@gmail.com',
    pass: 'jjbf manh mcxl ofvd',
  },
};

// Validate Turnstile CAPTCHA
async function validateCaptcha(token: string): Promise<boolean> {
  const secretKey = '1x0000000000000000000000000000000AA'; // Replace with your secret key
  if (!secretKey) throw new Error('Turnstile secret key is not configured.');

  try {
    const response = await axios.post(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
    );

    return response.data.success;
  } catch (error) {
    console.error('Error validating CAPTCHA:', error);
    throw new Error('CaptchaValidationError');
  }
}

export async function POST({ request }: { request: Request }) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      reason,
      date,
      message,
      'cf-turnstile-response': captchaToken,
    } = body;

    // Validate Turnstile CAPTCHA
    const isCaptchaValid = await validateCaptcha(captchaToken);
    if (!isCaptchaValid) {
      return json({ success: false, error: 'captcha_failed' }, { status: 400 });
    }

    // Format date to DD/MM/YYYY
    const formattedDate = new Date(date).toLocaleDateString('en-GB');

    // Configure Nodemailer
    const transporter = nodemailer.createTransport(SMTP_CONFIG);

    await transporter.sendMail({
      from: '"Flavored and Branded Contact" <bobcoenradi@gmail.com>',
      to: 'bobcoenradi@gmail.com',
      replyTo: email,
      subject: reason + ' van ' + firstName + ' ' + lastName,
      html: `
        <p><strong>Naam:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Tel:</strong> ${phone}</p>
        <p><strong>Bericht:</strong> ${message}</p>
      `,
    });

    return json({ success: true });
  } catch (error) {
    if (error.message === 'CaptchaValidationError') {
      return json({ success: false, error: 'captcha_failed' }, { status: 400 });
    }

    console.error('Error processing request:', error);
    return json({ success: false, error: 'server_error' }, { status: 500 });
  }
}
