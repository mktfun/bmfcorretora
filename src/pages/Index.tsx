import React from 'react';
import { SaaSHero } from "@/components/SaaSHero";
import { BentoFeatures } from "@/components/BentoFeatures";
import { WorkflowSteps } from "@/components/WorkflowSteps";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { TrustSection } from "@/components/TrustSection";
import { FooterCTA } from "@/components/FooterCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black scroll-smooth">
      <main className="relative flex-1 bg-black">
        {/* Nova Hero Abstrata com Particles e Spotlight */}
        <SaaSHero />

        {/* Grid de Serviços com Hover Effects (Bento Grid) */}
        <BentoFeatures />

        {/* Três passos de Workflow com Slide-Up */}
        <WorkflowSteps />

        {/* Infinite Moving Cards para Depoimentos */}
        <TestimonialCarousel />

        {/* Logos das Seguradoras */}
        <section className="relative bg-[#050505]">
          <TrustSection />
        </section>

        {/* CTA Imersivo Final */}
        <FooterCTA />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;