/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BioSection from './components/BioSection';
import PlanGobierno from './components/PlanGobierno';
import AgendaSlider from './components/AgendaSlider';
import WalksCarousel from './components/WalksCarousel';
import JoinForm from './components/JoinForm';
import Footer from './components/Footer';
import { TESTIMONIALS } from './data';
import { Quote, Star, Sparkles } from 'lucide-react';

export default function App() {
  
  // Custom scroll routing triggers
  const scrollToJoin = () => {
    const el = document.getElementById('unete');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToPlan = () => {
    const el = document.getElementById('plan');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-[#FFCA00] selection:text-black">
      
      {/* 1. Header & Navigation */}
      <Navbar onJoinClick={scrollToJoin} />

      {/* 2. Hero Section */}
      <Hero
        onLearnMoreClick={scrollToPlan}
        onDownloadClick={scrollToPlan}
      />

      {/* 3. Conoce a Sandra (Bio Timeline and stats) */}
      <BioSection />

      {/* 4. Plan de Gobierno Explorer / Manual Downloader */}
      <PlanGobierno />

      {/* 6. Walks campaigns with carousels and immersive detail modals */}
      <WalksCarousel />

      {/* 7. Event Agenda carousel */}
      <AgendaSlider />

      {/* 8. Volunteer Sign-up lead capture form */}
      <JoinForm />

      {/* 9. Dark contrast high-closure footer */}
      <Footer />

    </div>
  );
}
