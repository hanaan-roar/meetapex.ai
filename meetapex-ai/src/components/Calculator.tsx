import React, { useState, useMemo } from 'react';
import { Spark, Icon } from './Primitives';

const AUD = (n: number) => 'A$' + Math.round(n).toLocaleString('en-AU');

export default function Calculator({ onBook }: { onBook: () => void }) {
  const [team, setTeam] = useState(8);
  const [hours, setHours] = useState(12);
  const [rate, setRate] = useState(55);

  const { annual, weekly, hoursYear } = useMemo(() => {
    const reclaim = 0.65;
    const wH = team * hours * reclaim;
    const wC = wH * rate;
    const a = wC * 52;
    return { annual: a, weekly: wC, hoursYear: wH * 52 };
  }, [team, hours, rate]);

  const field = (label: string, value: number | string, suffix: string, min: number, max: number, step: number, set: (v: number) => void) => (
    <div className="calc-field">
      <div className="row">
        <span className="lbl">{label}</span>
        <span className="val">{value}{suffix}</span>
      </div>
      <input
        className="crange"
        type="range"
        min={min}
        max={max}
        step={step}
        value={typeof value === 'number' ? value : Number(String(value).replace(/[^0-9]/g, ''))}
        onChange={(e) => set(Number(e.target.value))}
        aria-label={label}
      />
    </div>
  );

  return (
    <section className="calc" id="calculator" style={{ padding: '103px 0px 104px', borderWidth: '0px 0px 1px', borderStyle: 'solid', borderColor: 'rgba(27, 28, 24, 0.1)' }}>
      <div className="wrap">
        <div className="sec-head center rv">
          <span className="eyebrow-center">
            <Spark size={14} color="#10453F" />Savings calculator
          </span>
          <h2 className="h2">See how much your business could <span className="hl-select">save</span> with AI</h2>
        </div>
        <div className="calc-card rv" data-d="1" style={{ borderColor: 'rgba(27, 28, 24, 0.2)' }}>
          <div className="calc-inputs" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
            {field('Team members doing repetitive work', team, '', 1, 50, 1, setTeam)}
            {field('Manual hours per person, per week', hours, ' hrs', 1, 40, 1, setHours)}
            {field('Average hourly cost', AUD(rate), '', 25, 150, 5, setRate)}
            <p className="calc-foot">Estimate assumes Apex AI automates roughly 65% of repetitive manual work. Your exact savings are scoped in your free discovery call.</p>
          </div>
          <div className="calc-out section-dark">
            <div className="ann-lbl">Estimated annual saving</div>
            <div className="ann-val">{AUD(annual)}</div>
            <div className="sub-grid">
              <div>
                <div className="sv">{AUD(weekly)}</div>
                <div className="sl">Saved per week</div>
              </div>
              <div>
                <div className="sv">{Math.round(hoursYear).toLocaleString('en-AU')} hrs</div>
                <div className="sl">Reclaimed per year</div>
              </div>
            </div>
            <div className="cta-row">
              <button className="ax-btn ax-btn-mint ax-btn-md" style={{ width: '100%', justifyContent: 'center' }} onClick={onBook}>
                Book a call
                <span className="arr"><Icon name="arrowRight" size={17} stroke={1.9} /></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
