# Memória do Agente

## Preferências de Arquitetura
- Frontend: UI modernas, imersivas, com backgrounds full-screen interativos e animações fluidas baseadas em CSS/RequestAnimationFrame (como Spotlight Reveal Mask). Uso de tipografia premium (ex: Playfair Display e Inter). Evita estilos genéricos e foca em glassmorphism e gradients suaves.
- Roteamento e Layouts: Em landing pages React com rotas múltiplas (como `App.tsx` com `BrowserRouter`), nunca sobreponha/substitua o arquivo de rotas raiz para inserir seções visuais (Heroes). Ao invés disso, crie componentes independentes (`BMFHeroSection.tsx`) e injete-os na página desejada (ex: `Index.tsx`), mantendo o restante das seções da página intactas.
- Navegação: Todos os botões Call-to-Action da Landing Page (ex: "Simular Agora") devem estar diretamente atrelados às rotas internas corretas do app via `react-router-dom` (`useNavigate` ou `<Link>`), para garantir a funcionalidade em vez de apenas visual estático.

## Erros Passados
- [Erro] Substituição do `App.tsx` com a UI do Lithos, o que destruiu o roteamento global do sistema. Corrigido restaurando o `BrowserRouter` raiz.

## Persona do Usuário
- Valoriza experiências visuais de alto nível e estética corporativa limpa (ex: Dark theme com Ciano para a BMF). Exige que as partes visuais não quebrem as amarrações do negócio (links para Wizards de cotação devem estar 100% funcionais nas LPs).
- Aversão total a marcas/textos legados (JJ & Amorim) e ao "Efeito Cortina" (fundo claro/branco subindo sobre fundo escuro). Para a BMF Corretora, toda a aplicação deve transicionar suavemente em um ecossistema Dark Premium (tons de `#0a0a0a`, `#111`, com acentos em `cyan-400/500`).
