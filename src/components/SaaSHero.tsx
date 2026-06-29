import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, ArrowRight } from 'lucide-react';
import { FloatingParticles } from './FloatingParticles';

export const SaaSHero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-[90vh] flex items-center justify-center bg-black overflow-hidden pt-20">
      {/* Background Glows and Particles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />
      <FloatingParticles count={15} className="opacity-50" />
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(6,182,212,0.1)]">
            <Shield size={16} />
            <span className="font-bold tracking-wider">BMF CORRETORA</span>
            <span className="opacity-60 px-1">|</span>
            <span>Sua segurança, nossa prioridade</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white mb-6">
            <span className="font-semibold text-white/95">Proteção</span> para o que importa.<br />
            Construindo seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Futuro</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed mb-12 max-w-2xl mx-auto">
            Descubra uma nova era em corretagem de seguros. Planos sob medida, cotações em tempo real e um ecossistema 100% digital e transparente.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => navigate('/cotacao')}
              className="w-full sm:w-auto bg-gradient-to-r from-[#003B5C] to-[#00A9E0] hover:from-[#002A42] hover:to-[#008CBA] text-white rounded-full px-10 py-4 font-semibold transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_30px_rgba(0,169,224,0.3)] flex items-center justify-center gap-2 group"
            >
              Simular Agora
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigate('/consorcios')}
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-full transition-all border border-white/10 backdrop-blur-md"
            >
              Explorar Consórcios
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Abstract Base / Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </div>
  );
};
