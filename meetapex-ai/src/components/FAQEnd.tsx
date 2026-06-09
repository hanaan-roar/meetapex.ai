import React, { useState } from 'react';
import { Spark, Icon } from './Primitives';

const FAQS = [
  { q: 'How do we get started?', a: 'Every engagement starts with a free discovery call. Our Head of AI walks through your business, identifies the possibilities and provides initial estimates. No commitment required.' },
  { q: 'What can Apex AI experts build?', a: 'AI automation workflows, AI chatbots, internal copilots, AI agents, knowledge systems and custom AI applications, integrated across your entire stack.' },
  { q: 'What is the minimum commitment on the Flex plan?', a: 'The Flex plan has a minimum of 20 hours, giving your expert enough runway to scope, build and deliver a meaningful outcome.' },
  { q: 'Will I work with the same person throughout?', a: 'Yes. You get a dedicated resource from day one. You will meet them before deciding to go ahead.' },
  { q: 'Do your experts work across my time zone?', a: 'We do our best to ensure overlap where practical so collaboration stays smooth and responsive.' },
  { q: 'How do we collaborate day to day?', a: 'Via Slack Connect or a shared WhatsApp group, whichever works best for your team.' },
  { q: 'Who owns what gets built?', a: 'Everything built by Apex AI is owned by you, the client. Full stop.' },
  { q: 'What AI tokens and models are included?', a: 'All experts come with Claude Max and Google AI Ultra plans. We bring our own tokens so you always have access to the best models at no additional cost.' },
  { q: 'How do I track hours and work completed?', a: 'Through our dedicated client portal where you can monitor hours worked, progress and upcoming tasks in real time.' },
  { q: 'What infrastructure do we need on our side?', a: 'You provide the accounts such as GitHub, n8n, Vercel and AWS. We guide you through setup so you are ready to go from day one.' },
  { q: 'Do you offer expertise beyond AI?', a: 'Yes. We have dedicated experts across performance marketing and design who can work alongside your AI build when needed.' },
];

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="sec" id="faq">
      <div className="wrap">
        <div className="faq-head rv">
          <span className="eyebrow-center">
            <Spark size={14} color="#10453F" />FAQ
          </span>
          <h2 className="h2" style={{ marginTop: '1rem' }}>Frequently asked questions</h2>
        </div>
        <div className="faq-list rv" data-d="1">
          {FAQS.map((f, i) => (
            <div className={`faq-item${open === i ? ' open' : ''}`} key={f.q}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span className="qx">{String(i + 1).padStart(2, '0')}</span>
                {f.q}
                <span className="qt"><Icon name="plus" size={20} stroke={1.8} /></span>
              </button>
              <div className="faq-a" style={{ maxHeight: open === i ? '18rem' : 0 }}>
                <div className="ai">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Social({ d, label }: { d: React.ReactNode; label: string }) {
  return (
    <a href="#" aria-label={label}>
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">{d}</svg>
    </a>
  );
}

export function EndZone({ onBook }: { onBook: () => void }) {
  return (
    <div className="endzone section-dark">
      <div className="glow" />
      <section className="fcta" style={{ padding: '112px 0px 120px' }}>
        <div className="wrap" style={{ width: '100%' }}>
          <span className="eyebrow-center light rv">
            <Spark size={14} color="#ffffff" />Get started
          </span>
          <h2 className="h2 rv" data-d="1" style={{ margin: '16px auto 0', textAlign: 'center' }}>
            Your competitors are already<br />moving on AI
          </h2>
          <p className="lede rv" data-d="2" style={{ width: '100%' }}>
            Find out exactly where AI can transform your business, with experts starting from A$60 per hour.
          </p>
          <div className="acts rv" data-d="3" style={{ width: '100%' }}>
            <button className="btn btn-white btn-lg" onClick={onBook}>
              Book a call
              <span className="arr"><Icon name="arrowRight" size={18} stroke={1.9} /></span>
            </button>
          </div>
        </div>
      </section>
      <footer className="footer" id="footer">
        <div className="wrap">
          <div className="foot-top">
            <div className="foot-brand">
              <img src="/assets/apex-ai-logo-white.png" alt="Apex AI" />
              <p className="fb">The AI agency for Australian businesses</p>
              <p className="fc">
                A{' '}
                <a href="https://www.roar.global/" target="_blank" rel="noopener" style={{ textDecoration: 'underline' }}>
                  roar.global
                </a>{' '}
                company
              </p>
              <div className="foot-social">
                <Social label="LinkedIn" d={<path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 17V10.2H6.06V17h2.28zM7.2 9.24a1.32 1.32 0 1 0 0-2.64 1.32 1.32 0 0 0 0 2.64zM18 17v-3.73c0-1.99-.43-3.52-2.75-3.52-1.12 0-1.87.61-2.18 1.2h-.03v-1.02H10.85V17h2.28v-3.37c0-.89.17-1.75 1.27-1.75 1.09 0 1.1 1.02 1.1 1.81V17H18z" />} />
                <Social label="Instagram" d={<path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.52.01-4.76.07-1.15.05-1.77.24-2.19.4-.55.22-.94.47-1.35.88-.41.41-.66.8-.88 1.35-.16.42-.35 1.04-.4 2.19-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05 1.15.24 1.77.4 2.19.22.55.47.94.88 1.35.41.41.8.66 1.35.88.42.16 1.04.35 2.19.4 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1.15-.05 1.77-.24 2.19-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.88-1.35.16-.42.35-1.04.4-2.19.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-1.15-.24-1.77-.4-2.19a3.64 3.64 0 0 0-.88-1.35 3.64 3.64 0 0 0-1.35-.88c-.42-.16-1.04-.35-2.19-.4-1.24-.06-1.61-.07-4.76-.07zM12 6.87a5.13 5.13 0 1 0 0 10.26 5.13 5.13 0 0 0 0-10.26zm0 8.46a3.33 3.33 0 1 1 0-6.66 3.33 3.33 0 0 1 0 6.66zm6.54-8.66a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />} />
                <Social label="Facebook" d={<path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />} />
              </div>
            </div>
            <div className="foot-col">
              <h5>Services</h5>
              <ul>
                <li><a href="https://www.meetapex.ai/ai-automation-agency">AI automation agency</a></li>
                <li><a href="https://www.meetapex.ai/ai-solutions">Custom AI solutions</a></li>
                <li><a href="https://www.meetapex.ai/ai-consulting">AI consulting &amp; strategy</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Quick links</h5>
              <ul>
                <li><a href="https://www.meetapex.ai/about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#deploy">How we work</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="https://www.meetapex.ai/resources">Resources</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Contact</h5>
              <ul>
                <li><a href="mailto:hello@meetapex.ai">hello@meetapex.ai</a></li>
                <li><a href="tel:+61410876136">+(61) 41 087 6136</a></li>
                <li><a href="https://maps.app.goo.gl/bKQScKrGCvQm9k4C8">302/13-15, Wentworth Avenue, Sydney NSW 2000</a></li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <span>&copy; 2026 Apex AI. All Rights Reserved.</span>
            <a href="https://app.meetapex.ai/terms">Terms &amp; conditions</a>
          </div>
        </div>
        <div className="foot-wordmark" aria-hidden="true" style={{ fontSize: '300px', height: '0px', opacity: '0' }}>Apex AI</div>
      </footer>
    </div>
  );
}
