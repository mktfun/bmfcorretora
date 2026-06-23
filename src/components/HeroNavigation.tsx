import React from 'react';

export const HeroNavigation = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-[100] px-6 py-6 flex items-center justify-between">
      {/* Logo & Wordmark */}
      <div className="flex items-center gap-3">
        <svg width="32" height="32" viewBox="0 0 256 256" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
        </svg>
        <span className="text-white text-2xl font-playfair italic mt-1">Lithos</span>
      </div>

      {/* Center Pill Menu */}
      <div className="hidden md:flex items-center gap-8 bg-white/10 backdrop-blur-md border border-white/20 px-8 py-2.5 rounded-full shadow-glow">
        <a href="#about" className="text-white/90 hover:text-white transition-colors text-sm font-medium">About</a>
        <a href="#expeditions" className="text-white/90 hover:text-white transition-colors text-sm font-medium">Expeditions</a>
        <a href="#discoveries" className="text-white/90 hover:text-white transition-colors text-sm font-medium">Discoveries</a>
        <a href="#journal" className="text-white/90 hover:text-white transition-colors text-sm font-medium">Journal</a>
      </div>

      {/* Right CTA */}
      <div>
        <button className="text-white font-medium text-sm hover:text-white/80 transition-colors">
          Sign Up
        </button>
      </div>
    </nav>
  );
};
