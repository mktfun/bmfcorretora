# Padrão de Cor de Texto (Design Specs)

## 1. Tipografia de Cards (Páginas Externas)
As páginas raízes como `Consorcios.tsx` e `PlanosDeVida.tsx` renderizam features através de um array mapeado. 
- **Antes**: `<h3 className="text-xl font-bold text-white mb-3 font-playfair italic">`
- **Depois**: `<h3 className="text-xl font-bold text-white mb-3">` (Herda a Inter, sans-serif do projeto).

## 2. Textos e Subtítulos em Wizards
O tailwind aplica `text-foreground` que pode conflitar com light mode forcado.
- Labels nativas: Todo o `Label` base Shadcn vai passar a ter `text-white` ou `text-neutral-200`.
- Subtítulos (ex: Resumo da Solicitação, Dados do Veículo, Aviso Importante): Toda tag que usava `text-foreground` passará a usar `text-white` no layout escuro do Wizard.
