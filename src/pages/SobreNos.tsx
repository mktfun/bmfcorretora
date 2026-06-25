import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TrustSection } from "@/components/TrustSection";

const SobreNos = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />

      {/* Radial glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
      </div>
      
      <main className="relative z-10 flex-1 pt-28 sm:pt-36">
        <div className="container mx-auto px-4 md:px-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 mb-5 bg-white/5 border border-cyan-500/20 px-4 py-1.5 rounded-full">
              Sobre a BMF
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.08] tracking-tight">
              <span className="font-playfair italic text-white/95">Excelência</span>{" "}em proteger{" "}
              <span className="text-cyan-400">o que importa</span>
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed font-light">
              Somos especialistas em consultoria de seguros, consórcios e planos de vida. Nossa missão é entender as suas necessidades para oferecer as melhores soluções do mercado.
            </p>
          </motion.div>
        </div>

        <TrustSection />
      </main>

      <Footer />
    </div>
  );
};

export default SobreNos;
