import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import BeforeAfter from './sections/BeforeAfter';
import AboutWhy from './sections/AboutWhy';
import GalleryTestimonials from './sections/GalleryTestimonials';
import Contact from './sections/Contact';

function SectionDivider() {
  return <div className="section-divider" />;
}

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="relative min-h-screen bg-background text-white">
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <SectionDivider />
          <BeforeAfter />
          <SectionDivider />
          <Services />
          <SectionDivider />
          <AboutWhy />
          <SectionDivider />
          <GalleryTestimonials />
          <SectionDivider />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-50 origin-left bg-primary"
        style={{ scaleX }}
      />
    </div>
  );
}

export default App;
