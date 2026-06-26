# Execution Plan

- [x] 1. **Remoção Tipográfica (Playfair)**:
    - Editar `src/pages/Consorcios.tsx` e remover `font-playfair italic` do H3 das features.
    - Editar `src/pages/PlanosDeVida.tsx` e remover `font-playfair italic` do H3 das features.
- [x] 2. **Base de Componente Label**:
    - Editar `src/components/ui/label.tsx` e injetar a classe `text-white` nativamente.
- [x] 3. **Varredura em Massa (Wizards)**:
    - Procurar por todas as ocorrências de `text-foreground` dentro de `src/components/wizards/` e substituir por `text-white`.
