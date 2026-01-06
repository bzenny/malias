
import React from 'react';
import { FEATURES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-[#fdfaf3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4a3010] mb-4 serif">Relax & Pamper Yourself</h2>
          <div className="w-24 h-1 bg-[#e8c28d] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#e8c28d]/20"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={feature.imageUrl} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4a3010]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="text-white font-bold text-2xl serif">{feature.title}</span>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-[#4a3010]/70 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#8a6d3b]">{feature.price}</span>
                  <button className="flex items-center gap-2 text-sm font-bold text-[#4a3010] uppercase tracking-wider group-hover:text-[#8a6d3b] transition-colors">
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
