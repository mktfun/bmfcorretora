import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Car, Briefcase } from "lucide-react";

const Consorcios = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      <Header />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 mb-4 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
              Planejamento Inteligente
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Invista no seu futuro sem pagar juros
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
              O consórcio é a maneira mais inteligente e econômica de planejar a compra do seu imóvel, carro ou investir no seu negócio.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-colors"
            >
              <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Building className="text-cyan-400" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Imóveis</h3>
              <p className="text-neutral-400">Planeje a compra da casa própria, sala comercial ou construção com parcelas que cabem no bolso.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-colors"
            >
              <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Car className="text-cyan-400" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Veículos</h3>
              <p className="text-neutral-400">Troque de carro ou compre seu primeiro veículo 0km ou seminovo de forma programada.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-colors"
            >
              <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Briefcase className="text-cyan-400" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Serviços</h3>
              <p className="text-neutral-400">Pague reformas, festas, viagens ou procedimentos estéticos sem se descapitalizar.</p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <Button size="lg" className="rounded-full bg-cyan-600 hover:bg-cyan-500 text-white px-8 h-14 text-lg" asChild>
              <a href="https://wa.me/5511947645967" target="_blank" rel="noopener noreferrer">
                Falar com um Especialista <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Consorcios;
