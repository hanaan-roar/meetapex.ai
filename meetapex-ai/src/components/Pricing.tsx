import React, { useEffect } from 'react';
import { Spark, Icon } from './Primitives';

function Ck() {
  return <Icon name="check" size={15} stroke={2.2} color="#10453F" />;
}

const PRICING_LAND_CSS = `
.pricing-land { position: relative; background: transparent !important; overflow: hidden; }
.pricing-land > .ax-container { position: relative; z-index: 1; }
.pricing-land .plan {
  background: rgba(255,255,255,0.18) !important;
  -webkit-backdrop-filter: blur(12px); backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.25) !important;
  border-radius: 16px !important;
  box-shadow: none !important;
}
.pricing-land .plan.featured {
  background: #ffffff !important;
  -webkit-backdrop-filter: none; backdrop-filter: none;
  border: none !important;
  border-radius: 16px !important;
  box-shadow: 0 24px 48px rgba(0,0,0,0.18) !important;
}
.pricing-land .plan.featured::before { display: none !important; }
.pricing-land .plan .pname,
.pricing-land .plan .pdesc,
.pricing-land .plan .pamt .pre,
.pricing-land .plan .pamt .amt,
.pricing-land .plan .pamt .per,
.pricing-land .plan .pnote,
.pricing-land .plan .pfeat li,
.pricing-land .plan .pbest .bl,
.pricing-land .plan .pbest .bt,
.pricing-land .plan .pop-badge { color: #111111 !important; }
.pricing-land .plan .pfeat li svg { color: #111111 !important; }
.pricing-land .plan .pamt,
.pricing-land .plan .pfeat,
.pricing-land .plan .pbest { border-top-color: rgba(17,17,17,0.14) !important; }
`;

const PLAYFAIR_ACCENT: React.CSSProperties = { fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 400, color: 'inherit' };

const PLANS = [
  {
    name: 'Flex', desc: 'On demand AI expertise',
    amount: 'A$60', per: '/hour', note: '',
    feats: ['20 hour minimum', 'Bring in an expert for specific builds, integrations or automations', 'Claude Max and Google AI Ultra plans (tokens included)'],
    best: 'Businesses with a specific AI task or project in mind', cta: 'Talk to us', feat: false, badge: '',
  },
  {
    name: 'Dedicated', desc: 'A dedicated AI expert building for your business', feat: true, badge: 'Popular',
    amount: 'A$5,000', per: '/month', note: '',
    feats: ['One dedicated specialist, full-time', 'Continuously building, deploying and expanding AI across your operations', 'Fully embedded in your tools, systems and workflows', 'Claude Max and Google AI Ultra plans (tokens included)'],
    best: 'Founders ready to move fast and go deep on AI', cta: 'Book a call',
  },
  {
    name: 'Team', desc: 'A full AI team inside your business',
    amount: 'Custom', per: ' pricing', note: '',
    feats: ['A full team of Apex AI experts across your business', 'Multiple workstreams running simultaneously', 'Built for broad, company-wide AI transformation', 'Claude Max and Google AI Ultra plans (tokens included)'],
    best: 'Scaling companies with broad AI ambitions', cta: 'Talk to us', feat: false, badge: '',
  },
  {
    name: 'Advisory', desc: 'Know exactly where AI fits in your business',
    amount: 'Custom', per: ' pricing', note: '',
    feats: ['An AI consulting session with our Head of AI', 'Maps your business and identifies your highest-value AI opportunities', 'Hands you a clear action plan before you spend a dollar on build'],
    best: 'Founders exploring AI for the first time', cta: 'Talk to us', feat: false, badge: '',
  },
];

export default function Pricing({ onBook }: { onBook: () => void }) {
  useEffect(() => {
    if (document.getElementById('playfair-import')) return;
    const s = document.createElement('style');
    s.id = 'playfair-import';
    s.textContent = "@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap');";
    document.head.appendChild(s);
  }, []);

  return (
    <section className="sec pricing ax-section pricing-land" id="pricing">
      <style>{PRICING_LAND_CSS}</style>
      <img
        src="/assets/pricing-landscape.png"
        alt=""
        aria-hidden="true"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: 0, pointerEvents: 'none' }}
      />
      <div className="ax-container">
        <div className="sec-head center rv">
          <span className="eyebrow-center">
            <Spark size={14} color="#10453F" />Pricing
          </span>
          <h2 className="h2">Simple plans for <span style={PLAYFAIR_ACCENT}>every stage</span></h2>
          <p className="lede" style={{ margin: '1.25rem auto 0' }}>Whether you are figuring out where AI fits or ready to scale it across your business, there is a plan built for where you are right now.</p>
        </div>
        <div className="plans rv" data-d="1">
          {PLANS.map((p) => (
            <div className={`plan${p.feat ? ' featured' : ''} ax-card ax-card--pricing`} key={p.name}>
              {p.badge && <span className="pop-badge">{p.badge}</span>}
              <h3 className="pname">{p.name}</h3>
              <p className="pdesc">{p.desc}</p>
              <div className="pamt">
                <span className="amt" style={p.amount === 'Custom' ? { fontSize: '3.25rem' } : undefined}>{p.amount}<span className="per">{p.per}</span></span>
                <p className="pnote">{p.note}</p>
              </div>
              <ul className="pfeat">
                {p.feats.map((f) => (
                  <li key={f}><Ck />{f}</li>
                ))}
              </ul>
              <div className="pbest">
                <div className="bl">Best for:</div>
                <div className="bt">{p.best}</div>
              </div>
              <button
                className={p.feat ? 'ax-btn ax-btn-primary ax-btn-md' : 'ax-btn ax-btn-secondary ax-btn-md'}
                style={{ width: '100%', marginTop: '1.5rem', justifyContent: 'center' }}
                onClick={onBook}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
