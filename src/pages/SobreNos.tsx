import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TrustSection } from "@/components/TrustSection";

const SobreNos = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      <Header />
      
      <main className="flex-1 pt-24 sm:pt-32">
        <div className="container mx-auto px-4 md:px-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 mb-4 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
              Sobre a BMF
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Excelência em proteger o que importa
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
              Somos especialistas em consultoria de seguros, consórcios e planos de vida. Nossa missão é entender as suas necessidades para oferecer as melhores soluções do mercado.
            </p>
          </motion.div>
        </div>

        {/* Reuse the existing TrustSection which is already Dark Premium */}
        <TrustSection />
      </main>

      <Footer />
    </div>
  );
};

export default SobreNos;
