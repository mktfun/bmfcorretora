# UI Fixes & Refinements (Estado Civil e Cards)

## Objetivo
Atender ao feedback visual do usuário para corrigir comportamentos indesejados na interface e ajustar padrões de entrada de dados, mantendo a consistência do design global.

## Escopo
1. **Marital Status**: Reverter o layout de Pills (grid de botões) de volta para um formato de "Lista Suspensa" (Dropdown / Select) no componente global `MaritalStatusGrid`.
2. **Insurance Cards (Main Menu)**: 
   - Remover a animação de "piscar" (possivelmente atrelada ao Framer Motion ou hover effects intermitentes) quando os cards são renderizados ou focados na página principal.
   - Alterar a tipografia dos títulos dos cards (Remover `font-playfair italic`) e padronizar para a fonte padrão da UI.

## Motivação
- A experiência de leitura e estabilidade visual na página principal foi prejudicada pelas animações dos cards.
- A lista suspensa para o estado civil foi declarada como o comportamento preferido e explícito pelo usuário para este campo de dados.

## Riscos (Bayesian Analysis)
- **Risco**: A alteração do `MaritalStatusGrid` de botões para `Select` pode quebrar o layout se o container não estiver preparado para a altura de um dropdown.
  - **Mitigação**: O novo `MaritalStatusGrid` utilizará os componentes estabilizados do Shadcn UI (`Select`, `SelectTrigger`, etc.) que já possuem suporte excelente a layout e dark mode, além de focar em manter as cores base da paleta laranja (#e8702a) no contorno/ring se aplicável.
- **Risco**: Quebrar animações globais.
  - **Mitigação**: A edição do `framer-motion` em `InsuranceTypes` focará estritamente no elemento que causa o flash/blink visual indesejado.
