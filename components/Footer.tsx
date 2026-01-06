
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3a250c] text-[#e8c28d] py-12 border-t border-[#4a3010]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
               <div className="w-10 h-10 bg-[#e8c28d] rounded-full border border-[#4a3010] flex items-center justify-center font-bold text-[#4a3010] text-sm">M</div>
               <span className="serif text-2xl font-bold tracking-tight text-white">MALIA'S</span>
            </div>
            <p className="text-sm opacity-60 max-w-xs leading-relaxed">
              Silay City's premier destination for luxury spa and beauty services. Your wellness is our passion.
            </p>
          </div>
          
          <div className="flex gap-12 text-sm font-semibold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-white transition-colors">Careers</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#e8c28d]/10 text-center text-xs opacity-40 uppercase tracking-[0.3em]">
          &copy; {new Date().getFullYear()} Malia's Salon & Spa Silay City. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
