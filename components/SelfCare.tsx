
import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Sparkles, Heart, Brain, Activity } from 'lucide-react';

const SelfCare: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Editorial Header */}
      <section className="bg-[#fdf6e3] py-20 border-b border-[#e8c28d]/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-[#8a6d3b] uppercase tracking-[0.3em] font-bold text-xs mb-4 block">The Malia's Journal</span>
          <h1 className="text-5xl md:text-6xl font-bold text-[#4a3010] mb-6 serif">Self-Care & Wellness</h1>
          <p className="text-xl text-[#4a3010]/70 italic serif leading-relaxed">
            Exploring the vital connection between professional touch, mental clarity, and physical longevity.
          </p>
        </div>
      </section>

      {/* Philosophy Pillars */}
      <section className="py-16 bg-[#fdfaf3]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-8 rounded-3xl bg-white shadow-sm border border-[#e8c28d]/10">
            <div className="w-12 h-12 bg-[#e8c28d]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#8a6d3b]">
              <Brain size={24} />
            </div>
            <h3 className="serif text-2xl font-bold mb-4">Mental Clarity</h3>
            <p className="text-[#4a3010]/70 text-sm leading-relaxed">Quiet the internal noise and regulate your nervous system through specialized massage techniques.</p>
          </div>
          <div className="p-8 rounded-3xl bg-white shadow-sm border border-[#e8c28d]/10">
            <div className="w-12 h-12 bg-[#e8c28d]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#8a6d3b]">
              <Heart size={24} />
            </div>
            <h3 className="serif text-2xl font-bold mb-4">Emotional Health</h3>
            <p className="text-[#4a3010]/70 text-sm leading-relaxed">Safe, professional touch releases oxytocin, reducing feelings of isolation and stress.</p>
          </div>
          <div className="p-8 rounded-3xl bg-white shadow-sm border border-[#e8c28d]/10">
            <div className="w-12 h-12 bg-[#e8c28d]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#8a6d3b]">
              <Activity size={24} />
            </div>
            <h3 className="serif text-2xl font-bold mb-4">Physical Vitality</h3>
            <p className="text-[#4a3010]/70 text-sm leading-relaxed">Improve circulation, lymphatic drainage, and muscle recovery for a body that feels youthful.</p>
          </div>
        </div>
      </section>

      {/* Blog Feed */}
      <section className="py-20 max-w-5xl mx-auto px-4">
        <div className="space-y-24">
          {BLOG_POSTS.map((post, idx) => (
            <article key={post.id} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 w-full h-80 md:h-[450px] rounded-[40px] overflow-hidden shadow-2xl relative">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#8a6d3b]">
                  {post.category}
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold serif text-[#4a3010] leading-tight">{post.title}</h2>
                <div className="w-16 h-1 bg-[#8a6d3b]"></div>
                <p className="text-lg font-bold text-[#8a6d3b] serif italic">{post.excerpt}</p>
                <p className="text-[#4a3010]/80 leading-relaxed">
                  {post.content}
                </p>
                <button className="text-[#4a3010] font-bold border-b-2 border-[#8a6d3b] pb-1 hover:text-[#8a6d3b] transition-colors">
                  Continue Reading
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-[#4a3010] rounded-[60px] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#e8c28d]/10 rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <Sparkles className="mx-auto mb-6 text-[#e8c28d]" size={40} />
            <h2 className="text-3xl md:text-4xl font-bold text-[#e8c28d] mb-6 serif">Ready for your transformation?</h2>
            <p className="text-white/70 mb-10 text-lg">Your journey toward better health starts with a single appointment.</p>
            <button className="bg-[#e8c28d] text-[#4a3010] px-12 py-4 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:scale-105 shadow-xl">
              Book Your Therapy Session
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SelfCare;
