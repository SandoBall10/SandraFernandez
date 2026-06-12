/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BioSection from './components/BioSection';
import PlanGobierno from './components/PlanGobierno';
import AgendaSlider from './components/AgendaSlider';
import WalksCarousel from './components/WalksCarousel';
import JoinForm from './components/JoinForm';
import Footer from './components/Footer';
import RoadScrollBackground from './components/RoadScrollBackground';

export default function App() {
  const scrollToJoin = () => {
    const el = document.getElementById('unete');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-[#FFCA00] selection:text-black">
      <Navbar onJoinClick={scrollToJoin} />
      <RoadScrollBackground />

      <div id="light-sections" className="relative bg-white">
        <div className="relative z-10">
          <Hero onJoinClick={scrollToJoin} />
          <BioSection />
          <PlanGobierno />
          <WalksCarousel />
          <AgendaSlider />
        </div>
      </div>

      <JoinForm />
      <Footer />
    </div>
  );
}
