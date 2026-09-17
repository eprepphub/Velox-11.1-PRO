import React, { useEffect } from 'react';
import NavHero from './components/NavHero';
import V11Features from './components/V11Features';
import Features from './components/Features';
import Pricing from './components/Pricing';
import ReviewsContact from './components/ReviewsContact';
import Faqs from './components/Faqs';
import './index.css';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(sec => {
      sec.classList.add('fade-section');
      observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#050505] text-gray-300 font-sans antialiased overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      <NavHero />
      <V11Features />
      <Features />
      <Pricing />
      <Faqs />
      <ReviewsContact />
    </div>
  );
}
