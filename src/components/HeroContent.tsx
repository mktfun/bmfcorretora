import React from 'react';

export const HeroContent = () => {
  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-between pointer-events-none px-6 py-10 md:px-12 md:py-16">
      {/* Top Title (Centered) */}
      <div className="mt-[20vh] md:mt-[22vh] flex flex-col items-center text-center text-white leading-[0.95]">
        <h1 className="flex flex-col items-center">
          <span className="font-playfair italic text-6xl sm:text-7xl md:text-[7.5rem] tracking-[-0.05em] hero-anim hero-reveal" style={{ animationDelay: '0.25s' }}>
            Layers hold
          </span>
          <span className="text-6xl sm:text-7xl md:text-[7.5rem] tracking-[-0.08em] font-medium -mt-2 hero-anim hero-reveal" style={{ animationDelay: '0.42s' }}>
            tales of time
          </span>
        </h1>
      </div>

      {/* Bottom Footer Section */}
      <div className="flex items-end justify-between w-full">
        {/* Bottom Left */}
        <div className="hidden sm:block max-w-xs text-white/80 text-sm md:text-[0.95rem] leading-relaxed hero-anim hero-fade tracking-wide font-light" style={{ animationDelay: '0.7s' }}>
          Explore the deep history hidden within sedimentary layers. Our expeditions uncover the ancient narratives written in the earth itself.
        </div>

        {/* Bottom Right */}
        <div className="flex flex-col items-end gap-6 text-right hero-anim hero-fade pointer-events-auto" style={{ animationDelay: '0.85s' }}>
          <p className="max-w-xs text-white/80 text-sm md:text-[0.95rem] leading-relaxed hidden sm:block tracking-wide font-light">
            Access interactive geological maps and start charting your own discoveries today.
          </p>
          <button className="bg-[#e8702a] hover:bg-[#d2611f] text-white rounded-full px-8 py-3.5 text-sm font-medium transition-all active:scale-95 shadow-lg flex items-center gap-2 group">
            Start Digging
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
