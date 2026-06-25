# Execution Plan (Spec-Plan)

- [ ] 1. **Padronização do Botão CTA (Manter Cores BMF)**
  - Editar `src/components/ui/button.tsx`. Modificar a variante `cta` e `default` para garantir a sombra e hover consistentes nas cores ciano/azul.

- [ ] 2. **Padronização Global: Header & Footer**
  - Editar `src/components/Header.tsx`: Adicionar classes `fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10`. Textos já devem estar brancos pelo tema escuro.
  - Editar `src/components/Footer.tsx`: Forçar background escuro (`bg-black` ou `bg-zinc-950`) e textos secundários `text-white/70`.

- [ ] 3. **Refatoração do Estado Civil nos Formulários**
  - Buscar `AutoWizard.tsx` e outros wizards onde o `maritalStatus` é configurado através do componente `<Select>`.
  - Trocar o `<Select>` por um `<div className="grid grid-cols-2 md:grid-cols-4 gap-3">` com botões estilizados (`bg-white/10` inativo, `bg-cyan-600 border border-cyan-400` ativo).

- [ ] 4. **Refatoração Visual das Páginas Internas**
  - Revisar `src/pages/Consorcios.tsx`: `min-h-screen bg-black text-white` no wrapper. Cards com `bg-white/5 border-white/10`.
  - Revisar `src/pages/PlanosDeVida.tsx`: `min-h-screen bg-black text-white` no wrapper. Cards com `bg-white/5 border-white/10`.
  - Revisar `src/pages/SobreNos.tsx`: `min-h-screen bg-black text-white` no wrapper. Cards com `bg-white/5 border-white/10`.
  - Revisar `src/pages/InsuranceHub.tsx`: `min-h-screen bg-black text-white` no wrapper. Cards com `bg-white/5 border-white/10`.
  - Certificar que os grids nestas páginas tenham Padding-Top suficiente (`pt-28` ou `pt-32`) para não colidirem com o novo Header fixo.

> **Regra SSD**: Prossiga para `/vibe-apply` apenas após a revisão deste checklist pelo usuário.
