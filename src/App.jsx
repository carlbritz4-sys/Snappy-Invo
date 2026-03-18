import { useState } from 'react';

const features = [
  {
    title: 'Fast invoice creation',
    text: 'Add client details, items, totals, and send polished invoices in a few taps.',
  },
  {
    title: 'Professional quote builder',
    text: 'Create clean quotes that help you look credible before the job even starts.',
  },
  {
    title: 'WhatsApp-friendly sharing',
    text: 'Export and send PDFs directly to customers where they already communicate.',
  },
  {
    title: 'Branding for premium users',
    text: 'Upload your logo and business info to generate a stronger, more premium look.',
  },
];

const steps = [
  'Enter business details and client information',
  'Add items, pricing, tax, discounts, and notes',
  'Choose invoice or quote template',
  'Generate a beautiful PDF and share it instantly',
];

function BrandMark() {
  return (
    <div className="brand-mark" aria-hidden="true">
      <span>S</span>
    </div>
  );
}

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      setStatus('error');
      setMessage('Please enter your name and email address.');
      return;
    }

    setStatus('submitting');
    setMessage('');

    try {
      const response = await fetch('/.netlify/functions/waitlist-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.error || 'Request failed');
      }

      setStatus('success');
      setMessage("You're on the waitlist. Your signup has been emailed successfully.");
      setFormData({
        name: '',
        email: '',
      });
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again in a moment.');
    }
  }

  return (
    <div className="page-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="ambient ambient-c" />

      <main className="content">
        <section className="section hero-section">
          <nav className="topbar">
            <div className="brand-lockup">
              <BrandMark />
              <div>
                <div className="brand-title">Snappy Invo</div>
                <div className="brand-subtitle">
                  Simple invoicing for modern businesses
                </div>
              </div>
            </div>
            <a href="#waitlist" className="button button-light button-small">
              Join Waitlist
            </a>
          </nav>

          <div className="hero-grid">
            <div className="hero-copy">
              <div className="pill">Launching end of March 2026</div>
              <h1>Create beautiful invoices and quotes from your phone in minutes.</h1>
              <p className="hero-text">
                Built for freelancers, side hustlers, and small businesses who want
                fast, professional PDFs they can share on WhatsApp or email without
                the usual hassle.
              </p>

              <div className="hero-actions">
                <a href="#waitlist" className="button button-primary">
                  Reserve Early Access
                </a>
                <a href="#preview" className="button button-secondary">
                  See App Preview
                </a>
              </div>

              <div className="stats-grid">
                <div className="glass-card stat-card">
                  <div className="stat-value">1 Free</div>
                  <div className="stat-label">invoice or quote daily</div>
                </div>
                <div className="glass-card stat-card">
                  <div className="stat-value">Premium</div>
                  <div className="stat-label">professional templates</div>
                </div>
                <div className="glass-card stat-card">
                  <div className="stat-value">Share Fast</div>
                  <div className="stat-label">WhatsApp and email ready</div>
                </div>
              </div>
            </div>

            <div id="preview" className="phone-wrap">
              <div className="phone-glow" />
              <div className="phone-frame">
                <div className="speaker-bar" />
                <div className="phone-screen">
                  <div className="invoice-card">
                    <div className="invoice-top">
                      <div>
                        <div className="invoice-id">Invoice #00124</div>
                        <div className="invoice-note">Prepared in seconds</div>
                      </div>
                      <div className="paid-badge">PAID</div>
                    </div>

                    <div className="invoice-blocks">
                      <div className="invoice-panel">
                        <div className="invoice-label">From</div>
                        <div className="invoice-strong">Your Business Name</div>
                      </div>
                      <div className="invoice-panel">
                        <div className="invoice-label">Bill To</div>
                        <div className="invoice-strong">Client Company</div>
                      </div>
                    </div>

                    <div className="line-items">
                      <div className="line-item">
                        <span>Logo Design</span>
                        <strong>$120</strong>
                      </div>
                      <div className="line-item">
                        <span>Social Media Ad Set</span>
                        <strong>$180</strong>
                      </div>
                    </div>

                    <div className="invoice-total">
                      <span>Total</span>
                      <strong>$300</strong>
                    </div>
                  </div>

                  <div className="preview-cards">
                    <div className="mini-card">
                      <div className="mini-title">Basic PDF</div>
                      <div className="mini-copy">Free daily version</div>
                    </div>
                    <div className="mini-card mini-card-accent">
                      <div className="mini-title">Premium PDF</div>
                      <div className="mini-copy">Branded + professional</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="feature-grid">
            {features.map((item) => (
              <article key={item.title} className="glass-card feature-card">
                <div className="feature-icon" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section">
          <div className="glass-card detail-card">
            <div className="eyebrow">How it works</div>
            <h2>A simple workflow your users will understand instantly.</h2>
            <div className="step-list">
              {steps.map((step, index) => (
                <div key={step} className="step-card">
                  <div className="step-index">{index + 1}</div>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="plan-card">
            <div className="eyebrow eyebrow-accent">Free vs Premium</div>
            <h2>Choose the plan that fits your business.</h2>
            <div className="plan-grid">
              <div className="tier-card tier-card-dark">
                <div className="tier-label">Free</div>
                <div className="tier-price">1 daily document</div>
                <ul>
                  <li>Basic invoice PDF</li>
                  <li>Basic quote PDF</li>
                  <li>Good for trying the app</li>
                </ul>
              </div>
              <div className="tier-card tier-card-accent">
                <div className="tier-label tier-label-accent">Premium</div>
                <div className="tier-price">$9.99 lifetime</div>
                <ul>
                  <li>Professional PDF templates</li>
                  <li>Business logo uploads</li>
                  <li>Full brand customization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="waitlist" className="section waitlist-section">
          <div className="waitlist-card">
            <div className="pill">Get early access before launch</div>
            <h2>Join the waitlist for launch at the end of March 2026.</h2>
            <p className="waitlist-copy">
              Be the first to know when Snappy Invo goes live at the end of March
              2026. Early subscribers can get launch updates, preview access, and
              first access to premium for just $9.99 lifetime.
            </p>

            <form
              className="waitlist-form"
              onSubmit={handleSubmit}
            >
              <label className="sr-only" htmlFor="name">
                Your name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(event) =>
                  setFormData((current) => ({
                    ...current,
                    name: event.target.value,
                  }))
                }
                disabled={status === 'submitting'}
              />
              <label className="sr-only" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={(event) =>
                  setFormData((current) => ({
                    ...current,
                    email: event.target.value,
                  }))
                }
                disabled={status === 'submitting'}
              />
              <button
                type="submit"
                className="button button-light"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Signing Up...' : 'Sign Up'}
              </button>
            </form>

            {message ? (
              <p
                className={`form-message ${
                  status === 'success' ? 'form-message-success' : 'form-message-error'
                }`}
                role="status"
              >
                {message}
              </p>
            ) : null}

            <p className="waitlist-footnote">
              No spam. Just launch news, progress updates, and early access
              information.
            </p>
          </div>
        </section>

        <footer className="footer">
          Copyright 2026 Snappy Invo. Mobile invoicing made simple.
        </footer>
      </main>
    </div>
  );
}
