import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Zap, Lock, BarChart3 } from 'lucide-react';

export const SaaSHero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full bg-[#050505] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Sticky Sub-Nav (Altium style) */}
      <div className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="font-bold text-lg tracking-tight">BMF Corretora</span>
            <div className="hidden md:flex items-center gap-4 text-sm text-neutral-400">
              <a href="#overview" className="hover:text-white transition-colors">Overview</a>
              <a href="#workflow" className="hover:text-white transition-colors">Como Funciona</a>
              <a href="#testimonials" className="hover:text-white transition-colors">Depoimentos</a>
            </div>
          </div>
          <button 
            onClick={() => navigate('/cotacao')}
            className="text-sm font-semibold bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
          >
            Fazer Cotação
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-32 flex flex-col lg:flex-row gap-12 relative">
        {/* Left Column (Scrolling Content) */}
        <div className="flex-1 lg:pr-10 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Zap size={16} />
              <span>A evolução da corretagem de seguros</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Proteção inteligente.<br />
              <span className="font-playfair italic text-neutral-300 font-light">Sem burocracia.</span>
            </h1>
            
            <p className="text-lg text-neutral-400 leading-relaxed mb-10 max-w-xl">
              A BMF Corretora unifica a cotação, análise e gestão de seguros em uma experiência 100% digital. Abandone os e-mails perdidos e planilhas confusas.
            </p>

            {/* Feature List (Altium Style) */}
            <div className="space-y-6 mb-12">
              {[
                { icon: Shield, title: 'Cotação em Tempo Real', desc: 'Conectado às maiores seguradoras do país.' },
                { icon: BarChart3, title: 'Análise de Risco Inteligente', desc: 'Recomendações baseadas no seu perfil exato.' },
                { icon: Lock, title: 'Gestão Centralizada', desc: 'Suas apólices, endossos e sinistros em um só hub.' },
              ].map((feat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <feat.icon className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-1">{feat.title}</h3>
                    <p className="text-neutral-400 text-sm">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column (Sticky CTA Card) */}
        <div className="w-full lg:w-[400px] relative">
          <div className="sticky top-32 z-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.3)]"
            >
              <h3 className="text-2xl font-bold text-white mb-2">Comece Agora</h3>
              <p className="text-neutral-400 text-sm mb-8">
                Cotação online, gratuita e sem compromisso. Proteja o que importa em minutos.
              </p>

              <div className="space-y-4">
                <button 
                  onClick={() => navigate('/cotacao')}
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group"
                >
                  Cotar Seguro Auto
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => navigate('/consorcios')}
                  className="w-full bg-white/10 hover:bg-white/15 text-white font-semibold py-4 rounded-xl transition-all border border-white/5"
                >
                  Ver Consórcios
                </button>
                <button 
                  onClick={() => navigate('/planos-de-vida')}
                  className="w-full bg-white/10 hover:bg-white/15 text-white font-semibold py-4 rounded-xl transition-all border border-white/5"
                >
                  Planos de Vida
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 text-center">
                <p className="text-xs text-neutral-500">
                  Operação 100% segura. Seus dados são protegidos sob a LGPD.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
