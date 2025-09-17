import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
