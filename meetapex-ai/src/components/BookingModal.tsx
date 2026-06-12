import React, { useState } from 'react';
import { Button, Icon, Spark } from './Primitives';

interface Props {
  open: boolean;
  onClose: () => void;
}

interface Form {
  name: string;
  email: string;
  company: string;
  note: string;
}

export default function BookingModal({ open, onClose }: Props) {
  const [done, setDone] = useState(false);
  const [form, setForm] = useState<Form>({ name: '', email: '', company: '', note: '' });

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  if (!open) return null;

  return (
    <div className="ax-modal-scrim" onMouseDown={onClose}>
      <div className="ax-modal" onMouseDown={(e) => e.stopPropagation()}>
        <button className="ax-modal-close" onClick={onClose} aria-label="Close">
          <Icon name="x" size={20} />
        </button>
        {!done ? (
          <>
            <Spark size={20} color="var(--green-text)" />
            <h3>Book a strategy call</h3>
            <p className="sub">Tell us a little about your business. We&rsquo;ll be in touch within one business day.</p>
            <div className="ax-field-group">
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <label className="ax-label">Name</label>
                  <input className="ax-input" placeholder="Jordan Lee" value={form.name} onChange={set('name')} />
                </div>
                <div style={{ flex: 1 }}>
                  <label className="ax-label">Company</label>
                  <input className="ax-input" placeholder="Acme Pty Ltd" value={form.company} onChange={set('company')} />
                </div>
              </div>
              <div>
                <label className="ax-label">Work email</label>
                <input className="ax-input" placeholder="you@company.com.au" value={form.email} onChange={set('email')} />
              </div>
              <div>
                <label className="ax-label">What do you want to automate?</label>
                <textarea className="ax-input" rows={3} placeholder="Tell us about the workflow…" value={form.note} onChange={set('note')} />
              </div>
              <Button variant="primary" size="lg" iconRight="arrowRight" onClick={() => setDone(true)}>Request my call</Button>
            </div>
          </>
        ) : (
          <div className="ax-success">
            <div className="badge"><Icon name="check" size={28} /></div>
            <h3>You&rsquo;re booked in.</h3>
            <p className="sub">
              Thanks{form.name ? `, ${form.name.split(' ')[0]}` : ''} &mdash; we&rsquo;ll email you within one business day to lock in a time.
            </p>
            <Button variant="secondary" size="md" onClick={onClose}>Close</Button>
          </div>
        )}
      </div>
    </div>
  );
}
