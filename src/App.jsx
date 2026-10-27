import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Services from './components/Services';
import Results from './components/Results';
import Reviews from './components/Reviews';
import Instagram from './components/Instagram';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import { useSmoothScroll } from './hooks/useSmoothScroll';

export default function App() {
  const [pronto, setPronto] = useState(false);

  useSmoothScroll(pronto);

  // rede de segurança: se algo travar o loader, o conteúdo aparece mesmo assim
  useEffect(() => {
    const t = setTimeout(() => setPronto(true), 6000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Loader onFinish={() => setPronto(true)} />
      <ScrollProgress />
      <Header />

      <main>
        <Hero pronto={pronto} />
        <Marquee />
        <About />
        <Services />
        <Results />
        <Reviews />
        <Instagram />
        <Contact />
      </main>

      <Footer />
      <FloatingCTA />
    </>
  );
}
