# UI / UX Design & Architecture

## 1. Page Routing Architecture
- `/` (Index.tsx): Renderizará uma Landing Page completa (`BMFHeroSection`, `InsuranceTypes`, `TrustSection` e Footer), mas **sem o efeito cortina/sticky**. Terá scroll contínuo e suave.
- `/seguros` (InsuranceHub.tsx): Página dedicada com os cartões de Seguros, fundo Dark Premium.
- `/consorcios` (Consorcios.tsx): Nova página, contendo título, descrição e redirecionamento para cotador.
- `/planos-de-vida` (PlanosDeVida.tsx): Nova página para Seguro de Vida.
- `/sobre-nos` (SobreNos.tsx): Nova página institucional dedicada.

## 2. Global Dark Theme Configuration
- Em `App.tsx` ou em cada página raiz, o background `bg-[#0a0a0a]` deve ser o padrão. `Cotacao.tsx` precisa perder o `bg-[#fafafa]` e ganhar o gradiente dark que aplicamos no `InsuranceHub.tsx`.
- Para prevenir double-header visual, em `Header.tsx` adicionaremos a prop opcional `minimal?: boolean`. Em `Cotacao.tsx`, chamaremos `<Header minimal />`, ocultando links e menus não essenciais.

## 3. Brand Purge
- Substituição massiva.
- `Logo.tsx`: Atualizar texto.
- `Cotacao.tsx`: `"Renovação JJ Seguros"` -> `"Renovação BMF Corretora"`.
- `LegalModals.tsx`: `"JJ Seguros"` -> `"BMF Corretora"`.
- `Success.tsx` e referências Admin.
