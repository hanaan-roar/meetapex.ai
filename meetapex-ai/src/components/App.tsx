import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import { Hero, Trust } from './Hero';
import { Services, Testimonial, WhyFounders } from './Sections1';
import StatsBento from './StatsBento';
import Calculator from './Calculator';
import Deploy from './Sections2';
import Pricing from './Pricing';
import { FAQ, EndZone } from './FAQEnd';
import BookingModal from './BookingModal';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const open = () => setBookingOpen(true);
  const close = () => setBookingOpen(false);

  useEffect(() => {
    const els = document.querySelectorAll('.rv');
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement;
          const d = parseFloat(el.dataset.d || '0') * 80;
          setTimeout(() => el.classList.add('in'), d);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav onBook={open} />
      <main>
        <Hero onBook={open} />
        <Trust />
        <Services />
        <Testimonial variant="New testimonial" />
        <WhyFounders />
        <StatsBento />
        <Calculator onBook={open} />
        <Deploy onBook={open} />
        <Pricing onBook={open} />
        <FAQ />
        <EndZone onBook={open} />
      </main>
      <BookingModal open={bookingOpen} onClose={close} />
    </>
  );
}
