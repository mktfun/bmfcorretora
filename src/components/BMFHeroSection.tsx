import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SPOTLIGHT_R = 260;

export const BMFHeroSection = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const targetPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const currentPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const requestRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.1;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.1;

      if (containerRef.current) {
        const { x, y } = currentPos.current;
        const gradient = `radial-gradient(${SPOTLIGHT_R}px circle at ${x}px ${y}px, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0.4) 75%, rgba(255,255,255,0.12) 88%, rgba(255,255,255,0) 100%)`;
        containerRef.current.style.webkitMaskImage = gradient;
        containerRef.current.style.maskImage = gradient;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden h-screen bg-black" style={{ height: '100dvh' }}>
      
      {/* Imagem Base Escura (Z-10) */}
      <div className="absolute inset-0 z-10 hero-zoom">
        <img 
          src="/src/assets/images/bmf-base-bg.png" 
          alt="Corporate Dark Architecture" 
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* Camada Revelada com Luzes Ciano (Z-30) */}
      <div 
        className="absolute inset-0 z-30 pointer-events-none"
        ref={containerRef}
        style={{ WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat' }}
      >
        <img 
          src="/src/assets/images/bmf-reveal-bg.png" 
          alt="Revealed Cyan Architecture" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Shadow overlay para leitura (Z-40) */}
      <div className="absolute inset-0 z-40 bg-gradient-to-b from-black/60 via-black/20 to-black/80 pointer-events-none" />

      {/* Navegação Hero (Z-100) */}
      <nav className="absolute top-0 left-0 right-0 z-[100] px-6 py-6 flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-2">
          <span className="text-white text-3xl font-bold font-sans tracking-tight">BMF</span>
          <span className="text-white/80 text-lg font-light font-sans mt-1 tracking-wide">Corretora</span>
        </div>

        <div className="hidden lg:flex items-center gap-8 bg-white/5 backdrop-blur-lg border border-white/10 px-8 py-3 rounded-full shadow-glow">
          <Link to="/seguros" className="text-white/90 hover:text-cyan-400 transition-colors text-sm font-medium">Seguros</Link>
          <a href="#consorcios" className="text-white/90 hover:text-cyan-400 transition-colors text-sm font-medium">Consórcios</a>
          <a href="#vida" className="text-white/90 hover:text-cyan-400 transition-colors text-sm font-medium">Planos de Vida</a>
          <a href="#sobre" className="text-white/90 hover:text-cyan-400 transition-colors text-sm font-medium">Sobre Nós</a>
        </div>

        <div>
          <a 
            href="https://wa.me/5511947645967" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white font-medium text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 bg-white/10 px-5 py-2.5 rounded-full border border-white/20 hover:border-cyan-500/50 backdrop-blur-sm"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            +55 11 94764-5967
          </a>
        </div>
      </nav>

      {/* Conteúdo Principal (Z-50) */}
      <div className="absolute inset-0 z-50 flex flex-col justify-between pointer-events-none px-6 py-10 md:px-12 md:py-16">
        
        {/* Títulos Centrais */}
        <div className="mt-[20vh] md:mt-[22vh] flex flex-col items-center text-center text-white leading-[1.05]">
          <h1 className="flex flex-col items-center">
            <span className="font-playfair italic text-5xl sm:text-6xl md:text-[5.5rem] tracking-tight hero-anim hero-reveal" style={{ animationDelay: '0.25s' }}>
              Protegendo o que
            </span>
            <span className="font-sans font-bold text-5xl sm:text-6xl md:text-[5.5rem] tracking-tight -mt-1 hero-anim hero-reveal" style={{ animationDelay: '0.42s' }}>
              é essencial para você
            </span>
          </h1>
        </div>

        {/* Rodapé do Hero */}
        <div className="flex items-end justify-between w-full pointer-events-auto">
          {/* Esquerda */}
          <div className="hidden sm:block max-w-[22rem] text-white/90 text-sm md:text-base leading-relaxed hero-anim hero-fade tracking-wide font-light" style={{ animationDelay: '0.7s' }}>
            Garantindo tranquilidade e estabilidade para o seu patrimônio, sua família e sua empresa através de soluções sob medida.
          </div>

          {/* Direita - CTA para Wizard */}
          <div className="flex flex-col items-end gap-5 text-right hero-anim hero-fade w-full sm:w-auto" style={{ animationDelay: '0.85s' }}>
            <p className="max-w-[22rem] text-white/90 text-sm md:text-base leading-relaxed hidden sm:block tracking-wide font-light">
              Explore nossas opções de coberturas, consórcios e planejamentos de vida. Encontre a proteção ideal para o seu futuro.
            </p>
            <button 
              onClick={() => navigate('/cotacao')}
              className="bg-gradient-to-r from-[#003B5C] to-[#00A9E0] hover:from-[#002A42] hover:to-[#008CBA] text-white rounded-full px-10 py-4 text-base font-semibold transition-all active:scale-95 shadow-2xl shadow-cyan-900/40 flex items-center justify-center gap-3 group w-full sm:w-auto"
            >
              Simular Agora
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BMFHeroSection;
