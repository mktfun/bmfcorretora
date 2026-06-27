import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Mendes',
    role: 'CEO, Construtora Alpha',
    content: 'A BMF revolucionou como gerenciamos as apólices da frota. Tudo centralizado e as renovações são um clique.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=600'
  },
  {
    name: 'Juliana Torres',
    role: 'Diretora de RH, TechNova',
    content: 'O plano de saúde empresarial nunca foi tão fácil de administrar. A consultoria humanizada deles fez toda a diferença.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=600'
  },
  {
    name: 'Roberto Viana',
    role: 'Engenheiro Chefe',
    content: 'Os seguros de responsabilidade civil sempre foram um caos. Com a plataforma digital da BMF, tenho visibilidade total.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=600'
  },
  {
    name: 'Mariana Silva',
    role: 'Fundadora, Studio M',
    content: 'Cotei o seguro do meu carro e da empresa no mesmo dia. A velocidade da plataforma é surreal.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=600'
  }
];

export const TestimonialCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 400 : 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-[#050505] relative border-t border-white/5" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Confiado por <br />
            <span className="font-playfair italic text-cyan-400 font-light">inovadores</span>
          </h2>
          <p className="text-neutral-400 max-w-md">
            Veja o que líderes e gestores dizem sobre a experiência BMF.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => scroll('left')} 
            disabled={!canScrollLeft}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => scroll('right')} 
            disabled={!canScrollRight}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 px-6 md:px-12 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((test, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[280px] w-[280px] md:min-w-[320px] md:w-[320px] h-[480px] rounded-3xl relative overflow-hidden group snap-center shrink-0"
            >
              {/* Image Background */}
              <img 
                src={test.image} 
                alt={test.name}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-cyan-400 text-cyan-400" />)}
                </div>
                <p className="text-white font-medium text-lg mb-6 leading-relaxed">
                  "{test.content}"
                </p>
                <div>
                  <h4 className="text-white font-bold">{test.name}</h4>
                  <p className="text-cyan-400 text-sm">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
