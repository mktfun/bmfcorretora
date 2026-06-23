# Design: BMF Dark Theme Expansion

## UI Architecture & Identity

1. **Colors & Theme (The Dark Shift)**
   - **Backgrounds**: `bg-black`, `bg-[#0a0a0a]`, `bg-[#111]`. Eliminar `bg-white`, `bg-[#fcfcfc]`, `bg-slate-50`.
   - **Text**: `text-white` para títulos, `text-neutral-400` para parágrafos.
   - **Cards**: Fundo escuro fosco `bg-white/5` com borda sutil `border-white/10`. No hover, ganham iluminação Cyan/Azul Profundo.
   - **Icons**: Em vez de cores mistas (ambar, rosa, etc), os ícones de seguros adotarão uma paleta baseada em Ciano/Azul Metálico.

2. **Component Updates**
   - **index.html**: Title `BMF Corretora - Seguros com Transparência`. Remover menções de JJ.
   - **Footer.tsx**: Fundo `#0a0a0a` (já existe, mas precisa alinhar tipografia e marca). Substituir "JJ & Amorim" por "BMF Corretora". Atualizar logo para texto tipográfico ou ícone Ciano. Telefone para `+55 11 94764-5967`.
   - **TrustSection.tsx**: "A BMF Corretora em números". Fundo `bg-[#0a0a0a]`. Cards de números com estilo glassmorphism escuro (`bg-white/5`).
   - **InsuranceTypes.tsx**: Remover fundo `#f5f6f7`. Passar para `bg-black`. Converter os `insuranceTypes` array para usar gradientes Ciano/Azul (ex: `from-cyan-500/20 to-blue-600/10`).
   - **InsuranceHub.tsx**: Substituir a Header branca (`Header.tsx`) por um padrão escuro. Alterar o grid de seguros para Dark Mode.

3. **Navigation Fixes**
   - Os links do menu "Consórcios", "Planos de Vida" devem navegar para as âncoras ou rotas correspondentes sem quebrar. Se não existirem páginas exclusivas, navegaremos para a página raiz com Hash link nativo ou React Scroll.
