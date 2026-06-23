# Tasks: Lithos Hero Redesign

Este é o plano de execução exato. O progresso deve ser marcado aqui durante a fase de `/vibe-apply`.

- [ ] 1. **CSS e Configuração Global**
  - Atualizar `src/index.css` com os `@import` das fontes Inter e Playfair Display.
  - Adicionar as variáveis `@keyframes` (`heroReveal`, `heroFadeUp`, `heroZoom`) e as utilidades CSS.
  - Instalar o `lucide-react` (se necessário).

- [ ] 2. **Componente RevealLayer**
  - Criar `src/components/RevealLayer.tsx`.
  - Implementar lógica de rastreamento do mouse (`mousemove`, `mouseleave`).
  - Implementar loop de animação `requestAnimationFrame` com `lerp` de 0.1.
  - Atualizar o `webkitMaskImage` com um `radial-gradient` no React ref.

- [ ] 3. **Componentes da Interface**
  - Criar `src/components/HeroNavigation.tsx` (Pílula, Logo, Sign Up).
  - Criar `src/components/HeroContent.tsx` (Títulos e descrições inferiores com delays estritos).

- [ ] 4. **Integração Principal**
  - Combinar tudo no `src/App.tsx` (ou componente Hero raiz) definindo os backgrounds e empilhamento via `z-index`.
  - Testar acessibilidade visual, motion reduction e responsividade básica.
