# Snappy Invo Landing Page

Marketing landing page for Snappy Invo, built with React and Vite and prepared for Netlify deployment.

## Features

- Responsive landing page matching the requested layout
- Functional waitlist form powered by Netlify Forms
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
3. Netlify will use `npm run build` and publish the `dist` folder from `netlify.toml`.
4. After the first deploy, open the Netlify site dashboard.
5. Go to `Forms`, confirm the `snappyinvo-waitlist` form is detected, and add an email notification to `snappyinvo@gmail.com`.

This project uses Netlify Forms for submissions, so email delivery to Gmail is configured inside Netlify rather than hard-coded in the frontend.
