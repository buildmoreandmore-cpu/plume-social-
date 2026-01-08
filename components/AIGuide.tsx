
import React, { useState, useRef, useEffect } from 'react';
import { getSisterhoodAdvice } from '../services/gemini';

const AIGuide: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Welcome, Sister. I'm your Plume Guide. Whether you're navigating the empty nest, looking for your next business pivot, or just want to talk about the best bourbon pairings—I'm here. How can I support you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    const advice = await getSisterhoodAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: advice }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-plume-ivory w-[350px] md:w-[400px] h-[500px] rounded-lg shadow-2xl border border-plume-gold/30 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-plume-burgundy p-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-plume-gold flex items-center justify-center text-xs">✨</div>
              <div>
                <p className="text-white text-sm font-bold font-serif italic">Plume Guide</p>
                <p className="text-plume-gold/80 text-[10px] uppercase tracking-widest">Sisterhood AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-plume-gold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-plume-cream">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-lg text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-plume-burgundy text-white rounded-br-none' 
                    : 'bg-white text-plume-charcoal border border-plume-gold/20 rounded-bl-none shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-lg text-sm animate-pulse text-plume-gold italic">
                  Refining thoughts for you, Sister...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-plume-gold/20">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about transitions, travel, or memberships..."
                className="flex-1 text-xs border border-plume-gold/30 rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-plume-burgundy"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-plume-burgundy text-white p-2 rounded-full hover:bg-opacity-90 transition-all disabled:opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-plume-burgundy w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform border-4 border-plume-gold/30 group"
        >
          <span className="text-2xl group-hover:rotate-12 transition-transform italic font-serif">P</span>
        </button>
      )}
    </div>
  );
};

export default AIGuide;
