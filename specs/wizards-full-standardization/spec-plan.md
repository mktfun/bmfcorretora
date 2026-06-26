# Execution Plan (Spec-Plan)

- [x] 1. **Refatoração do Componente Base: Stepper**
  - Editar `src/components/ui/stepper.tsx`.
  - Aplicar `text-white/40` e `border-white/20 bg-transparent` para etapas inativas/futuras.
  - Assegurar que a etapa atual (isCurrent) retenha o estilo destacado primário e os textos sejam `text-white font-semibold`.
  - Remover qualquer traço de `bg-white` dos números.

- [x] 2. **Varredura em Seguros de Nicho (EndorsementWizard e SinistroWizard)**
  - Abrir `EndorsementWizard.tsx` e `SinistroWizard.tsx`.
  - Substituir containers como `bg-muted`, `bg-background`, `bg-rose-50`, `bg-amber-50` por suas versões compatíveis ao Dark Glassmorphism (`bg-white/5` ou variantes escuras coloridas como `bg-rose-500/10`).
  - Identificar e remover títulos extras ou duplicados em laranja que fujam da lógica base.

- [x] 3. **Varredura nos Seguros Pessoais (Auto, Life, Health, Residential, etc.)**
  - Checar arquivos como `AutoWizard.tsx`, `LifeWizard.tsx`, `HealthWizard.tsx`, `ResidentialWizard.tsx`, etc.
  - Remover opacidades brancas opacas ou cinzas remanescentes.
  - Limpar subtítulos duplicados no decorrer do Switch case de Etapas.

- [x] 4. **Limpeza Final de Tipografia**
  - Assegurar que todas as labels sigam `text-white/80` (nativo do FormInput, se já configurado) ou não forcem outra família tipográfica (a classe `font-playfair` só fica no topo).

> **Regra SSD**: Prossiga para `/vibe-apply` apenas após a revisão deste checklist pelo usuário. Não modifique a lógica Zod, RHF ou fluxos de submissão RD Station.
