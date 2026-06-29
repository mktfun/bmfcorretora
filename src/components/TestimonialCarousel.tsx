import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Mendes',
    role: 'CEO, Construtora Alpha',
    content: 'A BMF revolucionou como gerenciamos as apólices da frota. Tudo centralizado e as renovações são um clique.',
  },
  {
    name: 'Juliana Torres',
    role: 'Diretora de RH, TechNova',
    content: 'O plano de saúde empresarial nunca foi tão fácil de administrar. A consultoria humanizada deles fez toda a diferença.',
  },
  {
    name: 'Roberto Viana',
    role: 'Engenheiro Chefe',
    content: 'Os seguros de responsabilidade civil sempre foram um caos. Com a plataforma digital da BMF, tenho visibilidade total.',
  },
  {
    name: 'Mariana Silva',
    role: 'Fundadora, Studio M',
    content: 'Cotei o seguro do meu carro e da empresa no mesmo dia. A velocidade da plataforma é surreal.',
  }
];

export const TestimonialCarousel = () => {
  // Duplicar para criar o efeito infinito seamless
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5" id="testimonials">
      <div className="absolute inset-0 bg-cyan-900/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Confiado por <br className="hidden md:block" />
          <span className="font-playfair italic text-cyan-400 font-light">inovadores</span>
        </h2>
        <p className="text-neutral-400 max-w-md mx-auto">
          Milhares de empresas e indivíduos já protegem seu futuro conosco.
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex flex-col items-center justify-center">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

        <div className="flex w-fit">
          <motion.div
            className="flex gap-6 pr-6"
            animate={{
              x: ["0%", "-50%"]
            }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedTestimonials.map((test, i) => (
              <div 
                key={i}
                className="w-[320px] md:w-[400px] shrink-0 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm relative group hover:bg-white/10 transition-colors duration-300"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={16} className="fill-cyan-400 text-cyan-400" />
                  ))}
                </div>
                
                <p className="text-white/90 text-lg mb-8 leading-relaxed font-light">
                  "{test.content}"
                </p>
                
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{test.name}</h4>
                    <p className="text-neutral-400 text-sm">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
