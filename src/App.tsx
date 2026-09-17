import React from 'react';
import NavHero from './components/NavHero';
import V11Features from './components/V11Features';
import Features from './components/Features';
import Pricing from './components/Pricing';
import ReviewsContact from './components/ReviewsContact';
import Faqs from './components/Faqs';
import './index.css';

export default function App() {
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
