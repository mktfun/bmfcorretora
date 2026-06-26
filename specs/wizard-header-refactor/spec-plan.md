# Execution Plan (Spec-Plan)

- [x] 1. **Refatoração do Estado Civil (Pills)**
  - Editar `src/components/ui/marital-status-grid.tsx` (ou o componente responsável).
  - Ajustar o container para `grid grid-cols-2 md:grid-cols-4 gap-3`.
  - Aplicar as classes Tailwind fornecidas para os estados ativo (Laranja #e8702a) e inativo (Glassmorphism).

- [x] 2. **Refatoração do RadioCardGroup (Opcional, se aplicável)**
  - Editar `src/components/ui/radio-card.tsx`.
  - Remover a bolinha indicadora de seleção (`<Check />`).
  - Ajustar as classes de borda/bg do estado ativo para a paleta Laranja `#e8702a`.

- [x] 3. **Criação do Header de Identificação (AutoWizard)**
  - Editar `src/components/wizards/AutoWizard.tsx`.
  - Inserir o HTML do Header (ícone `<Car>`, `h2` em Playfair e `<p>`) no topo do container principal, com separador `border-b border-white/10 pb-4 mb-6`.

- [x] 4. **Criação do Header de Identificação (Demais Wizards)**
  - Aplicar a mesma lógica para `LifeWizard.tsx` (ex: ícone `<Heart>`), `HealthWizard.tsx` (ex: ícone `<HeartPulse>`), `ResidentialWizard.tsx` (ex: ícone `<Home>`), `FiancaWizard.tsx` (ex: ícone `<KeyRound>`), `BusinessWizard.tsx` (ex: ícone `<Building2>`), `SmartphoneWizard.tsx` (ex: ícone `<Smartphone>`), `TravelWizard.tsx` (ex: ícone `<Plane>`), `SinistroWizard.tsx` (ex: ícone `<Shield>`), `EndorsementWizard.tsx` (ex: ícone `<FileText>`), etc.

> **Regra SSD**: Prossiga para `/vibe-apply` apenas após a revisão deste checklist pelo usuário. Lembre-se, 0 lógica será alterada.
