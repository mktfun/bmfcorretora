import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, HeartPulse, ShieldCheck, HeartHandshake, Star } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Cobertura Completa",
    description: "Proteção em casos de invalidez, doenças graves e assistência em momentos difíceis.",
  },
  {
    icon: HeartPulse,
    title: "Saúde e Bem-estar",
    description: "Benefícios em vida, como descontos em farmácias, telemedicina e apoio psicológico.",
  },
  {
    icon: HeartHandshake,
    title: "Assistência Familiar",
    description: "Amparo financeiro garantido aos beneficiários, para que eles mantenham o padrão de vida.",
  },
];

const PlanosDeVida = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />

      {/* Radial glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-rose-500/5 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 mb-5 bg-white/5 border border-cyan-500/20 px-4 py-1.5 rounded-full">
              <Star size={14} className="text-cyan-400" />
              Proteção Familiar
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.08] tracking-tight">
              <span className="font-semibold text-white/95">Garantia</span>{" "}e segurança para{" "}
              <span className="text-cyan-400">quem você ama</span>
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed font-light">
              Planos de vida flexíveis que se adaptam ao seu momento, garantindo proteção financeira contra imprevistos e segurança para a sua família.
            </p>
          </motion.div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (i + 1), ease: [0.16, 1, 0.3, 1] }}
                className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_24px_rgba(6,182,212,0.08)]"
              >
                <div className="w-14 h-14 bg-cyan-500/10 group-hover:bg-cyan-500/15 rounded-2xl flex items-center justify-center mb-6 transition-colors">
                  <f.icon className="text-cyan-400" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-neutral-400 font-light leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <Link
              to="/cotacao?type=vida"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#003B5C] to-[#00A9E0] hover:from-[#002A42] hover:to-[#008CBA] text-white rounded-full px-10 py-4 text-base font-semibold transition-all hover:scale-[1.02] active:scale-95 shadow-2xl shadow-cyan-900/30"
            >
              Fazer Cotação Agora
              <ArrowRight size={20} />
            </Link>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PlanosDeVida;
