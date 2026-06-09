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

        <div className="svc-grid">
          <div className="svc" style={{ padding: '0px' }}>
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

          <div className="svc" style={{ padding: '0px', borderWidth: '0px' }}>
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

          <div className="svc" style={{ padding: '0px', borderWidth: '0px' }}>
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

export function Testimonial() {
  return (
    <section style={{ display: 'flex', justifyContent: 'center', fontFamily: "'Geist',sans-serif", color: 'rgb(27, 28, 24)', background: 'rgb(255, 255, 255)', padding: '0px 57px 80px' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', justifyContent: 'space-between', width: '1280px', maxWidth: '100%', padding: '0px 30px', gap: '16px' }}>
        <div style={{ background: '#E3F9E2', borderRadius: '24px', padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            <span style={{ fontFamily: "'Geist',sans-serif", fontSize: '72px', lineHeight: 0.6, color: '#10453F', fontWeight: 500 }}>&ldquo;</span>
            <p style={{ fontFamily: "'Geist',sans-serif", fontWeight: 400, fontSize: '32px', lineHeight: 1.55, letterSpacing: '-0.64px', color: '#111111', margin: 0, maxWidth: '620px' }}>
              Apex AI helped us deploy a strong automation specialist across both internal operations and client work.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '56px' }}>
            <p style={{ fontFamily: "'Geist',sans-serif", fontWeight: 300, fontSize: '16px', lineHeight: 1.65, color: '#111111', opacity: 0.85, margin: 0, maxWidth: '580px' }}>
              They hit the ground running, deliver excellent client outcomes and consistently solve complex automation challenges. We have received great feedback across our client projects and learning programs. The entire process was seamless and highly responsive throughout.
            </p>
            <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.12)', margin: 0 }} />
            <div>
              <p style={{ fontFamily: "'Geist',sans-serif", fontWeight: 600, fontSize: '18px', color: '#111111', margin: '0 0 4px 0' }}>Dr Nici Sweaney</p>
              <p style={{ fontFamily: "'Geist',sans-serif", fontWeight: 400, fontSize: '15px', margin: 0, color: 'rgb(95, 95, 95)' }}>Chief Executive Officer at Ai Her Way</p>
            </div>
          </div>
        </div>
        <div style={{ width: '520px', minHeight: '600px', borderRadius: '24px', flexShrink: 0, overflow: 'hidden', background: '#1F6B5E' }}>
          <img src="/assets/nici-sweaney.png" alt="Dr Nici Sweaney" style={{ objectPosition: 'center top', display: 'block', objectFit: 'cover', height: '660px', width: '521px', margin: '-5px 0px 0px' }} />
        </div>
      </div>
    </section>
  );
}

const WHY_CARDS = [
  { num: '01.', title: 'Certified expertise', desc: 'Certified AI experts ready to build and deploy for businesses across Sydney, Melbourne and Australia, starting from A$60 per hour.', img: '/assets/Certified expertise.avif' },
  { num: '02.', title: 'Full-stack expertise', desc: 'Deep expertise across every major AI platform, automation tool and modern tech stack.', img: '/assets/Full-stack expertise.avif' },
  { num: '03.', title: 'End-to-end ownership', desc: 'Full end-to-end ownership from strategy and scoping through to build and deployment.', img: '/assets/End-to-end ownership.avif' },
  { num: '04.', title: 'Continuous expansion', desc: 'Continuous capability expansion as your business grows and new AI opportunities emerge.', img: '/assets/Continuous expansion.avif' },
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
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div className="ax-section-head center">
          <h2>
            Why founders choose<br />
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 400 }}>Apex AI</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-3)' }}>
          {WHY_CARDS.map((c) => (
            <div key={c.num} style={{ display: 'flex', padding: '2.25rem 1.5rem 2rem', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', flex: '1 0 0', alignSelf: 'stretch', borderRadius: '1rem', background: 'rgba(255, 255, 255, 0.90)', textAlign: 'left' }}>
              <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: 'var(--space-5)' }}>
                <img src={c.img} alt={c.title} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h4)', fontWeight: 'var(--fw-semibold)', color: 'var(--ink-warm)', letterSpacing: 'var(--ls-tight)', lineHeight: 'var(--lh-snug)', margin: '0 0 var(--space-2)' }}>{c.title}</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-warm-2)', lineHeight: 'var(--lh-relaxed)', margin: 0 }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
