# Snappy Invo Landing Page

Marketing landing page for Snappy Invo, built with React, Vite, and a Netlify Function for email delivery.

## Features

- Responsive landing page matching the requested layout
- Functional waitlist form that sends signup emails through SMTP
- Smooth in-page navigation and accessible form labels
- Ready for GitHub push and Netlify hosting

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Netlify setup

1. Push this repo to GitHub.
2. Import the repo into Netlify.
3. Netlify will use `npm run build`, publish `dist`, and deploy the function in `netlify/functions`.
4. Add these environment variables in Netlify:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=carlbritz4@gmail.com
SMTP_PASS=your-gmail-app-password
WAITLIST_FROM_EMAIL=carlbritz4@gmail.com
WAITLIST_TO_EMAIL=Snappyinvo@gmail.com
```

Important: for Gmail SMTP, use a Google App Password, not your normal Gmail password.
