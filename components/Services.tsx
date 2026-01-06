
import React from 'react';
import { PRIMARY_SERVICES, FEATURED_SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-[#fdf6e3]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4a3010] mb-2 serif">Our Services</h2>
          <p className="text-[#8a6d3b] italic serif text-lg">Curated wellness experiences tailored to you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Primary Services */}
          <div>
            <h3 className="text-2xl font-bold text-[#4a3010] mb-8 pb-4 border-b-2 border-[#e8c28d] serif flex justify-between items-center">
              {PRIMARY_SERVICES.title}
              <span className="w-2 h-2 rounded-full bg-[#e8c28d]"></span>
            </h3>
            <ul className="space-y-6">
              {PRIMARY_SERVICES.items.map((item, idx) => (
                <li key={idx} className="group flex justify-between items-end border-b border-[#e8c28d]/30 pb-2">
                  <div className="flex-grow">
                    <span className="text-lg font-medium text-[#4a3010] group-hover:text-[#8a6d3b] transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <div className="border-b border-dotted border-[#e8c28d]/50 flex-grow mx-4 mb-1"></div>
                  <span className="font-bold text-[#4a3010]">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Services */}
          <div>
            <h3 className="text-2xl font-bold text-[#4a3010] mb-8 pb-4 border-b-2 border-[#e8c28d] serif flex justify-between items-center">
              {FEATURED_SERVICES.title}
              <span className="w-2 h-2 rounded-full bg-[#e8c28d]"></span>
            </h3>
            <ul className="space-y-6">
              {FEATURED_SERVICES.items.map((item, idx) => (
                <li key={idx} className="group flex justify-between items-end border-b border-[#e8c28d]/30 pb-2">
                  <div className="flex-grow">
                    <span className="text-lg font-medium text-[#4a3010] group-hover:text-[#8a6d3b] transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <div className="border-b border-dotted border-[#e8c28d]/50 flex-grow mx-4 mb-1"></div>
                  <span className="font-bold text-[#4a3010]">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 p-10 bg-white/50 border-2 border-dashed border-[#e8c28d] rounded-3xl text-center">
          <p className="text-[#4a3010] text-lg italic serif leading-relaxed">
            "The most relaxing place in Silay. The staff is professional and the atmosphere is simply magical. Highly recommend the Swedish Massage!"
          </p>
          <p className="mt-4 font-bold text-[#8a6d3b] uppercase tracking-widest text-sm">— Happy Client</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
