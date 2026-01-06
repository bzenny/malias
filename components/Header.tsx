
import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'selfcare') => void;
  activePage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, activePage }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', action: () => onNavigate('home'), id: 'home' },
    { name: 'Self-Care', action: () => onNavigate('selfcare'), id: 'selfcare' },
    { name: 'Services', action: () => { onNavigate('home'); setTimeout(() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'}), 100); }, id: 'services' },
    { name: 'Contact', action: () => { onNavigate('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100); }, id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur-sm border-b border-[#e8c28d]/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Desktop Nav Left */}
          <nav className="hidden md:flex space-x-8">
            {navItems.slice(0, 2).map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className={`font-medium transition-colors ${activePage === item.id ? 'text-[#4a3010] border-b-2 border-[#8a6d3b]' : 'text-[#8a6d3b] hover:text-[#4a3010]'}`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Logo Center */}
          <div 
            onClick={() => onNavigate('home')}
            className="flex-shrink-0 flex items-center justify-center flex-col cursor-pointer group"
          >
            <div className="relative w-16 h-16 bg-[#e8c28d] rounded-full flex items-center justify-center border-2 border-[#8a6d3b] shadow-md mb-1 transition-transform group-hover:scale-105 overflow-hidden">
               {/* Visual interpretation of the logo */}
               <div className="absolute inset-0 bg-gradient-to-br from-[#e8c28d] to-[#b38b4d]"></div>
               <div className="z-10 w-full h-full p-2 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-[#4a3010]/80">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
                    <path d="M50 20 Q70 50 50 80 Q30 50 50 20" fill="currentColor" opacity="0.4" />
                    <circle cx="50" cy="45" r="10" fill="currentColor" />
                    <path d="M20 70 Q50 60 80 70" stroke="currentColor" fill="none" strokeWidth="2" />
                  </svg>
               </div>
            </div>
            <span className="serif text-xl font-bold tracking-tight text-[#4a3010]">MALIA'S</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#8a6d3b] -mt-1 font-bold">Salon & Spa</span>
          </div>

          {/* Desktop Nav Right */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.slice(2).map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className="text-[#8a6d3b] hover:text-[#4a3010] font-medium transition-colors"
              >
                {item.name}
              </button>
            ))}
            <button className="bg-[#8a6d3b] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#4a3010] transition-colors shadow-sm">
              Book Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#8a6d3b] p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#fdfaf3] border-b border-[#e8c28d] py-4">
          <div className="flex flex-col space-y-4 px-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => { item.action(); setIsMenuOpen(false); }}
                className="text-left text-[#4a3010] text-lg font-medium"
              >
                {item.name}
              </button>
            ))}
            <button className="bg-[#8a6d3b] text-white px-6 py-3 rounded-md font-semibold text-center">
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
