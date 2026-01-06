
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { getSpaAssistantResponse } from '../services/geminiService';

const SpaAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([
    { role: 'assistant', text: "Hello! I'm your Malia's Spa Assistant. How can I help you relax today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMsg = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const aiResponse = await getSpaAssistantResponse(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white w-[350px] sm:w-[400px] h-[500px] rounded-3xl shadow-2xl border border-[#e8c28d]/30 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-[#4a3010] p-4 flex justify-between items-center text-[#e8c28d]">
            <div className="flex items-center gap-3">
              <div className="bg-[#e8c28d] p-1.5 rounded-full text-[#4a3010]">
                <Sparkles size={18} />
              </div>
              <span className="serif font-bold tracking-wide">Malia's Concierge</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
              <X size={20} />
            </button>
          </div>

          {/* Messages area */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-[#fdfaf3]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-[#8a6d3b] text-white rounded-br-none' 
                    : 'bg-white border border-[#e8c28d]/50 text-[#4a3010] rounded-bl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-[#e8c28d]/50 p-3 rounded-2xl rounded-bl-none flex gap-1">
                  <div className="w-1.5 h-1.5 bg-[#8a6d3b] rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-[#8a6d3b] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-[#8a6d3b] rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input area */}
          <div className="p-4 border-t border-[#e8c28d]/20 bg-white">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about our services..."
                className="flex-grow bg-[#fdfaf3] border border-[#e8c28d]/30 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8a6d3b]/50"
              />
              <button 
                onClick={handleSendMessage}
                disabled={isLoading}
                className="bg-[#8a6d3b] text-white p-2 rounded-full hover:bg-[#4a3010] transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#8a6d3b] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-bounce hover:bg-[#4a3010] flex items-center gap-2 group"
        >
          <MessageCircle size={28} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold text-sm uppercase tracking-widest">Chat with Us</span>
        </button>
      )}
    </div>
  );
};

export default SpaAssistant;
