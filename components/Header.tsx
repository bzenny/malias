
import React from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Specials', href: '#features' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#fdf6e3]/95 backdrop-blur-sm border-b border-[#e8c28d]/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Desktop Nav Left */}
          <nav className="hidden md:flex space-x-8">
            {navItems.slice(0, 2).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#8a6d3b] hover:text-[#4a3010] font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Logo Center */}
          <div className="flex-shrink-0 flex items-center justify-center flex-col">
            <div className="w-16 h-16 bg-[#e8c28d] rounded-full flex items-center justify-center border-2 border-[#8a6d3b] shadow-md mb-1 group cursor-pointer transition-transform hover:scale-105 overflow-hidden">
               {/* Simplified SVG representation of the logo icon */}
               <img src="https://picsum.photos/seed/malia/200/200" alt="Malia's Logo" className="w-full h-full object-cover opacity-80" />
            </div>
            <span className="serif text-xl font-bold tracking-tight text-[#4a3010]">MALIA'S</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#8a6d3b] -mt-1 font-bold">Salon & Spa</span>
          </div>

          {/* Desktop Nav Right */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.slice(2).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#8a6d3b] hover:text-[#4a3010] font-medium transition-colors"
              >
                {item.name}
              </a>
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
              <a
                key={item.name}
                href={item.href}
                className="text-[#4a3010] text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
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
