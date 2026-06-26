# Correção de Contraste e Tipografia

## Objetivo
Resolver imediatamente os problemas de legibilidade em fundos escuros causados pela classe genérica `text-foreground` (que no tema default assume tom azul escuro, impossibilitando a leitura das instruções e campos nos Wizards). Além disso, remover a tipografia Serifada (`font-playfair italic`) dos cards nas páginas de Consórcio e Planos de Vida, alinhando-os ao padrão limpo já estabelecido no Seguro Auto.

## Escopo
1. **Páginas Externas (Consórcios e Vida)**: Remoção da classe `font-playfair italic` dos `<h3>` dentro dos map de features.
2. **Wizards (Todos)**: Varredura de todos os componentes de Wizard substituindo a classe CSS `text-foreground` e `text-muted-foreground` (quando inadequada) para a cor `text-white` pura ou `text-white/80`, assegurando forte contraste e legibilidade.
3. **Componente de Base**: Atualização do `src/components/ui/label.tsx` para forçar `text-white` como cor raiz das labels do sistema.

## Riscos
Nenhum risco de quebra sistêmica. Mudança estritamente de CSS utilities.
