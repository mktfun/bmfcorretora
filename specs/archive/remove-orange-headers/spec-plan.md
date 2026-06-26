# Execution Plan

- [x] 1. Varrer a pasta `src/components/wizards/` em busca do bloco de código de Header injetado.
- [x] 2. Deletar os blocos `div` que contém `<div className="border-b border-white/10 pb-4 mb-6">` e todo o seu conteúdo interno.
- [x] 3. Garantir que a renderização do `<Stepper>` ocorra logo após o retorno principal do componente, sem a poluição visual anterior.
