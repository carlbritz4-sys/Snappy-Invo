import nodemailer from 'nodemailer';

const requiredEnvVars = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'WAITLIST_FROM_EMAIL',
  'WAITLIST_TO_EMAIL',
];

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
}

function missingEnvVars() {
  return requiredEnvVars.filter((key) => !process.env[key]);
}

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method not allowed.' });
  }

  const missing = missingEnvVars();
  if (missing.length > 0) {
    return json(500, {
      error: `Missing environment variables: ${missing.join(', ')}`,
    });
  }

  let payload;

  try {
    payload = JSON.parse(event.body || '{}');
  } catch {
    return json(400, { error: 'Invalid request body.' });
  }

  const name = typeof payload.name === 'string' ? payload.name.trim() : '';
  const email = typeof payload.email === 'string' ? payload.email.trim() : '';

  if (!name || !email) {
    return json(400, { error: 'Name and email are required.' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.WAITLIST_FROM_EMAIL,
      to: process.env.WAITLIST_TO_EMAIL,
      replyTo: email,
      subject: `New Snappy Invo waitlist signup: ${name}`,
      text: [
        'A new waitlist signup was submitted.',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
      ].join('\n'),
      html: `
        <h2>New Snappy Invo waitlist signup</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    return json(200, { ok: true });
  } catch (error) {
    return json(500, {
      error: 'Unable to send signup email.',
      detail: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
