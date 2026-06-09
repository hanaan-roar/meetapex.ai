import React, { useState, useEffect } from 'react';
import { Icon, Spark } from './Primitives';

interface Props {
  open: boolean;
  onClose: () => void;
}

interface Form {
  name: string;
  email: string;
  company: string;
  message: string;
}

export default function BookingModal({ open, onClose }: Props) {
  const [form, setForm] = useState<Form>({ name: '', email: '', company: '', message: '' });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    if (!open) { setSent(false); setForm({ name: '', email: '', company: '', message: '' }); }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSent(true);
  };

  if (!open) return null;

  return (
    <div
      className="ax-modal-scrim"
      role="dialog"
      aria-modal="true"
      aria-label="Book a call"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
    >
      <div className="ax-modal" style={{ position: 'relative', width: '100%', padding: 0, overflow: 'hidden' }}>
        <button className="ax-modal-close" onClick={onClose} aria-label="Close" style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 2 }}>
          <Icon name="x" size={20} stroke={2} />
        </button>

        {sent ? (
          <div style={{ padding: '56px 40px', textAlign: 'center' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--apex-mint)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
              <Icon name="check" size={28} stroke={2.2} color="#0B2C26" />
            </div>
            <h3 style={{ marginBottom: '12px' }}>You're booked in!</h3>
            <p style={{ color: 'var(--ink-warm-2)', lineHeight: 1.6, marginBottom: '32px' }}>
              We'll reach out to confirm a time. In the meantime, feel free to explore how Apex AI has helped other Australian businesses.
            </p>
            <button className="btn btn-mint" onClick={onClose} style={{ width: '100%', justifyContent: 'center' }}>
              Done
            </button>
          </div>
        ) : (
          <div style={{ padding: '40px' }}>
            <div style={{ marginBottom: '28px', paddingRight: '32px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--green-text)', marginBottom: '12px' }}>
                <Spark size={12} color="#10453F" />Book a call
              </span>
              <h3 style={{ marginBottom: '8px', fontSize: 'var(--text-h3)' }}>Let's talk AI</h3>
              <p style={{ color: 'var(--ink-warm-2)', lineHeight: 1.6, margin: 0 }}>Free discovery call with our Head of AI. No commitment.</p>
            </div>

            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label className="ax-label" htmlFor="bm-name">Full name</label>
                <input className="ax-input" id="bm-name" type="text" placeholder="Jane Smith" required value={form.name} onChange={set('name')} style={{ padding: '0.6rem 0.85rem' }} />
              </div>
              <div>
                <label className="ax-label" htmlFor="bm-email">Work email</label>
                <input className="ax-input" id="bm-email" type="email" placeholder="jane@company.com" required value={form.email} onChange={set('email')} style={{ padding: '0.6rem 0.85rem' }} />
              </div>
              <div>
                <label className="ax-label" htmlFor="bm-company">Company</label>
                <input className="ax-input" id="bm-company" type="text" placeholder="Acme Co." value={form.company} onChange={set('company')} style={{ padding: '0.6rem 0.85rem' }} />
              </div>
              <div>
                <label className="ax-label" htmlFor="bm-message">
                  What are you looking to do?{' '}
                  <span style={{ color: 'var(--ink-warm-3)', fontWeight: 400, textTransform: 'none', letterSpacing: 'normal' }}>(optional)</span>
                </label>
                <textarea className="ax-input" id="bm-message" placeholder="Automate my team's reporting, build a customer-facing AI chatbot…" rows={3} value={form.message} onChange={set('message')} style={{ resize: 'vertical', minHeight: '88px', padding: '0.6rem 0.85rem' }} />
              </div>
              <button className="btn btn-mint" type="submit" disabled={submitting} style={{ width: '100%', justifyContent: 'center', marginTop: '4px' }}>
                {submitting ? 'Sending…' : 'Book a free call'}
                {!submitting && <span className="arr"><Icon name="arrowRight" size={17} stroke={1.9} /></span>}
              </button>
              <p style={{ fontSize: '12px', color: 'var(--ink-warm-3)', textAlign: 'center', lineHeight: 1.5, margin: 0 }}>
                By submitting you agree to our{' '}
                <a href="https://app.meetapex.ai/terms" style={{ textDecoration: 'underline' }}>Terms</a>.
                No spam. Unsubscribe any time.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
