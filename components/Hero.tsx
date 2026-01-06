
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Warm Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=2000"
          alt="Spa Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 overlay-warm"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="inline-block px-4 py-1 border border-[#e8c28d]/50 rounded-full mb-6 bg-[#4a3010]/20 backdrop-blur-sm">
          <span className="text-[#e8c28d] text-sm font-semibold uppercase tracking-widest">A Tranquil Oasis in Silay</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight serif">
          Unwind Your Mind, <br />
          <span className="text-[#e8c28d] italic">Renew Your Body.</span>
        </h1>
        
        <p className="text-[#fdf6e3]/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Escape the chaos and indulge in premium spa treatments designed to restore your natural balance and glow.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-10 py-4 bg-[#e8c28d] hover:bg-[#f3d4a8] text-[#4a3010] font-bold rounded-full transition-all transform hover:scale-105 shadow-xl">
            Book an Appointment
          </button>
          <button className="w-full sm:w-auto px-10 py-4 border-2 border-[#e8c28d] text-[#e8c28d] hover:bg-[#e8c28d] hover:text-[#4a3010] font-bold rounded-full transition-all">
            View Services
          </button>
        </div>
      </div>

      {/* Aesthetic flourish - scrolling indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#e8c28d]/50 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-[#e8c28d] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
