import React from 'react';
import { motion } from 'framer-motion';
import { Car, HeartPulse, Building2, Shield, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const BentoFeatures = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Consórcios Estratégicos",
      description: "Planeje o futuro sem juros abusivos. Imóveis, veículos e pesados.",
      icon: Building2,
      link: "/consorcios",
      colSpan: "md:col-span-2",
      delay: 0.1,
    },
    {
      title: "Seguro de Vida",
      description: "Proteção financeira para quem você mais ama.",
      icon: HeartPulse,
      link: "/planos-de-vida",
      colSpan: "md:col-span-1",
      delay: 0.2,
    },
    {
      title: "Seguro Auto",
      description: "Cobertura completa com assistência 24h em todo o Brasil.",
      icon: Car,
      link: "/cotacao",
      colSpan: "md:col-span-1",
      delay: 0.3,
    },
    {
      title: "Seguro Empresarial",
      description: "Blinde o patrimônio e a operação do seu negócio contra imprevistos.",
      icon: Shield,
      link: "/cotacao",
      colSpan: "md:col-span-2",
      delay: 0.4,
    }
  ];

  return (
    <section className="py-24 bg-[#050505] relative border-t border-white/5" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Nossas soluções de <br className="hidden md:block" />
            <span className="font-semibold text-cyan-400 font-light">Proteção Premium</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Uma esteira completa de produtos para blindar seu patrimônio e garantir seu futuro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feat.delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => navigate(feat.link)}
              className={`group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8 cursor-pointer transition-all duration-500 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(6,182,212,0.08)] ${feat.colSpan}`}
            >
              {/* Radial gradient hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-cyan-500/30 transition-all duration-300">
                  <feat.icon className="text-cyan-400" size={24} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 font-semibold">{feat.title}</h3>
                <p className="text-neutral-400 leading-relaxed flex-1">
                  {feat.description}
                </p>
                
                <div className="mt-6 flex items-center gap-2 text-cyan-400 font-medium opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <span>Conhecer</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
