import { motion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion';
import { useLenis } from './hooks/useLenis';
import React, { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import ProcessSection from './sections/ProcessSection';
import Services from './sections/Services';
import BeforeAfter from './sections/BeforeAfter';
import AboutWhy from './sections/AboutWhy';
import GalleryTestimonials from './sections/GalleryTestimonials';
import Contact from './sections/Contact';
import CustomCursor from './components/CustomCursor';
import Hero3D from './components/Hero3D';

function App() {
  useLenis();
  const { scrollYProgress } = useScroll();
  const scrollVelocity = useVelocity(scrollYProgress);
  
  // Optimized Skew logic using useSpring for smoothness
  const skewVelocity = useSpring(scrollVelocity, { stiffness: 400, damping: 30 });
  const skew = useTransform(skewVelocity, [-1, 1], [-5, 5]); // Reduced skew for better visibility triggers

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-[#010101] text-white selection:bg-primary/30 selection:text-white cursor-none">
      <CustomCursor />
      <Hero3D />
      
      <motion.div 
        className="origin-center"
      >
        <Navbar />
        
        <main>
          <Hero />
          <ProcessSection />
          <Services />
          <BeforeAfter />
          <AboutWhy />
          <GalleryTestimonials />
          <Contact />
        </main>

        <Footer />
      </motion.div>

      {/* Global Overlays */}
      <div className="bg-noise fixed inset-0 z-[100] pointer-events-none" />
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[110] origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}

export default App;
