import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, LineChart, ShieldCheck, ArrowRight } from 'lucide-react';

export const WorkflowSteps = () => {
  const steps = [
    {
      icon: Calculator,
      title: '1. Simule',
      description: 'Crie cotações detalhadas em tempo real. Nosso motor conecta você às melhores condições do mercado instantaneamente.',
    },
    {
      icon: LineChart,
      title: '2. Analise',
      description: 'Compare coberturas, prêmios e franquias em um dashboard claro. Sem letras miúdas, apenas dados para a melhor decisão.',
    },
    {
      icon: ShieldCheck,
      title: '3. Proteja',
      description: 'Ative sua apólice digitalmente. Gerencie renovações, endossos e sinistros 100% online através do seu hub seguro.',
    }
  ];

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden" id="workflow">
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] pointer-events-none mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Cote, Analise e Proteja em <br className="hidden md:block" />
            <span className="font-playfair italic text-cyan-400 font-light">um único fluxo integrado</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 relative">
          {/* Connecting Lines for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent -translate-y-1/2 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2, duration: 0.7, ease: "easeOut" }}
              className="relative z-10"
            >
              <div className="bg-[#0d0d0d] border border-white/10 p-10 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] hover:border-cyan-500/30 transition-colors h-full flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-all group-hover:scale-110 group-hover:-translate-y-2 duration-300">
                  <step.icon size={32} className="text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Mobile Arrow Connector */}
              {i < steps.length - 1 && (
                <div className="lg:hidden flex justify-center py-6 text-white/20">
                  <ArrowRight size={24} className="rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
