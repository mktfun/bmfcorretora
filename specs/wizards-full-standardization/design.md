# Especificações de Design (Wizards)

## 1. Padrão Global de Caixas Internas (Containers e Alertas)
- **Container Neutro (Etapas)**:
  ```css
  bg-white/5 backdrop-blur-md border border-white/10 text-white
  ```
- **Inputs e Labels**: Textos de label e instrução devem focar em `text-white` ou `text-white/80`.
- **Alertas / Avisos (Ex: Sinistro e Endosso)**: Caixas antes claras (`bg-rose-50`, `bg-amber-50`) devem adotar o Dark Theme Glass.
  - Alerta de Aviso (Amarelo/Laranja): `bg-amber-500/10 border-amber-500/20 text-amber-200`
  - Alerta Crítico (Vermelho): `bg-rose-500/10 border-rose-500/20 text-rose-200`

## 2. Refatoração do Stepper (src/components/ui/stepper.tsx)
O componente Stepper será redesenhado.

**Etapas Futuras/Inativas**:
- Círculo sem fundo sólido, utilizando apenas contorno sutil: `border-white/20 bg-transparent text-white/40`.
- Textos (título e subtítulo) com `text-white/40`.

**Etapa Atual (Active)**:
- Círculo: `border-cyan-500 bg-cyan-500/10 text-cyan-400`.
- Texto: `text-white font-semibold`.

**Etapa Concluída (Completed)**:
- Círculo: `border-cyan-400 bg-cyan-400 text-black`.
- Texto: `text-white font-medium`.

## 3. Limpeza Tipográfica e Títulos
**Regras**:
1. O Header inicial de produto (`Cotação Seguro X`) é o único a ostentar a `font-playfair` (já refatorado na spec anterior).
2. Títulos secundários injetados manualmente nas renderizações condicionais (`currentStep === x`) contendo a cor laranja (`text-[#e8702a]`) ou repetitivos devem ser **deletados**. Deixe o `<FormCard>` e a hierarquia base lidarem com a nomeação da etapa no título azul ou branco limpo.
3. Certifique-se de que nenhum `<span className="font-algumacoisa">` desnecessário esteja sujando o padrão sans-serif (Inter) nativo do Tailwind.
