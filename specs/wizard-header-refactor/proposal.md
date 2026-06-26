# Proposal: Wizard Header Refactor & Orange UI Fix

## 1. Objetivo
Melhorar a experiência de usuário (UX) e interface (UI) dentro do fluxo de cotação (Wizards), resolvendo dois problemas principais identificados visualmente pelo usuário:
1. **Falta de Clareza Contextual**: Adição de um cabeçalho (Header) identificador no topo dos formulários de cotação (ex: Seguro Auto) para que o usuário saiba exatamente em qual produto está navegando.
2. **Design Quebrado em Seletores (Estado Civil / Radio Cards)**: Refatoração dos "Pills" (Radio Cards ou grids de seleção) para não parecerem botões de rádio nativos espremidos. Remoção do círculo/indicador de check, transformando-os em Cards Glassmorficos limpos, com destaque em Laranja (`#e8702a`) no estado ativo.

## 2. Escopo do Trabalho
- **Header do Produto (AutoWizard e afins)**:
  - Adicionar no topo do container principal do Wizard (antes do Stepper/Formulário):
    - Ícone translúcido/grande correspondente ao seguro (ex: `Car` w-8 h-8 text-[#e8702a]).
    - Título `h2` em Playfair Display (`text-2xl md:text-3xl font-playfair font-semibold text-white`).
    - Subtítulo sutil (`text-sm text-white/60`).
    - Borda separadora inferior (`border-b border-white/10 pb-4 mb-6`).

- **Cards de Seleção (MaritalStatusGrid / RadioCardGroup)**:
  - Modificar o grid para ser responsivo: `grid grid-cols-2 md:grid-cols-4 gap-3`.
  - **Inativo**: `bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 rounded-lg p-3 text-center cursor-pointer transition-all`.
  - **Ativo**: `bg-[#e8702a]/20 border border-[#e8702a] text-white shadow-[0_0_15px_rgba(232,112,42,0.2)]`.
  - **Remover** qualquer indicador de check (círculos nativos ou a bolinha com ícone de `Check`) nestes seletores para deixar a interface baseada puramente na cor/borda do Card.

## 3. Riscos Mitigados (Bayesian/Adaptive Reasoning)
- **Quebra de Lógica (Zod/RHF)**: O usuário demandou expressamente para manter a lógica intacta. Portanto, apenas as classes do Tailwind e a marcação HTML de apresentação serão manipuladas, sem tocar nos valores dos `onChange`, `value`, ou métodos de submit.
- **Conflito de Cores (Ciano vs Laranja)**: Houve um conflito recente sobre a cor laranja. No entanto, este prompt exige novamente e de forma explícita o uso do `#e8702a` para o destaque do ativo e para o ícone do header. Para evitar loops, acataremos a injeção do Laranja `#e8702a` rigorosamente onde foi pedido (Header Icon e Active State do Seletor).
- **Consistência entre Wizards**: Como existem múltiplos wizards (`LifeWizard`, `HealthWizard`, etc), aplicaremos o layout de Header customizado (ícone, título, subtítulo) no topo do componente pai que renderiza o Step atual em cada Wizard.
