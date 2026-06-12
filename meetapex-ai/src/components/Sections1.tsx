import React, { useEffect } from 'react';
import { Spark } from './Primitives';

export function Services() {
  return (
    <section className="ax-section" id="services">
      <div className="ax-container">
        <div className="head">
          <div>
            <span className="eyebrow-dark" style={{ marginBottom: '0.5rem' }}>
              <Spark size={14} color="#10453F" />Our services
            </span>
            <h2>End-to-end<br />AI &amp; automation expertise.</h2>
          </div>
          <p>Whether you are figuring out where AI fits in your business or ready to build and deploy, our certified AI experts have you covered.</p>
        </div>

        <div className="svc-grid" style={{ padding: '0px' }}>
          <div className="svc ax-card ax-card--blog" style={{ padding: '0px', borderWidth: '0px 1px 0px 0px', borderRadius: '0px' }}>
            <div className="visual v1">
              <img src="/assets/AI Automation.avif" alt="AI Automation" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
            </div>
            <h3 className="title">AI Automation</h3>
            <p className="desc">Eliminate manual work, connect your tools and keep your operations running in the background with AI automation services built on n8n, Make, Zapier and custom AI agents.</p>
            <a className="cta" href="#services">
              Learn more{' '}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="svc ax-card ax-card--blog" style={{ padding: '0px', borderWidth: '0px 0px 0px 1px', borderRadius: '0px' }}>
            <div className="visual v2">
              <img src="/assets/Custom AI Solutions.avif" alt="Custom AI Solutions" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
            </div>
            <h3 className="title">Custom AI Solutions</h3>
            <p className="desc">Bespoke AI applications, AI chatbots and autonomous AI agents built around your exact business requirements, developed using Claude, OpenAI, Google AI and Cursor AI.</p>
            <a className="cta" href="#services">
              Learn more{' '}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="svc ax-card ax-card--blog" style={{ padding: '0px', borderWidth: '0px', borderRadius: '0px' }}>
            <div className="visual v3">
              <img src="/assets/AI Consulting & Strategy.avif" alt="AI Consulting & Strategy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
            </div>
            <h3 className="title">AI Consulting &amp; Strategy</h3>
            <p className="desc">Not sure where AI fits? An AI consulting session with a Chief AI Officer maps your highest-value opportunities and hands you a clear AI strategy before you spend a dollar on build.</p>
            <a className="cta" href="#services">
              Learn more{' '}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Testimonial({ variant }: { variant?: string } = {}) {
  if (variant === 'New testimonial') {
    return (
      <section className="ax-section nt-section">
        <div className="ax-container">
          <div className="nt-grid">
            <div className="ax-card ax-card--cream ax-card--shadow nt-portrait">
              <img src="/assets/nici-sweaney.png" alt="Dr Nici Sweaney" />
              <div className="nt-label">
                <p className="nt-name">Dr Nici Sweaney</p>
                <p className="nt-role">Chief Executive Officer at Ai Her Way</p>
              </div>
            </div>
            <div className="ax-card ax-card--shadow nt-quote-card nt-quote-card--pine">
              <div className="ax-testi-quote-mark">&ldquo;</div>
              <p className="ax-testi-quote nt-quote-serif">
                Apex AI helped us deploy a strong automation specialist across both internal operations and client work.
              </p>
              <p className="ax-testi-body">
                They hit the ground running, deliver excellent client outcomes and consistently solve complex automation challenges. We have received great feedback across our client projects and learning programs. The entire process was seamless and highly responsive throughout.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="ax-section" style={{ background: 'rgb(255, 255, 255)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="ax-testi">
          <div className="ax-testi-left" style={{ padding: '64px 30px' }}>
            <div>
              <div className="ax-testi-quote-mark">&ldquo;</div>
              <p className="ax-testi-quote">
                Apex AI helped us deploy a strong automation specialist across both internal operations and client work.
              </p>
            </div>
            <div>
              <p className="ax-testi-body">
                They hit the ground running, deliver excellent client outcomes and consistently solve complex automation challenges. We have received great feedback across our client projects and learning programs. The entire process was seamless and highly responsive throughout.
              </p>
              <hr className="ax-testi-divider" />
              <p className="ax-testi-attr-name">Dr Nici Sweaney</p>
              <p className="ax-testi-attr-role">Chief Executive Officer at Ai Her Way</p>
            </div>
          </div>
          <div className="ax-testi-right">
            <img src="/assets/nici-sweaney.png" alt="Dr Nici Sweaney" style={{ width: '102%', height: '102%', objectFit: 'cover', objectPosition: 'center', display: 'block', margin: '-1% 0 0 -1%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

const WHY_CARDS = [
  { num: '01.', title: 'Certified AI expertise', desc: 'Certified experts ready to build and deploy for businesses across Sydney, Melbourne and Australia, from A$60 per hour.', img: '/assets/Certified expertise.avif' },
  { num: '02.', title: 'Full stack capability', desc: 'Deep expertise across every AI model, automation tool and modern tech stack your business runs on.', img: '/assets/Full-stack expertise.avif' },
  { num: '03.', title: 'End-to-end ownership', desc: 'From strategy and scoping through to build, deployment and beyond. We handle it all.', img: '/assets/End-to-end ownership.avif' },
  { num: '04.', title: 'Continuous expansion', desc: 'As your business grows, new AI capabilities keep rolling out. Your AI stack scales with you.', img: '/assets/Continuous expansion.avif' },
];

export function WhyFounders() {
  useEffect(() => {
    if (document.getElementById('why-playfair-import')) return;
    const s = document.createElement('style');
    s.id = 'why-playfair-import';
    s.textContent = "@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap');";
    document.head.appendChild(s);
  }, []);

  return (
    <section id="why" className="ax-section" style={{ backgroundImage: "url('/assets/bento-why-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center bottom' }}>
      <div className="ax-container">
        <div className="ax-section-head center">
          <h2>
            Why founders choose<br />
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 400 }}>Apex AI</span>
          </h2>
        </div>

        <div className="bento-grid">
          <div className="bento-row">
            {WHY_CARDS.map((c) => (
              <div className="bento-card" key={c.num}>
                <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: 'var(--space-5)' }}>
                  <img src={c.img} alt={c.title} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h4)', fontWeight: 'var(--fw-semibold)', color: 'var(--ink-warm)', letterSpacing: 'var(--ls-tight)', lineHeight: 'var(--lh-snug)', margin: '0 0 var(--space-2)' }}>{c.title}</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-warm-2)', lineHeight: 'var(--lh-relaxed)', margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
