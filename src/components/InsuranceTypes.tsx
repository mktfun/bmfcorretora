import { Car, Home, Heart, Building2, Plane, Users, ArrowRight, Sparkles, KeyRound, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const insuranceTypes = [
  {
    icon: Car,
    title: "Auto",
    description: "Cobertura contra roubo, colisão e terceiros",
    type: "auto",
    featured: true,
  },
  {
    icon: Smartphone,
    title: "Uber/Similares",
    description: "Cobertura para motoristas de aplicativo",
    type: "uber",
    featured: false,
  },
  {
    icon: Home,
    title: "Residencial",
    description: "Proteção contra incêndio, roubo e danos",
    type: "residencial",
    featured: false,
  },
  {
    icon: Heart,
    title: "Vida",
    description: "Segurança financeira para quem você ama",
    type: "vida",
    featured: false,
  },
  {
    icon: Building2,
    title: "Empresarial",
    description: "Riscos operacionais e responsabilidade civil",
    type: "empresarial",
    featured: false,
  },
  {
    icon: Plane,
    title: "Viagem",
    description: "Assistência médica e bagagem internacional",
    type: "viagem",
    featured: false,
  },
  {
    icon: Users,
    title: "Saúde",
    description: "Consultas, exames e emergências cobertas",
    type: "saude",
    featured: false,
  },
  {
    icon: Smartphone,
    title: "Smartphone",
    description: "Proteção completa para seu celular",
    type: "smartphone",
    featured: false,
  },
  {
    icon: KeyRound,
    title: "Fiança Residencial",
    description: "Dispense fiador e garanta seu aluguel",
    type: "fianca",
    featured: false,
  },
];

export const InsuranceTypes = () => {
  return (
    <section id="seguros" className="relative py-16 sm:py-20 lg:py-28 bg-[#0a0a0a]">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-12 lg:mb-16 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-cyan-400 mb-4 sm:mb-5 bg-white/5 border border-cyan-500/20 px-4 py-1.5 rounded-full shadow-sm">
            <Sparkles size={14} className="text-cyan-400"/>
            +6 tipos de seguro
          </span>
          <h2 className="mb-3 sm:mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.08]">
            <span className="font-playfair italic text-white/95">Proteção</span>{" "}para o que{" "}
            <span className="text-cyan-400">importa</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-400 font-light">
            Escolha a cobertura ideal para cada momento da sua vida
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {insuranceTypes.map((insurance, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col items-center sm:items-start text-center sm:text-left bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_24px_rgba(6,182,212,0.08)]"
            >
              {insurance.featured && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-bl-xl rounded-tr-3xl shadow-sm">
                  Mais cotado
                </div>
              )}
              
              <div className="mb-5 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-cyan-500/10 group-hover:bg-cyan-500/15 transition-colors duration-300">
                <insurance.icon size={28} className="text-cyan-400" />
              </div>
              
              <h3 className="mb-2 text-xl font-bold text-white font-playfair italic">
                {insurance.title}
              </h3>
              
              <p className="text-sm sm:text-base text-neutral-400 font-light mb-6 flex-1">
                {insurance.description}
              </p>
              
              <Link 
                to={`/cotacao?type=${insurance.type}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 py-3 px-6 rounded-full transition-colors duration-200"
              >
                Simular Agora
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
