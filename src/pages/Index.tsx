import { Header } from "@/components/Header";
import BMFHeroSection from "@/components/BMFHeroSection";
import { InsuranceTypes } from "@/components/InsuranceTypes";
import { TrustSection } from "@/components/TrustSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Removemos o Header global desta tela pois o BMFHeroSection já possui navegação embutida adaptada ao tema escuro */}
      
      <main className="relative flex-1">
        {/* Hero Section - BMF Spotlight */}
        <section className="relative z-0 lg:sticky lg:top-0 min-h-[100svh]">
          <BMFHeroSection />
        </section>

        {/* Insurance Types Section */}
        <section className="relative z-10 lg:sticky lg:top-0 lg:min-h-[100svh] bg-[#fcfcfc] shadow-[0_-8px_30px_-10px_rgba(0,0,0,0.04)] ring-1 ring-slate-900/5">
          <InsuranceTypes />
        </section>

        {/* Trust Section */}
        <section className="relative z-20 lg:sticky lg:top-0 lg:min-h-[100svh] bg-background shadow-[0_-8px_30px_-10px_rgba(0,0,0,0.04)] ring-1 ring-slate-900/5">
          <TrustSection />
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;