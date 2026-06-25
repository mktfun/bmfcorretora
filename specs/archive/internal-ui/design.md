# Design & Architecture: Internal UI Standardization

## 1. Design Tokens
- **Brand Primary**: `cyan-500`, `cyan-400`, gradientes azuis.
- **Dark Backgrounds**: `bg-black`, `bg-zinc-950`, `#0a0a0a`
- **Glassmorphism Base**: `bg-white/5 backdrop-blur-md border border-white/10`
- **Glassmorphism Hover**: `hover:bg-white/10`
- **Typography**: Inter (para corpo) e Playfair (para títulos específicos já definidos). Contraste com `text-white` para leitura primária e `text-white/70` ou `text-neutral-400` para leitura secundária.

## 2. API / Interface Contracts
- **MaritalStatusPicker (Componente Sugerido)**:
  Em vez de criar código repetido em todos os wizards, criaremos um componente `<MaritalStatusPicker />` ou usaremos HTML/Tailwind em grid diretamente no step do `AutoWizard`.
  ```tsx
  // Estrutura Visual do Grid de Estado Civil
  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
    {options.map(opt => (
      <button 
        className={`p-3 rounded-lg text-sm text-center transition-colors ${active ? 'bg-cyan-600 text-white font-medium shadow-[0_0_15px_rgba(6,182,212,0.4)] border border-cyan-400' : 'bg-white/10 text-white hover:bg-white/20'}`}
      >
        {opt.label}
      </button>
    ))}
  </div>
  ```

## 3. Modificações Planejadas
1. `src/components/Header.tsx`
   - Wrapper class atualizado para `fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10`.
2. `src/components/Footer.tsx`
   - Wrapper class atualizado para `bg-black text-white/70`.
3. `src/components/ui/button.tsx`
   - Variant `cta` classes: manter o gradiente premium em ciano e azul original.
4. `src/components/wizards/AutoWizard.tsx` (e similares)
   - Refatorar o `<Select>` do estado civil para o Grid de botões estilizados.
5. Páginas Internas (`Consorcios.tsx`, `PlanosDeVida.tsx`, etc)
   - Classes root: `min-h-screen bg-black text-white`.
   - Remoção de bg's cinzas dos grids/cards, injeção de `bg-white/5 backdrop-blur-md border border-white/10`.
