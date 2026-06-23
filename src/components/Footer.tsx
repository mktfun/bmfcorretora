import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
export const Footer = () => {
  return <footer className="bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-6 py-12 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col gap-1 mb-6">
              <span className="text-white text-3xl font-bold font-sans tracking-tight">BMF</span>
              <span className="text-white/80 text-lg font-light font-sans tracking-wide">Corretora</span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              <strong className="text-white">BMF Corretora</strong>
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Seguros, Consórcios e Planos de Vida. Protegendo o que é essencial para você.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              Soluções
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="/seguros" className="hover:text-cyan-400 transition-colors">Seguros</a></li>
              <li><a href="#consorcios" className="hover:text-cyan-400 transition-colors">Consórcios</a></li>
              <li><a href="#vida" className="hover:text-cyan-400 transition-colors">Planos de Vida</a></li>
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              Institucional
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="#sobre-nos" className="hover:text-cyan-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              Contato
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <a href="tel:+5511947645967" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                  <Phone size={14} className="text-white/80 flex-shrink-0" />
                  <span>(11) 94764-5967</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/5511947645967" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                  <MessageCircle size={14} className="text-white/80 flex-shrink-0" />
                  <span>WhatsApp Corporativo</span>
                </a>
              </li>
              <li>
                <a href="mailto:contato@bmfcorretora.com.br" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                  <Mail size={14} className="text-white/80 flex-shrink-0" />
                  <span>contato@bmfcorretora.com.br</span>
                </a>
              </li>
              <li className="flex items-start gap-2 pt-2">
                <MapPin size={14} className="text-white/80 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">
                  São Paulo - SP<br />
                  Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar com gradiente para a linha superior */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-neutral-500">
            © {new Date().getFullYear()} BMF Corretora. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>;
};