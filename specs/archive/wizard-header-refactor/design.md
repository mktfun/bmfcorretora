# Design & Architecture: Wizard Header Refactor

## 1. Design Tokens Adicionados
- **Destaque Ativo (Orange)**: `#e8702a`
- **Pill Inativo (Glass)**: `bg-white/5 border border-white/10 text-white/70 hover:bg-white/10`
- **Pill Ativo (Glass + Orange)**: `bg-[#e8702a]/20 border-[#e8702a] text-white shadow-[0_0_15px_rgba(232,112,42,0.2)]`

## 2. Componentes Afetados
### 2.1 Identificação do Produto (Header nos Wizards)
Estrutura visual a ser injetada logo acima do fluxo do wizard em arquivos como `AutoWizard.tsx`:
```tsx
<div className="border-b border-white/10 pb-4 mb-6">
  <div className="flex items-center gap-3 mb-2">
    <div className="p-2 bg-[#e8702a]/10 rounded-lg">
      <Car className="w-8 h-8 text-[#e8702a]" />
    </div>
    <div>
      <h2 className="text-2xl md:text-3xl font-playfair font-semibold text-white">
        Cotação de Seguro Auto
      </h2>
      <p className="text-sm text-white/60 mt-1">
        Preencha as informações abaixo para uma proposta personalizada.
      </p>
    </div>
  </div>
</div>
```

### 2.2 Seletor de Estado Civil e Cards Nativos
Vamos refatorar o `MaritalStatusGrid.tsx` (ou o próprio `RadioCardGroup.tsx` dependendo de qual estiver em uso) para:
```tsx
<button
  className={cn(
    "rounded-lg p-3 text-center cursor-pointer transition-all",
    isActive
      ? "bg-[#e8702a]/20 border border-[#e8702a] text-white shadow-[0_0_15px_rgba(232,112,42,0.2)]"
      : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10"
  )}
>
  {label}
</button>
```

A estrutura grid será ajustada para `grid grid-cols-2 md:grid-cols-4 gap-3` onde possível, removendo o círculo nativo de "check" visual que deixava os itens espremidos.
