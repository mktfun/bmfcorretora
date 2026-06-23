import React from 'react';
import { HeroNavigation } from './components/HeroNavigation';
import { HeroContent } from './components/HeroContent';
import { RevealLayer } from './components/RevealLayer';

const BG_IMAGE_1 = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_195923_b0ba8ace-1d1d-4f2c-9a28-1ab84b330680.png&w=1280&q=85";
const BG_IMAGE_2 = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_201152_bba90a12-bf12-459f-91f0-51f237dbaf3b.png&w=1280&q=85";

function App() {
  return (
    <div className="min-h-screen bg-white tracking-[-0.02em] font-sans">
      <section className="relative w-full overflow-hidden h-screen bg-black" style={{ height: '100dvh' }}>
        
        {/* Base Image (z-10) with slow zoom */}
        <div className="absolute inset-0 z-10 hero-zoom">
          <img 
            src={BG_IMAGE_1} 
            alt="Base background" 
            className="w-full h-full object-cover opacity-90"
          />
        </div>

        {/* Reveal Layer (z-30) */}
        <RevealLayer image={BG_IMAGE_2} />

        {/* Shadow overlay to improve text readability */}
        <div className="absolute inset-0 z-40 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

        {/* Navigation (z-100) */}
        <HeroNavigation />

        {/* Foreground Content (z-50) */}
        <HeroContent />

      </section>
    </div>
  );
}

export default App;
