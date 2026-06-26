# Execution Plan (Spec-Plan)

- [x] 1. **Refatoração do Estado Civil (Lista Suspensa)**
  - Editar `src/components/ui/marital-status-grid.tsx`.
  - Importar e implementar o componente `Select` (`Select`, `SelectContent`, `SelectItem`, `SelectTrigger`, `SelectValue`) do caminho `@/components/ui/select`.
  - Configurar as classes do `SelectTrigger` para manter o visual escuro de glassmorphism e usar o focus ring na cor Laranja `#e8702a`.

- [x] 2. **Ajuste da Tipografia dos Cards de Seguro**
  - Editar `src/components/InsuranceTypes.tsx`.
  - Encontrar a tag `<h3>` ou similar que renderiza o `insurance.title`.
  - Remover as classes `font-playfair` e `italic`. Manter o título limpo (ex: `font-bold text-white text-xl`).

- [x] 3. **Remoção do Efeito 'Piscar' nos Cards**
  - Ainda em `src/components/InsuranceTypes.tsx`.
  - Reduzir ou remover as propriedades de entrada (`initial`, `whileInView`, `viewport`) da tag `<motion.div>` iterada dos cards que causam flicker visual, transformando a renderização numa exibição mais estática e sólida ao carregar a página principal.

> **Regra SSD**: Prossiga para `/vibe-apply` apenas após a revisão deste checklist pelo usuário. Lembre-se, 0 lógica de validação ou roteamento será alterada.
