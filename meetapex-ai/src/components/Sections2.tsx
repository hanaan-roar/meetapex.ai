import React from 'react';
import { Spark, Icon } from './Primitives';

const STEPS = [
  { n: '01', t: 'Discovery call', d: "It's free. Our Head of AI reviews your requirements and outlines the next steps." },
  { n: '02', t: 'Choose hourly or monthly', d: 'Start from A$60 per hour for specific builds, or bring on a dedicated AI expert or full team on a monthly plan.' },
  { n: '03', t: 'Build and deploy', d: 'Applications, automations and workflows deployed directly into your business. We work with you directly via Slack Connect.' },
  { n: '04', t: 'Expand over time', d: 'New AI capabilities continue rolling out as your business grows and new opportunities emerge.' },
];

export default function Deploy({ onBook }: { onBook: () => void }) {
  return (
    <section className="sec deploy ax-section" id="deploy">
      <div className="ax-container">
        <div className="deploy-head rv">
          <div className="sec-head" style={{ marginBottom: 0 }}>
            <span className="eyebrow-dark"><Spark size={14} color="#10453F" />How we work</span>
            <h2 className="h2" style={{ marginTop: '1rem' }}>How we deploy AI inside your business</h2>
          </div>
        </div>
        <div className="timeline">
          {STEPS.map((s, i) => (
            <div className="tl-step rv" data-d={i + 1} key={s.n}>
              <span className="node">{s.n}</span>
              <h4 style={{ margin: '24px 0px 8px' }}>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
        <div className="deploy-band rv section-dark">
          <h3 className="h3">See how AI can work inside your business.</h3>
          <button className="btn btn-white" onClick={onBook}>
            Book a call
            <span className="arr"><Icon name="arrowRight" size={17} stroke={1.9} /></span>
          </button>
        </div>
      </div>
    </section>
  );
}
