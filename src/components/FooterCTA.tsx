import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const FooterCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-32 bg-black overflow-hidden border-t border-white/5">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-cyan-600/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8">
            Pronto para dar o <br />
            <span className="font-playfair italic font-light text-cyan-400">Próximo Passo?</span>
          </h2>
          
          <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
            Não deixe seu futuro ao acaso. Faça uma cotação digital agora mesmo e descubra como é fácil estar protegido.
          </p>

          <button 
            onClick={() => navigate('/cotacao')}
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-lg py-5 px-12 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(6,182,212,0.4)] flex items-center justify-center gap-3 mx-auto group"
          >
            Começar Simulação
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
