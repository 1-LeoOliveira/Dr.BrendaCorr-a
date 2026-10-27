/* ============================================================
   CONFIGURAÇÃO CENTRAL DO SITE
   Altere aqui e o site inteiro acompanha.
   ============================================================ */

export const site = {
  nome: 'Dra. Brenda Corrêa',
  profissao: 'Implantodontista',
  subtitulo: 'Consultório Odontológico',
  anosExperiencia: 7,

  // ⚠️ Confira este número: o original veio como "+55 91 8894-2414" (8 dígitos).
  // Celulares do Pará têm 9 dígitos, então foi assumido o 9 inicial.
  telefone: {
    e164: '5591988942414',
    exibicao: '+55 91 98894-2414',
  },

  email: 'bcodontologiae@gmail.com',

  endereco: {
    linha1: 'Av. Dom Vicente Zico, 722 — Cidade Nova',
    linha2: 'Ananindeua, PA · 67133-104',
    referencia: 'em frente à panificadora 24h',
    completo:
      'Avenida Dom Vicente Zico, 722, Cidade Nova, Ananindeua, PA, 67133-104',
  },

  instagram: {
    handle: 'drabrendacorrea',
    url: 'https://www.instagram.com/drabrendacorrea',
    bio: 'Brenda Corrêa | Implantodontista',
    chamada: 'Há mais de 7 anos transformando vidas 🦷',
    seguidores: 4800,
  },

  google: {
    url: 'https://share.google/c8ONJRbElEFzvNKRN',
  },

  mensagemWhatsapp:
    'Olá, Dra. Brenda! Vim pelo site e gostaria de agendar uma avaliação.',
};

export const whatsappUrl = `https://wa.me/${site.telefone.e164}?text=${encodeURIComponent(
  site.mensagemWhatsapp,
)}`;

export const telUrl = `tel:+${site.telefone.e164}`;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.endereco.completo,
)}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  site.endereco.completo,
)}&output=embed`;

/* ---------- Navegação ---------- */

export const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Tratamentos' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#instagram', label: 'Instagram' },
  { href: '#contato', label: 'Contato' },
];

/* ---------- Tratamentos ---------- */

export const servicos = [
  {
    num: '01',
    titulo: 'Implantes dentários',
    texto:
      'Substituição de dentes perdidos com pinos de titânio e coroas que respeitam o seu formato natural. Mastigação e autoestima de volta.',
  },
  {
    num: '02',
    titulo: 'Prótese fixa tipo protocolo',
    texto:
      'Arcada completa fixada sobre implantes. A solução definitiva para quem convive com dentadura ou perdeu muitos dentes.',
  },
  {
    num: '03',
    titulo: 'Coroas, facetas e próteses',
    texto:
      'Reabilitação estética em cerâmica, com cor, brilho e proporção planejados para o seu rosto.',
  },
  {
    num: '04',
    titulo: 'Clínico geral',
    texto:
      'Limpeza, restaurações, extrações e acompanhamento preventivo — a base que mantém todo o resto funcionando.',
  },
  {
    num: '05',
    titulo: 'Urgência odontológica',
    texto:
      'Dor, fratura ou prótese solta? Atendimento prioritário com valores diferenciados para resolver rápido.',
  },
];

/* ---------- Casos clínicos ---------- */

export const casoDestaque = {
  antes: './img/caso-coroa-antes.png',
  depois: './img/caso-coroa-depois.png',
  legenda: 'Reabilitação com coroas em cerâmica sobre implantes',
  altAntes: 'Sorriso antes do tratamento, com dentes ausentes',
  altDepois: 'Sorriso reabilitado com coroas em cerâmica após o tratamento',
};

export const galeria = [
  {
    src: './img/caso-protocolo.png',
    legenda: 'Prótese fixa sobre implantes — protocolo',
    alt: 'Antes e depois de prótese fixa sobre implantes do tipo protocolo',
  },
  {
    src: './img/caso-protese-fixa-1.png',
    legenda: 'Prótese fixa sobre implantes',
    alt: 'Antes e depois de prótese fixa sobre implantes',
  },
  {
    src: './img/caso-protese-fixa-2.png',
    legenda: 'Reabilitação oral completa',
    alt: 'Antes e depois de reabilitação oral com prótese fixa',
  },
];

/* ---------- Avaliações do Google ------------------------------------------
   O Google bloqueia a leitura automática do perfil, então nenhuma avaliação
   foi inventada aqui. Cole as reais no formato abaixo e os cards aparecem
   sozinhos (o bloco com o link do Google funciona mesmo com a lista vazia):

   { autor: 'Nome da pessoa', nota: 5, texto: 'Depoimento...', data: 'há 2 meses' }
   --------------------------------------------------------------------------- */

export const avaliacoes = [];

/* ---------- Prévia do Instagram ---------- */

export const instagramTiles = [
  {
    src: './img/caso-protocolo.png',
    alt: 'Caso de prótese protocolo publicado no Instagram',
    legenda: 'Antes e depois · protocolo',
  },
  {
    src: './img/caso-coroa-depois.png',
    alt: 'Resultado de coroas em cerâmica publicado no Instagram',
    legenda: 'Coroas em cerâmica',
  },
  {
    src: './img/dra-brenda-hero.jpg',
    alt: 'Dra. Brenda explicando como funciona o implante dentário',
    legenda: 'Como funciona o implante',
  },
  {
    src: './img/caso-protese-fixa-1.png',
    alt: 'Antes e depois de prótese fixa publicado no Instagram',
    legenda: 'Reabilitação oral',
  },
];
