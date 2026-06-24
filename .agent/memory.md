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

## Padrões Arquiteturais Consolidados
- **Navegação (MPA vs SPA)**: Evitar ancoragem pesada na mesma página (Efeito Cortina). As grandes categorias (Consórcios, Planos de Vida, Sobre Nós) devem possuir **páginas independentes**, com a Landing Page principal fluindo suavemente via rolagem natural sem fixed/sticky tricks que causem sobreposição rígida.
- **Header Contextual**: Em funis de conversão (ex: `/cotacao`), o `<Header>` deve sempre ser utilizado com a prop `minimal={true}` para ocultar o menu principal, prevenindo a temida concorrência visual (double header) e garantindo que o usuário foque no preenchimento do wizard.

## Design System Dark Premium (BMF)

- **Paleta obrigatória**: Background `#0a0a0a` / `#111`, cards `bg-[#111]/80`, inputs `bg-[#0d0d0d]`, borders `border-white/10`, texto primário `text-white`, texto secundário `text-neutral-300/400`, acento `text-cyan-400`, hover de acento `text-cyan-300`.
- **Tokens Tailwind**: NUNCA use tokens semânticos do Shadcn/Tailwind light (`bg-card`, `bg-background`, `border-input`, `text-foreground`, `text-muted-foreground`, `bg-muted`) diretamente nos componentes do funil de cotação. Esses tokens resolvem para branco no tema padrão e criam containers brancos sobre fundo preto — o "bug do container branco" que o usuário reportou. Sempre use valores hardcoded dark.
- **OptionCard / RadioCard / YesNoToggle**: Estado inativo = `bg-white/5 border-white/10 text-neutral-400`. Estado ativo/selecionado = `bg-cyan-500/10 border-cyan-500/50 text-cyan-400` com shadow ciano suave.
- **Select (Radix)**: Trigger deve ser `bg-[#0d0d0d] border-white/10 text-white` com focus `border-cyan-500/50`. Content (dropdown) deve ser `bg-[#111] border-white/10` com items `text-neutral-300 hover:bg-white/10`.
- **Stepper**: Etapa concluída = `border-cyan-400 bg-cyan-400 text-black`. Etapa ativa = `border-cyan-500 bg-cyan-500/10 text-cyan-400`. Etapa inativa = `border-white/20 bg-white/5 text-neutral-500`. Conector = `bg-cyan-500` (concluído) / `bg-white/10` (pendente).
- **FormCard**: Usar sempre `bg-[#111]/80 border border-white/10 backdrop-blur-sm shadow-[0_0_40px_rgba(0,0,0,0.5)]` — nunca `bg-white`.

## Imports de Assets (Vite)

- **CRÍTICO**: Sempre importar imagens como módulos ES (`import bgImg from "@/assets/images/img.png"`) e nunca usar paths relativos de dev como `src="/src/assets/images/img.png"`. Paths relativos de dev quebram na re-montagem de rota e podem não ser resolvidos em produção.

## Ambiente de Build

- **npm não está no PATH** do terminal do agente. Usar sempre: `& 'C:\Program Files\nodejs\npm.cmd' run build` ou invocar o node diretamente.
- **bun.lock** presente no projeto mas bun também não está disponível no agente. O build real acontece na plataforma Lovable (Netlify/Vercel-like) ao fazer push para o GitHub.
- **git disponível** em `C:\Program Files\Git\cmd\git.exe`. Usar sempre com `& 'C:\Program Files\Git\cmd\git.exe'` no PowerShell.
