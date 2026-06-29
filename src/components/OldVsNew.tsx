import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, FileX, Clock, PhoneOff, Smartphone, ShieldCheck, Zap } from 'lucide-react';

export const OldVsNew = () => {
  return (
    <section className="py-24 bg-[#050505] relative border-t border-white/5" id="overview">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Do Caos Burocrático à <br className="hidden md:block" />
            <span className="font-semibold text-cyan-400 font-light">Clareza Digital</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Abandone os processos lentos e desorganizados. A BMF Corretora consolida sua proteção com tecnologia de ponta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Old Way */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 rounded-3xl p-8 md:p-10 border border-white/5"
          >
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10">
              <div className="p-2 bg-red-500/10 rounded-lg">
                <XCircle className="text-red-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Velho Jeito</h3>
            </div>
            
            <div className="space-y-6">
              {[
                { icon: FileX, text: 'Apólices perdidas em gavetas e e-mails' },
                { icon: Clock, text: 'Dias de espera por uma simples cotação' },
                { icon: PhoneOff, text: 'Atendimento demorado e robótico' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-neutral-400">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <item.icon size={18} className="opacity-50" />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* New Way */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-cyan-950/20 rounded-3xl p-8 md:p-10 border border-cyan-500/30 relative overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[60px] pointer-events-none" />

            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-cyan-500/20 relative z-10">
              <div className="p-2 bg-cyan-500/20 rounded-lg">
                <CheckCircle2 className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Jeito BMF</h3>
            </div>
            
            <div className="space-y-6 relative z-10">
              {[
                { icon: Smartphone, text: 'Tudo consolidado no seu Hub Digital' },
                { icon: Zap, text: 'Cotações precisas em tempo real' },
                { icon: ShieldCheck, text: 'Consultoria humanizada e focada em você' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-white">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-cyan-400" />
                  </div>
                  <span className="font-medium text-cyan-50">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
