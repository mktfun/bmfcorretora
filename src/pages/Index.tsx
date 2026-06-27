import { Header } from "@/components/Header";
import { SaaSHero } from "@/components/SaaSHero";
import { OldVsNew } from "@/components/OldVsNew";
import { WorkflowSteps } from "@/components/WorkflowSteps";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { TrustSection } from "@/components/TrustSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black scroll-smooth">
      {/* Header global removido do topo para evitar conflito com a Sub-Nav do SaaSHero, mas pode ser reintegrado se necessário */}
      
      <main className="relative flex-1 bg-[#050505]">
        {/* Nova Hero com Sticky CTA (Estilo SaaS B2B) */}
        <SaaSHero />

        {/* Comparativo: Velho Jeito x Jeito BMF */}
        <OldVsNew />

        {/* Três passos de Workflow (Estilo Altium - Design, Share, Collaborate) */}
        <WorkflowSteps />

        {/* Carrossel de Depoimentos em vídeo vertical */}
        <TestimonialCarousel />

        {/* Logos das Seguradoras */}
        <section className="relative bg-[#0a0a0a]">
          <TrustSection />
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;