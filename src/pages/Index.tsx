import { Header } from "@/components/Header";
import BMFHeroSection from "@/components/BMFHeroSection";
import { InsuranceTypes } from "@/components/InsuranceTypes";
import { TrustSection } from "@/components/TrustSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Removemos o Header global desta tela pois o BMFHeroSection já possui navegação embutida adaptada ao tema escuro */}
      
      <main className="relative flex-1 bg-[#0a0a0a]">
        {/* Hero Section - BMF Spotlight */}
        <section className="relative min-h-[100svh]">
          <BMFHeroSection />
        </section>

        {/* Insurance Types Section */}
        <section className="relative">
          <InsuranceTypes />
        </section>

        {/* Trust Section */}
        <section className="relative">
          <TrustSection />
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;