# Proposal: BMF Dark Theme Expansion & Brand Eradication

## Goal
Erradicar qualquer vestígio da antiga marca "JJ & Amorim" do projeto (metadados, textos, logos e contatos) e consolidar o design de "BMF Corretora" em 100% da aplicação. Além disso, as seções inferiores e a página de Seguros que atualmente quebram a imersão com o "Efeito Cortina Branco" serão redesenhadas para um padrão Dark Premium (tons de preto, cinza fosco e detalhes em azul/ciano).

## Core Mechanics
1. **Brand Cleanup**: Limpeza massiva em `index.html`, `Footer.tsx`, e `TrustSection.tsx`.
2. **Dark Premium Cortina**: Substituir o `bg-[#fcfcfc]` por gradientes escuros (`bg-[#0a0a0a]` ou `bg-black`) para que a rolagem abaixo do Hero seja uma continuação estética natural, e não uma interrupção agressiva.
3. **Routing & Scroll Links**: Na Navigation (`BMFHeroSection.tsx`), consertar as âncoras (`href="#consorcios"`) para que funcionem ou apontem para as rotas corretas, eliminando telas em branco.
4. **Cards Re-styling**: Na `InsuranceTypes` e `InsuranceHub`, converter os cards brancos para cards escuros (`bg-[#111]`, borders em `border-white/10`) com brilho em ciano (`hover:ring-cyan-500/30`).
