import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Spring configuration for smooth animation
  const springConfig = {
    type: "spring" as const,
    stiffness: 100,
    damping: 20,
    mass: 1,
  };

  return (
    <motion.header
      className="fixed z-50 left-1/2 w-full"
      initial={false}
      animate={{
        width: isScrolled ? "92%" : "100%",
        top: isScrolled ? 12 : 0,
        x: "-50%",
      }}
      transition={springConfig}
      style={{ maxWidth: isScrolled ? "1024px" : "100%" }}
    >
      <motion.nav
        className="flex items-center justify-between backdrop-blur-xl border-solid"
        initial={false}
        animate={{
          paddingLeft: isScrolled ? 16 : 16,
          paddingRight: isScrolled ? 16 : 16,
          paddingTop: isScrolled ? 8 : 12,
          paddingBottom: isScrolled ? 8 : 12,
          borderRadius: isScrolled ? 9999 : 0,
          backgroundColor: isScrolled 
            ? "rgba(10, 10, 10, 0.92)" 
            : "rgba(10, 10, 10, 0.8)",
          borderWidth: 1,
          borderColor: isScrolled 
            ? "rgba(255, 255, 255, 0.1)" 
            : "rgba(255, 255, 255, 0.05)",
          boxShadow: isScrolled
            ? "0px 8px 32px -8px rgba(0, 0, 0, 0.2)"
            : "0px 0px 0px 0px rgba(0, 0, 0, 0)",
        }}
        transition={springConfig}
      >
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <Logo size="sm" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/seguros"
            className="text-sm text-neutral-300 hover:text-cyan-400 transition-colors"
          >
            Seguros
          </Link>
          <a
            href="/#seguros"
            className="text-sm text-neutral-300 hover:text-cyan-400 transition-colors"
          >
            Consórcios
          </a>
          <a
            href="/#seguros"
            className="text-sm text-neutral-300 hover:text-cyan-400 transition-colors"
          >
            Planos de Vida
          </a>
          <a
            href="/#sobre-nos"
            className="text-sm text-neutral-300 hover:text-cyan-400 transition-colors"
          >
            Sobre Nós
          </a>
          <a
            href="tel:+5511947645967"
            className="flex items-center gap-2 text-sm text-neutral-300 hover:text-cyan-400 transition-colors"
          >
            <Phone size={16} />
            <span>(11) 94764-5967</span>
          </a>
          <Button variant="cta" size="sm" className="rounded-full bg-cyan-600 hover:bg-cyan-500 text-white" asChild>
            <Link to="/cotacao">Solicitar Cotação</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center">
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden mt-2 mx-4 bg-[#111]/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg overflow-hidden"
        >
          <div className="p-4 space-y-3">
            <Link
              to="/seguros"
              className="block px-4 py-3 text-sm font-medium text-white hover:bg-white/5 rounded-xl transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Seguros
            </Link>
            <a
              href="/#seguros"
              className="block px-4 py-3 text-sm font-medium text-white hover:bg-white/5 rounded-xl transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Consórcios
            </a>
            <a
              href="/#seguros"
              className="block px-4 py-3 text-sm font-medium text-white hover:bg-white/5 rounded-xl transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Planos de Vida
            </a>
            <a
              href="/#sobre-nos"
              className="block px-4 py-3 text-sm font-medium text-white hover:bg-white/5 rounded-xl transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sobre Nós
            </a>
            <a
              href="tel:+5511947645967"
              className="flex items-center gap-2 px-4 py-3 text-sm text-neutral-400 hover:bg-white/5 rounded-xl transition-colors"
            >
              <Phone size={16} />
              <span>(11) 94764-5967</span>
            </a>
            <Button 
              variant="cta" 
              className="w-full rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white" 
              asChild
            >
              <Link to="/cotacao" onClick={() => setIsMobileMenuOpen(false)}>
                Solicitar Cotação
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
