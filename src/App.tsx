import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';

const Marquee = lazy(() => import('./components/Marquee'));
const Stats = lazy(() => import('./sections/Stats'));
const BeforeAfter = lazy(() => import('./sections/BeforeAfter'));
const Services = lazy(() => import('./sections/Services'));
const AboutWhy = lazy(() => import('./sections/AboutWhy'));
const VideoReel = lazy(() => import('./sections/VideoReel'));
const Location = lazy(() => import('./sections/Location'));
const Contact = lazy(() => import('./sections/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <Marquee />
          <Stats />
          <BeforeAfter />
          <Services />
          <AboutWhy />
          <VideoReel />
          <Location />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
