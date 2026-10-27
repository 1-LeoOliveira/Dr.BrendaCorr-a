# Dra. Brenda Corrêa — Landing Page

Landing page da **Dra. Brenda Corrêa**, implantodontista em Ananindeua/PA.
Feita em **React + Vite**, com scroll suave (Lenis), tela de abertura animada
e transições de entrada em todas as seções (Framer Motion).

## Como rodar

```bash
npm install
npm run dev      # servidor local em http://localhost:5173
npm run build    # gera a pasta dist/ pronta para publicar
npm run preview  # testa o build localmente
```

Para publicar: suba a pasta `dist/` em Vercel, Netlify, Hostinger ou qualquer
hospedagem estática. O `base: './'` no `vite.config.js` deixa o site funcionar
inclusive em subpastas.

## Onde mexer

| O que | Arquivo |
| --- | --- |
| Telefone, e-mail, endereço, Instagram, textos dos tratamentos, casos clínicos e **avaliações do Google** | `src/data/site.js` |
| Cores, fontes, espaçamentos | `src/styles/base.css` (bloco `:root`) |
| Loader, header, menu, antes/depois, botões flutuantes | `src/styles/components.css` |
| Estilo de cada seção | `src/styles/sections.css` |
| Fotos | `public/img/` |

### Adicionar as avaliações do Google

O Google bloqueia a leitura automática do perfil, então **nenhuma avaliação foi
inventada**. Abra `src/data/site.js`, localize `export const avaliacoes = []` e
cole as reais:

```js
export const avaliacoes = [
  {
    autor: 'Maria Silva',
    nota: 5,
    texto: 'Texto da avaliação copiado do Google...',
    data: 'há 2 meses',
  },
];
```

Os cards aparecem sozinhos. Com a lista vazia, a seção mostra apenas o bloco do
Google com o link — sem buraco no layout.

## Estrutura

```
index.html              → shell + SEO + dados estruturados (schema.org Dentist)
public/img/             → fotos da Dra. e casos clínicos
src/
  main.jsx              → ponto de entrada
  App.jsx               → ordem das seções
  animations.js         → presets de movimento
  data/site.js          → TODO o conteúdo configurável
  hooks/
    useSmoothScroll.js  → Lenis + âncoras
    useCountUp.js       → números que contam ao entrar na tela
  components/           → uma seção por arquivo
  styles/               → base · components · sections
```

## Recursos

- Tela de abertura com dente desenhado em SVG, porcentagem real de carregamento
  e saída em cortina.
- Barra de progresso de leitura no topo.
- Parallax no hero e na foto da seção "Sobre".
- Comparador antes/depois arrastável (mouse, toque e teclado).
- Prévia do perfil do Instagram com grade de publicações.
- Mapa do consultório, botão flutuante do WhatsApp e barra fixa de ações no mobile.
- Respeita `prefers-reduced-motion`.

## Pendências

- **Telefone:** o número informado (`+55 91 8894-2414`) tem 8 dígitos. Foi
  assumido `+55 91 98894-2414`. Confira em `src/data/site.js` → `telefone`.
- **Avaliações do Google:** colar as reais conforme a seção acima.
- **CRO:** se quiser exibir o número de registro, adicione em `src/data/site.js`
  e inclua no rodapé.
