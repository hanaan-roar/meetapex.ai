import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import { Trust, ClaudePartnerBadge } from './Hero';
import { Testimonial } from './Sections1';
import { FAQ, EndZone } from './FAQEnd';
import { Spark, Icon } from './Primitives';

function ContactHeroForm() {
  const [submitted, setSubmitted] = useState(false);
  const bullets = [
    'Work with certified AI experts from A$60 per hour',
    'Build and deploy AI across your business fast',
    'From automation services, custom AI solutions and AI strategy',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="ax-section contact-hero-photo" id="contact-top" style={{ padding: '160px 0px' }}>
      <div className="ax-container" style={{ padding: '0px 30px' }}>
        <div className="contact-hero-grid" style={{ textAlign: 'left', padding: '0px 0px 0px 9px' }}>

          {/* LEFT — copy */}
          <div style={{ textAlign: 'left' }}>
            <span className="eyebrow-dark"><Spark size={14} color="#10453F" />Get started</span>
            <h1 className="h-display" style={{ margin: '1.25rem 0 0', fontSize: 'clamp(2.4rem, 4vw, 3.6rem)' }}>
              Get AI working inside your business,{' '}
              <span className="hl-select">faster than you think.</span>
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-lg)', color: 'var(--ink-warm-2)', lineHeight: 1.65, margin: '1.5rem 0 0', maxWidth: '34rem' }}>
              Book a free discovery call and our team will map out exactly where AI can make the biggest impact in your business.
            </p>
            <ul className="contact-bullets">
              {bullets.map((b) => (
                <li key={b}>
                  <span className="contact-check">
                    <Icon name="check" size={12} stroke={2.6} color="#fff" />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="contact-badge-pill" style={{ borderStyle: 'solid', borderWidth: '1px', borderColor: 'rgba(27, 28, 24, 0.5)' }}>
              <ClaudePartnerBadge style={{ color: 'var(--ink-warm)' }} />
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="ax-card ax-card--shadow">
            {submitted ? (
              <div className="ax-success">
                <div className="badge">
                  <Icon name="check" size={28} stroke={2} />
                </div>
                <h3>We'll be in touch soon.</h3>
                <p className="sub">Thanks for reaching out — we'll email you within one business day to schedule your free discovery call.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="ax-field-group">
                  <div className="cf-row">
                    <div>
                      <label className="ax-label" htmlFor="cf-name">Full name</label>
                      <input id="cf-name" className="ax-input" type="text" placeholder="Jane Smith" required />
                    </div>
                    <div>
                      <label className="ax-label" htmlFor="cf-company">Company name</label>
                      <input id="cf-company" className="ax-input" type="text" placeholder="Acme Pty Ltd" required />
                    </div>
                  </div>
                  <div className="cf-row">
                    <div>
                      <label className="ax-label" htmlFor="cf-email">Work email</label>
                      <input id="cf-email" className="ax-input" type="email" placeholder="jane@acme.com.au" required />
                    </div>
                    <div>
                      <label className="ax-label" htmlFor="cf-phone">Contact number</label>
                      <input id="cf-phone" className="ax-input" type="tel" placeholder="+61 4XX XXX XXX" required />
                    </div>
                  </div>
                  <div>
                    <label className="ax-label" htmlFor="cf-goal">What is your primary goal?</label>
                    <select id="cf-goal" className="ax-input" required defaultValue="">
                      <option value="" disabled>Select an option</option>
                      <option value="automate">Automate workflows</option>
                      <option value="build">Build an AI app</option>
                      <option value="strategy">AI strategy</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="ax-label" htmlFor="cf-timeline">How soon are you looking to get started?</label>
                    <select id="cf-timeline" className="ax-input" required defaultValue="">
                      <option value="" disabled>Select an option</option>
                      <option value="immediately">Immediately</option>
                      <option value="month">Within the next month</option>
                      <option value="exploring">Just exploring</option>
                      <option value="notsure">Not sure yet</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="ax-btn ax-btn-primary ax-btn-lg" style={{ width: '100%', justifyContent: 'center', marginTop: '1.5rem' }}>
                  Book a free discovery call
                </button>
                <p className="contact-disclaimer">No commitment required. You only pay when you are ready to move forward.</p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    document.documentElement.setAttribute('data-motion', 'calm');
    const els = Array.from(document.querySelectorAll('.rv'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
    );
    els.forEach((el) => { if (!el.classList.contains('in')) io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav onBook={scrollToTop} />
      <ContactHeroForm />
      <Trust />
      <Testimonial variant="New testimonial" />
      <FAQ />
      <EndZone onBook={scrollToTop} />
    </>
  );
}
