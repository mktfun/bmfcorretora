# Emergency Fix: Remoção de Headers Duplicados (Ícone Laranja)

## Escopo
Remover OBRIGATORIAMENTE todo o bloco injetado de título (aquele que continha a borda `border-white/10 pb-4 mb-6`, o ícone com fundo laranja e a tipografia em Playfair) do TOPO de absolutamente todos os Wizards.
A tela deve utilizar apenas o título azul principal que já vem das páginas raízes.

## Lista de Arquivos Afetados
- AutoWizard.tsx
- EndorsementWizard.tsx
- HealthWizard.tsx
- ResidentialWizard.tsx
- SinistroWizard.tsx
- TravelWizard.tsx
- SmartphoneWizard.tsx
- FiancaWizard.tsx
- FuneralWizard.tsx
- BusinessWizard.tsx
- LifeWizard.tsx

## Riscos
Nenhum. É apenas uma remoção do bloco de div que foi introduzido erroneamente na refatoração de UI anterior.
