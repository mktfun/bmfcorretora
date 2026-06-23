# Design: BMF Corretora Hero Redesign

## UI Architecture & Identity

1. **Colors & Theme**
   - **Base**: Total Dark Theme (preto e tons profundos de cinza).
   - **Brand Gradient**: Azul Profundo para Ciano/Azul Claro (aplicado estrategicamente no CTA e Highlights).
   - **Typography**: Inter (Headers primários, links, UI) + Playfair Display (Itálico para toques elegantes).

2. **Background Layers (RevealLayer Mechanics)**
   - **Base (z-10)**: Imagem escura de arquitetura espelhada/texturas minimalistas pretas.
   - **RevealLayer (z-30)**: A mesma imagem com detalhes de alta nitidez iluminados por linhas de luz azul/ciano cirúrgicas (Spotlight tracking via lerp 0.1).

3. **Foreground Content (z-50 / z-[100])**
   - **Navegação (z-[100])**: 
     - *Esquerda*: `BMF` (Inter Bold) + `Corretora` (Inter Regular menor).
     - *Centro*: Pílula translúcida com links (Seguros, Consórcios, Planos de Vida, Sobre Nós).
     - *Direita*: "+55 11 94764-5967" ou botão WhatsApp com hover sutil.
   - **Título (z-50)**: 
     - L1: "Protegendo o que" (Playfair Italic elegante).
     - L2: "é essencial para você" (Inter Bold, sólido).
   - **Textos Institucionais (Bottom)**:
     - *Esquerda*: "Garantindo tranquilidade e estabilidade para o seu patrimônio, sua família e sua empresa através de soluções sob medida."
     - *Direita*: "Explore nossas opções de coberturas, consórcios e planejamentos de vida. Simule agora e encontre a proteção ideal para o seu futuro." + Botão `Simular Agora` (Gradiente BMF).
