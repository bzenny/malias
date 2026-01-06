
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SpaAssistant from './components/SpaAssistant';
import SelfCare from './components/SelfCare';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<'home' | 'selfcare'>('home');

  return (
    <div className="min-h-screen bg-[#fdfaf3] text-[#4a3010] flex flex-col overflow-x-hidden">
      <Header onNavigate={setActivePage} activePage={activePage} />
      
      <main className="flex-grow">
        {activePage === 'home' ? (
          <>
            <Hero />
            
            {/* Promotion Banner */}
            <section className="bg-[#e8c28d] py-3 text-center text-[#4a3010] font-semibold text-sm tracking-wide border-y border-[#d4af37]">
              <p>SPECIAL OFFER: Seniors, First Responders, PWDs & Students get 20% OFF all services!</p>
            </section>

            <section id="features">
              <Features />
            </section>

            <section id="services">
              <Services />
            </section>

            <section id="contact">
              <Contact />
            </section>
          </>
        ) : (
          <SelfCare />
        )}
      </main>

      <Footer />
      
      {/* Floating AI Assistant */}
      <SpaAssistant />
    </div>
  );
};

export default App;
