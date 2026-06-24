# Implementation Plan & Tasks

- [ ] **1. Create Dedicated Pages**:
  - `src/pages/Consorcios.tsx`
  - `src/pages/PlanosDeVida.tsx`
  - `src/pages/SobreNos.tsx`
- [ ] **2. Update Routing in `App.tsx`**: Add new routes.
- [ ] **3. Update Navigation Links**: Update `Header.tsx` and `BMFHeroSection.tsx` links to point to the dedicated pages instead of hash anchors (ex: `to="/consorcios"`).
- [ ] **4. Remove Curtain Effect from `Index.tsx`**: Strip the `lg:sticky lg:top-0` classes from the sections in `Index.tsx` so they scroll naturally, but **keep** `InsuranceTypes` and `TrustSection` on the homepage to maintain a rich landing page.
- [ ] **5. Apply Dark Theme & Minimal Header to `Cotacao.tsx`**: Add `minimal` prop to `Header.tsx`. Use dark backgrounds on the funnel.
- [ ] **6. Brand Purge**: Replace JJ & Amorim texts globally in `Logo.tsx`, `Cotacao.tsx`, `LegalModals.tsx`, `Success.tsx`, and Admin files.
