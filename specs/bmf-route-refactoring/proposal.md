# BMF Route Refactoring & UI Purge

## 1. Overview
O objetivo é reestruturar as rotas da aplicação, transformando as seções da Landing Page em rotas dedicadas (`/seguros`, `/consorcios`, `/planos-de-vida`, `/sobre-nos`). Além disso, devemos purgar qualquer vestígio restante da antiga marca "JJ & Amorim" do sistema, corrigir o bug de "Double Header" nos funis de cotação e estabilizar o Dark Theme globalmente.

## 2. Context & Constraints
- A BMF exige um tema **Dark Premium** (tons `#0a0a0a`, `#111` com `cyan-500`).
- Nenhum link deve realizar Smooth Scroll dentro da home, mas sim navegar para páginas dedicadas.
- O header não deve competir com a interface do formulário de cotação.
- Não pode haver vazamento de fundo claro (White/Flash) durante as transições.

## 3. Scope
- Criar novas páginas em `src/pages/`.
- Atualizar `App.tsx` para mapear rotas.
- Modificar `Index.tsx` para remover o "Efeito Cortina".
- Adicionar prop `minimal` no `Header.tsx` para ocultar o menu em `/cotacao`.
- Substituir textos em `Cotacao.tsx`, `Logo.tsx`, `LegalModals.tsx`, `Success.tsx`.
