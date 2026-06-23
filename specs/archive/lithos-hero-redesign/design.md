# Design: Lithos Hero Redesign

## UI Architecture

1. **Root & Section**
   - **Root**: `min-h-screen bg-white tracking-[-0.02em] font-sans`.
   - **Hero Section**: `relative w-full overflow-hidden h-screen bg-black` (`height: 100dvh`).

2. **Background Layers**
   - **Base (z-10)**: Imagem escura com classe `hero-zoom`.
   - **RevealLayer (z-30)**: Segunda imagem revelada por máscara (mask-image gerada via canvas radial gradient) de acordo com `cursorX` e `cursorY`.

3. **RevealLayer Mechanics**
   - **Spotlight Radius**: `260px`.
   - **Interpolation**: Linear (lerp 0.1) acoplada no `requestAnimationFrame`.
   - **Opacities**: 0 → 1(white), 0.4 → 1, 0.6 → 0.75, 0.75 → 0.4, 0.88 → 0.12, 1 → 0 (transparent).

4. **Foreground Content (z-50 / z-[100])**
   - **Navegação (z-[100])**: Logo SVG customizada, wordmark 'Lithos' (Playfair), menu em pílula (`bg-white/20 backdrop-blur-md border border-white/30`) e botão Sign Up.
   - **Título (z-50)**: Stagger reveal ("Layers hold" -> delay 0.25s, "tales of time" -> delay 0.42s). Playfair Display.
   - **Rodapé Esquerdo (z-50)**: Texto explicativo (delay 0.7s).
   - **Rodapé Direito (z-50)**: Texto sobre mapas e botão CTA "Start Digging" laranja e interativo (delay 0.85s).
