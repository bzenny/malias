
import React from 'react';
import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-[#4a3010] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold serif mb-6">Visit Our Sanctuary</h2>
            <p className="text-[#e8c28d]/80 text-lg leading-relaxed max-w-lg">
              Located in the heart of Silay City, our spa provides a serene environment where you can truly escape the hustle of daily life.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#e8c28d] p-3 rounded-xl text-[#4a3010]">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[#e8c28d] font-bold text-sm uppercase tracking-wider">Call Us</p>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-2xl font-bold hover:text-[#e8c28d] transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#e8c28d] p-3 rounded-xl text-[#4a3010]">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[#e8c28d] font-bold text-sm uppercase tracking-wider">Find Us</p>
                  <p className="text-xl font-medium leading-relaxed">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#e8c28d] p-3 rounded-xl text-[#4a3010]">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-[#e8c28d] font-bold text-sm uppercase tracking-wider">Business Hours</p>
                  <p className="text-xl font-medium">{CONTACT_INFO.hours}</p>
                </div>
              </div>
            </div>

            <div className="pt-8 flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-[#e8c28d]/30 flex items-center justify-center hover:bg-[#e8c28d] hover:text-[#4a3010] transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-[#e8c28d]/30 flex items-center justify-center hover:bg-[#e8c28d] hover:text-[#4a3010] transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="relative">
            {/* Mock Map / Visual Element */}
            <div className="aspect-square bg-[#e8c28d]/10 rounded-3xl overflow-hidden border-2 border-[#e8c28d]/20 relative">
               <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200" 
                alt="Silay City Location"
                className="w-full h-full object-cover opacity-60"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#e8c28d] text-[#4a3010] px-8 py-4 rounded-2xl shadow-2xl text-center">
                    <MapPin className="mx-auto mb-2" size={32} />
                    <span className="font-bold text-lg">Malia's Salon & Spa</span>
                    <p className="text-sm opacity-80">Open Daily</p>
                  </div>
               </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-4 border-r-4 border-[#e8c28d]/50 rounded-tr-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-4 border-l-4 border-[#e8c28d]/50 rounded-bl-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
