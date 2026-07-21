import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { MenuSection } from './components/MenuSection';
import { FeaturesSection } from './components/FeaturesSection';
import { AccessSection } from './components/AccessSection';
import { StickyCTA } from './components/StickyCTA';
import { Footer } from './components/Footer';
import { FONTS } from './constants/theme';

export default function App() {
  return (
    <div
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
      style={{ fontFamily: FONTS.sans }}
    >
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <MenuSection />
        <FeaturesSection />
        <AccessSection />
      </main>
      <StickyCTA />
      <Footer />
    </div>
  );
}