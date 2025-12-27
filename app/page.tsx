import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import FreeTools from './components/FreeTools';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

// Rename to avoid duplicate Home export conflict
export default function LandingPage() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <FreeTools />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}