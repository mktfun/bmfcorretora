# Wizards Full Standardization (Visual)

## Objetivo
O objetivo principal é unificar a interface e padronizar toda a base dos seguros e formulários (`wizards`) para garantir a experiência Premium idealizada. Isto inclui Dark Theme com Glassmorphism em todo componente de container, hierarquia visual correta e limpa nas tipografias e estabilidade do Stepper universal.

## Escopo
1. **Background e Cores**: Substituição global de classes com fundos ou opacidades claras (ex: `bg-white`, `bg-gray-50`, `bg-slate-100`, `bg-muted`, `bg-rose-50`, etc.) por uma implementação estrita de Glassmorphism escuro (`bg-white/5 border-white/10 backdrop-blur-md`) em todas as etapas e wrappers de formulários. Os textos passam a ter o padrão `text-white` ou `text-white/80`.
2. **Stepper Universal**: Modificação no `Stepper.tsx` para assegurar legibilidade em fundo escuro, com etapas inativas sem backgrounds brancos (apenas bordas claras, `border-white/20`), ícones apagados (`text-white/40`) e destaque da etapa ativa com a cor primária (Azul Ciano) suportada com `font-semibold`.
3. **Limpeza de Títulos**: Varredura em cada formulário para remover títulos redundantes e sobrepostos nas renderizações dos steps (ex: títulos em laranja onde já existe a identificação por form-card).
4. **Tipografia Global**: Remoção de fontes não-padrão. Os labels e corpo do texto devem herdar a `font-sans` (Inter). O uso de `font-playfair` é estritamente reservado aos títulos (h2) principais dos identificadores no início da página.

## Justificativa
Existem quebras de layout nas novas páginas (ex: `EndorsementWizard`) por herdarem estilos de blocos "Light Theme" inconsistentes. A padronização não só resolve bugs visuais como aumenta a confiabilidade da cotação e eleva o nível estético da aplicação, seguindo a diretiva Premium.

## Riscos (Bayesian Analysis)
- **Risco**: Remoção indiscriminada de cores em alertas nativos (ex: fundos vermelhos ou laranjas para sinalizar perigo ou validação extra, como visto no tipo "cancelamento").
  - **Mitigação**: O processo será conduzido arquivo a arquivo. Para caixas de destaque ou de alerta (ex: warning), manteremos uma opacidade baixa controlada (ex: `bg-rose-500/10 border-rose-500/20 text-rose-200`) em vez do clássico bloco sólido claro/pastel, mantendo assim o Dark Theme intacto, mas respeitando a semântica da cor.
