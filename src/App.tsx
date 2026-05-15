import { lazy, Suspense, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Loader from './components/Loader';
import SmoothScroll from './components/SmoothScroll';
import ScrollProgress from './components/ScrollProgress';

const Marquee = lazy(() => import('./components/Marquee'));
const Stats = lazy(() => import('./sections/Stats'));
const BeforeAfter = lazy(() => import('./sections/BeforeAfter'));
const Transformare = lazy(() => import('./sections/Transformare'));
const Services = lazy(() => import('./sections/Services'));
const AboutWhy = lazy(() => import('./sections/AboutWhy'));
const VideoReel = lazy(() => import('./sections/VideoReel'));
const Location = lazy(() => import('./sections/Location'));
const Contact = lazy(() => import('./sections/Contact'));


function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}

      {/* Background layers */}
      <div className="velo-grid-bg" />
      <div className="velo-orb" />
      <div className="velo-orb-2" />
      <div className="velo-scan" />
      <div className="velo-noise" />

      <ScrollProgress />

      <SmoothScroll>
      <div
        className="min-h-screen text-[var(--ink)]"
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.4s ease' }}
      >
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={null}>
            <Marquee />
            <Stats />
            <BeforeAfter />
            <Transformare />
            <Services />
            <AboutWhy />
            <VideoReel />
            <Location />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
      </SmoothScroll>
    </>
  );
}

export default App;
