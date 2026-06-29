# Design Specs: SaaS Insurance Landing Page

## 1. Hero Section (Index.tsx)
- **Layout**: Grid 2 colunas no Desktop (Esquerda: Headline massivo + Descrição; Direita: Card de CTA Glassmorphism com formulário rápido ou botão para o Hub de Seguros).
- **Sticky Behavior**: A coluna da direita (CTA Card) deve usar `sticky top-32` para descer junto com o scroll do usuário até o fim da Hero section.
- **Sub-Nav Sticky**: Uma barra abaixo do Header principal (ex: `bg-black/90 backdrop-blur-md border-b border-white/10 sticky top-[72px] z-40`) contendo links rápidos de âncora ("Overview", "Por que a BMF?", "Seguros", "Depoimentos").

## 2. "Old Way" vs "New Way" (Comparativo B2B)
- Container principal `max-w-6xl mx-auto`.
- **Coluna 1 (Old Way)**: Fundo `bg-white/5`, textos apagados `text-neutral-500`, ícones vermelhos/cinzas indicando falhas (ex: "Cotações demoradas", "Burocracia de papéis").
- **Coluna 2 (New Way BMF)**: Fundo `bg-cyan-950/20` com borda `border-cyan-500/30`. Ícones vibrantes ciano, textos fortes indicando a solução (ex: "Cotação Inteligente 100% Digital", "Gestão em um só lugar").

## 3. Workflow de Valor (3 Passos)
- Título centralizado: "Proteção em 3 etapas integradas".
- Um Grid de 3 colunas, onde cada Card é gigante e usa a classe `.glass-card` com muito padding (p-10).
  - Passo 1: **Simule** (Ícone de calculadora/IA)
  - Passo 2: **Analise** (Ícone de gráficos/comparativo)
  - Passo 3: **Proteja** (Ícone de escudo de confirmação)
- Entre os cards em desktop, usar uma linha de conexão ou setas para simular o "flow" (exatamente como visto no Altium para "Design -> Share -> Collaborate").

## 4. Testimonials (Vídeo Cards)
- Carrossel horizontal de cards verticais altos (estilo Reels/TikTok) usando Glassmorphism, exibindo foto de rosto grande do cliente, nome, e a avaliação escrita por cima (ou simulando um player).

## 5. UI Tokens
- **Fontes**: Inter (Sans-serif) para absolutamente tudo, exceto o Título H1 principal (Playfair).
- **Cores**: `bg-[#050505]`, `border-white/10`, Ciano (`text-cyan-400`, `bg-cyan-500/10`) para os destaques de ação.
