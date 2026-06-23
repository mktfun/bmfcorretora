import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, HeartPulse, ShieldCheck, HeartHandshake } from "lucide-react";

const PlanosDeVida = () => {
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
              Proteção Familiar
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Garantia e segurança para quem você ama
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
              Planos de vida flexíveis que se adaptam ao seu momento, garantindo proteção financeira contra imprevistos e segurança para a sua família.
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
                <ShieldCheck className="text-cyan-400" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cobertura Completa</h3>
              <p className="text-neutral-400">Proteção em casos de invalidez, doenças graves e assistência em momentos difíceis.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-colors"
            >
              <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6">
                <HeartPulse className="text-cyan-400" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Saúde e Bem-estar</h3>
              <p className="text-neutral-400">Benefícios em vida, como descontos em farmácias, telemedicina e apoio psicológico.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-colors"
            >
              <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6">
                <HeartHandshake className="text-cyan-400" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Assistência Familiar</h3>
              <p className="text-neutral-400">Amparo financeiro garantido aos beneficiários, para que eles mantenham o padrão de vida.</p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <Button size="lg" className="rounded-full bg-cyan-600 hover:bg-cyan-500 text-white px-8 h-14 text-lg" asChild>
              <Link to="/cotacao?type=vida">
                Fazer Cotação Agora <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PlanosDeVida;
