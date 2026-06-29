# Landing Page Premium Redesign (SaaS B2B Vibe)

## Objetivo
O usuário reportou insatisfação com a estrutura atual da página inicial (`Index.tsx`) e outras páginas informativas externas. A requisição exige que absorvamos a arquitetura, as animações e as sessões inspiradas na landing page "Altium Develop", preservando o nosso esquema de cores Dark Theme com Glassmorphism. As páginas de navegação interna e preenchimento de seguros (`InsuranceHub` e `Wizards`) não serão alteradas.

## Referência (Altium Develop)
Baseado no vídeo analisado, a landing page deverá adotar a seguinte estrutura SaaS:
1. **Hero com Sticky Form**: Um banner principal agressivo com um "Quick Quote" ou card de CTA flutuante/pegajoso (sticky na direita) enquanto a página rola.
2. **Sticky Sub-Nav**: Uma barra de navegação secundária que gruda no topo ao rolar a página (Overview, Seguros, Vantagens).
3. **Logos de Confiança (Social Proof)**: Faixa de logos de parceiros/seguradoras.
4. **Sessão "Velho Jeito vs Novo Jeito" (Old Way vs New Way)**: Um comparativo de duas colunas mostrando como é difícil cotar seguro no "Velho Jeito" (corretoras lentas, e-mails) versus o "Novo Jeito" BMF (100% digital, rápido, integrado).
5. **Workflow de 3 Passos (Cards Flutuantes)**: Sessão "Cote, Analise, Proteja" com 3 grandes cards flutuantes interconectados, imitando o design do "Design, Share, Collaborate".
6. **Carrossel de Depoimentos**: Cards verticais simulando vídeos ou avaliações de clientes ("Trusted by innovators").

## Páginas Afetadas
- `src/pages/Index.tsx` (Refatoração total do fluxo).
- `src/pages/Consorcios.tsx` e `src/pages/PlanosDeVida.tsx` (Adoção do novo header sticky e cards flutuantes).
- `src/pages/SobreNos.tsx` (Refatoração para um layout de "Nossa Missão" em padrão SaaS).

## Arquitetura e Animações
- Substituir o uso excessivo de gradientes coloridos aleatórios no fundo por um fundo escuro sólido e premium (`bg-[#0a0a0a]` ou `bg-[#050505]`) com acentos em Ciano.
- Usar `framer-motion` para `whileInView={{ opacity: 1, y: 0 }}` com viewport margin, garantindo animações de entrada suaves e não agressivas.
- Usar `position: sticky` no painel de CTA da Hero section.

## Riscos
- **Performance**: O uso de muitas sessões animadas pode causar "layout shift" ou engasgos em mobile.
  - **Mitigação**: As animações de `framer-motion` serão leves (apenas opacidade e eixo Y curto) e usaremos o tailwind nativo (`animate-in fade-in slide-in-from-bottom-8`) onde for possível.
