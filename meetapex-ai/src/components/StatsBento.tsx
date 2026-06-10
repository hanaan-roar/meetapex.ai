import React, { useRef, useEffect, useState } from 'react';
import { Spark } from './Primitives';

function useCountUp(target: number, active: boolean) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(target); return; }
    let raf: number;
    let start: number | undefined;
    const dur = 1100;
    const tick = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active]);
  return n;
}

const STATS = [
  { pre: 'A$', target: 80, unit: 'K', label: 'In savings', desc: 'Average operational savings clients capture after deploying AI across their workflows.' },
  { pre: '', target: 3, unit: '×', label: 'Faster delivery', desc: 'We launch AI systems in a fraction of the time it takes to recruit and build internally.' },
  { pre: '', target: 20, unit: 'hrs', label: 'Saved per week', desc: 'Average manual work eliminated once AI workflows replace repetitive operational tasks.' },
];

function CountUpNum({ target, active }: { target: number; active: boolean }) {
  return <>{useCountUp(target, active)}</>;
}

export default function StatsBento() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { setActive(true); io.disconnect(); } });
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="stats ax-section" id="stats" ref={ref}>
      <div className="ax-container">
        <div className="sec-head rv" style={{ marginBottom: 'var(--space-8)' }}>
          <span className="eyebrow-dark"><Spark size={14} color="#10453F" />The impact</span>
          <h2 className="h2">This is what working with Apex AI <span className="hl-select">delivers</span></h2>
        </div>
        <div className="stats-editorial">
          {STATS.map((s, i) => (
            <div className="stat-col rv" data-d={i + 1} key={i} style={{ borderStyle: 'solid', borderColor: 'rgba(27, 28, 24, 0.08)', borderWidth: '0px', padding: '32px 48px 48px 0px' }}>
              <div className="stat-number">
                {s.pre && <span className="stat-pre">{s.pre}</span>}
                <span className="stat-big"><CountUpNum target={s.target} active={active} /></span>
                <span className="stat-unit">{s.unit}</span>
              </div>
              <div className="stat-label" style={{ margin: '36px 0px 16px' }}>{s.label}</div>
              <p className="stat-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
