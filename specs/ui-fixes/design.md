# UI Design Specifications

## 1. Marital Status (Dropdown)
O componente `MaritalStatusGrid.tsx` será refatorado para utilizar o `Select` do Shadcn UI (importado de `@/components/ui/select`).

**Anatomia (Pseudo-HTML):**
```tsx
<Select value={value} onValueChange={onChange}>
  <SelectTrigger className="w-full bg-white/5 border-white/10 text-white focus:ring-[#e8702a]/30 focus:border-[#e8702a]">
    <SelectValue placeholder="Selecione..." />
  </SelectTrigger>
  <SelectContent className="bg-[#1a1a1a] border-white/10 text-white">
    {options.map(...)}
  </SelectContent>
</Select>
```

## 2. Insurance Cards (InsuranceTypes.tsx)
As animações Framer Motion que causam o "piscar" serão removidas ou simplificadas. A fonte tipográfica também será retificada.

**Mudanças:**
- Remoção da propriedade `font-playfair italic` da tag `<h3>` do título de cada seguro.
- Revisão das tags `<motion.div>` que envolvem os cards. Se a animação `whileInView` está causando flashes indesejados devido ao layout shift, ela será substituída por animações mais simples ou tags `<div>` normais caso a fluidez não esteja estabilizada. O efeito de `hover:-translate-y-1` será mantido para indicar interatividade, mas pulsações de opacidade (`opacity: 0` repetidas) serão inativadas.
