import React, { useState, useEffect } from 'react';

export default function Nav({ onBook }: { onBook: () => void }) {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState<string | null>(null);
  const [active, setActive] = useState('services');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScrolled = () => setScrolled(window.scrollY > 10);
    onScrolled();
    window.addEventListener('scroll', onScrolled, { passive: true });
    return () => window.removeEventListener('scroll', onScrolled);
  }, []);

  const sections = ['services', 'stats', 'deploy', 'pricing', 'faq'];

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 160;
      let cur = sections[0];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!(e.target as Element).closest('.link-item')) setDrop(null);
    };
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setDrop(null);
    setOpen(false);
    setActive(id);
    if (id === 'top') return window.scrollTo({ top: 0, behavior: 'smooth' });
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 76, behavior: 'smooth' });
  };

  const toggle = (id: string) => setDrop((d) => (d === id ? null : id));

  return (
    <div className={`nav-wrap${scrolled ? ' scrolled' : ''}`}>
      <nav className="nav" style={{ padding: '10px 32px' }}>
        <img className="logo" src="/assets/apex-ai-logo-black.png" alt="Apex AI" onClick={go('top')} style={{ cursor: 'pointer' }} />

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="links">
            <div className={`link-item${drop === 'company' ? ' open' : ''}`}>
              <button className="link" onClick={() => toggle('company')}>
                Company
                <svg className="chev" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
              </button>
              <div className="drop">
                <div className="drop-left" style={{ width: '250px', justifyContent: 'flex-start' }}>
                  <a className="drop-item" href="#top" onClick={go('top')}>
                    <div className="dt">About</div>
                    <div className="ds">Who we are and why we build</div>
                  </a>
                  <a className="drop-item" href="#deploy" onClick={go('deploy')}>
                    <div className="dt">How we work</div>
                    <div className="ds">Our process, brief to build</div>
                  </a>
                  <div className="drop-divider" />
                  <a className="drop-item" href="#">
                    <div className="dt">Apply as a talent</div>
                    <div className="ds">Join our AI specialist network</div>
                  </a>
                </div>
              </div>
            </div>

            <div className={`link-item${drop === 'services' ? ' open' : ''}`}>
              <button className="link" onClick={() => toggle('services')}>
                Services
                <svg className="chev" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
              </button>
              <div className="drop">
                <div className="drop-left">
                  <a className="drop-item" href="#services" onClick={go('services')}>
                    <div className="dt">AI Automation</div>
                    <div className="ds">Cut manual work, connect your tools</div>
                  </a>
                  <a className="drop-item" href="#services" onClick={go('services')}>
                    <div className="dt">Custom AI Solutions</div>
                    <div className="ds">Bespoke copilots built for you</div>
                  </a>
                  <a className="drop-item" href="#services" onClick={go('services')}>
                    <div className="dt">AI Consulting &amp; Strategy</div>
                    <div className="ds">Roadmaps that pay off fast</div>
                  </a>
                </div>
              </div>
            </div>

            <div className="link-item">
              <a className="link" href="#pricing" onClick={go('pricing')}>Pricing</a>
            </div>
            <div className="link-item">
              <a className="link" href="#faq" onClick={go('faq')}>FAQ</a>
            </div>
          </div>
        </div>

        <div className="cta-wrap" style={{ gap: '24px' }}>
          <a className="phone" href="tel:+61410876136">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.9 12.5 19.79 19.79 0 0 1 1.88 3.9 2 2 0 0 1 3.86 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" style={{ fill: 'rgb(27, 28, 24)' }} />
            </svg>
            +61 41 087 6136
          </a>
          <button className="nav-cta" onClick={onBook}>
            Book a call
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>

        <button className="nav-burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </nav>

      <div className={`nav-mobile${open ? ' open' : ''}`}>
        <a href="#top" onClick={go('top')}>About</a>
        <a href="#services" onClick={go('services')}>Services</a>
        <a href="#stats" onClick={go('stats')}>Results</a>
        <a href="#deploy" onClick={go('deploy')}>How we work</a>
        <a href="#pricing" onClick={go('pricing')}>Pricing</a>
        <a href="#faq" onClick={go('faq')}>FAQ</a>
        <div className="nav-mobile-cta">
          <button className="nav-cta" style={{ justifyContent: 'center' }} onClick={() => { setOpen(false); onBook(); }}>
            Book a call
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
