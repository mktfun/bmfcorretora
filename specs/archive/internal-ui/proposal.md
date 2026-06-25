# Proposal: BMF Internal UI Standardization

## 1. Objetivo
Padronizar as páginas internas do projeto e componentes globais (Header/Footer), aplicando as diretrizes de design Premium (Dark Theme + Glassmorphism). Manter os botões de Call To Action (CTAs) e interações ativas fiéis à marca BMF Corretora (Ciano/Azul).

## 2. Escopo do Trabalho
- **Global Components**:
  - `Header.tsx`: Tornar fixo (`fixed top-0 z-50 w-full`), fundo translúcido `bg-black/60 backdrop-blur-md border-b border-white/10`.
  - `Footer.tsx`: Fundo totalmente escuro (`bg-black` ou `bg-zinc-950`), textos `text-white/70`.
  - `button.tsx` (variant `cta` e `default`): Reforçar as cores da BMF Corretora (Ciano/Azul) mantendo as animações de hover e sombras.

- **Internal Pages**:
  - `Consorcios.tsx`, `PlanosDeVida.tsx`, `SobreNos.tsx`, `InsuranceHub.tsx`: Container principal com `min-h-screen bg-black text-white`.
  - Refatorar cartões nestas páginas para utilizarem estritamente Glassmorphism: `bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 transition-colors`.

- **Wizards (Cotação - Bug Estado Civil)**:
  - Substituir o `<Select>` nativo/UI problemático no campo "Estado Civil" em todos os formulários wizard relevantes (ex: `AutoWizard`).
  - Utilizar um layout flex/grid responsivo (`grid-cols-2 md:grid-cols-4 gap-3`).
  - Botões inativos: `bg-white/10 text-white`.
  - Botão ativo: `bg-cyan-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)] border-cyan-400`.

## 3. Riscos Mitigados (Bayesian/Adaptive Reasoning)
- **Quebra de Layout Mobile (Estado Civil)**: Textos longos em botões grid podem quebrar (overflow). Solução: Usaremos textos concisos (ex: "Solteiro", "Casado") ou padding flexível com `text-sm leading-tight text-center`.
- **Z-Index Collision no Header**: Um header `fixed z-50` pode sobrepor conteúdo do topo. Solução: As páginas que usam o Header precisarão de um `pt-24` ou similar em sua `main` tag para compensar a altura do Header fixo. Já avaliado que a página `Cotacao` possui `pt-28`, então precisaremos garantir que o Hub e as demais tenham o mesmo espaçamento.
- **Tipografia**: O texto de fundo preto precisa de um bom contraste. Verificaremos a aplicação de `text-neutral-400` para textos de apoio e branco para títulos (`font-inter` é o default do Tailwind caso configurado).
