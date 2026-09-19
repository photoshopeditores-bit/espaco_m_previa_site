import { GalleryImage, ServiceItem, TestimonialItem } from '../types';

export const VENUE_INFO = {
  name: 'Espaço M',
  subtitle: 'sadad',
  city: 'Ariquemes',
  state: 'RO',
  address: 'R. Cecília Meireles - St. 06, Ariquemes - RO, 76873-632',
  phoneDisplay: '(69) 99915-1776',
  phoneRaw: '069999151776',
  secondaryPhones: ['(69) 99957-1417', '(69) 99605-0675'],
  allPhones: [
    { label: 'WhatsApp Principal', number: '(69) 99915-1776', raw: '5569999151776' },
    { label: 'Atendimento 2', number: '(69) 99957-1417', raw: '5569999571417' },
    { label: 'Atendimento 3', number: '(69) 99605-0675', raw: '5569996050675' },
  ],
  whatsappUrl: 'https://wa.me/5569999151776?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20e%20agendar%20uma%20visita%20ao%20Espa%C3%A7o%20M%20em%20Ariquemes.',
  instagramUrl: 'https://www.instagram.com/espacomoficial07?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D',
  googleMapsUrl: 'https://maps.app.goo.gl/e72AmNkSo9nM1dxa6',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.4629338711256!2d-63.0265068!3d-9.8953468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93cc91fd4fda03f3%3A0x57d961aed4cff414!2sEspa%C3%A7o%20M%20%2F%20local%20para%20eventos!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr',
  stats: {
    rating: '5.0',
    reviewCount: 20,
    maxCapacity: '800 pessoas',
    area: '1.400 m²',
    parkingSpots: '120 vagas',
  }
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'casamentos-celebracoes',
    title: 'Casamentos & Celebrações',
    category: 'Social',
    iconName: 'Sparkles',
  },
  {
    id: 'formatura-bailes',
    title: 'Formatura e Bailes',
    category: 'Comemoração',
    iconName: 'GraduationCap',
  },
  {
    id: 'festas-15-anos',
    title: 'Festas de 15 Anos e Debutantes',
    category: 'Debutantes',
    iconName: 'PartyPopper',
  },
  {
    id: 'shows-apresentacoes',
    title: 'Shows e Apresentações',
    category: 'Espetáculos',
    iconName: 'Mic',
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gal-real-01',
    title: 'Visão Panorâmica do Salão Principal',
    category: 'corporativo',
    categoryLabel: 'Salão Principal',
    imageUrl: '/images/venue/espaco-m-salao-principal-evento.jpg',
    description: 'Perspectiva ampla do salão nobre do Espaço M em Ariquemes. Espaço monumental sem pilares intermediários, piso em porcelanato polido de alta reflexão, pé-direito duplo e iluminação superior homogênea. Configuração para até 800 convidados em eventos sociais e corporativos.',
    googleMapsUrl: 'https://www.google.com/maps/place/Espa%C3%A7o+M+%2F+local+para+eventos/@-9.8953468,-63.0265068,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhD1gGTQOBmhh63XPXSm2e2M!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWk-g-gKN-DPerYoXsPv7GeKWedxthL3_08nx25-lh-5OYZOyl8lHGlxI5CEMxB94IcKlaxZxjg3r-Q-X2AERiE1vUJk9cjhpboKGexa9IazQ-v1Ty4PD4paPD0zVPVEWvmpgMFeQmzTtaRV%3Dw152-h86-k-no!7i4080!8i2296!4m7!3m6!1s0x93cc91fd4fda03f3:0x57d961aed4cff414!8m2!3d-9.8953468!4d-63.0265068!10e5!16s%2Fg%2F11njxdpxwh'
  },
  {
    id: 'gal-real-02',
    title: 'Ambientação & Detalhes de Mesas para Banquetes',
    category: 'celebracoes',
    categoryLabel: 'Casamentos & Festas',
    imageUrl: '/images/venue/espaco-m-decoracao-mesa-luzes.jpg',
    description: 'Composição intimista e sofisticada para recepções sociais, unindo toalhas de alto padrão, arranjos florais finos e iluminação pontual acolhedora que harmoniza com as luzes cênicas do salão.',
    googleMapsUrl: 'https://www.google.com/maps/place/Espa%C3%A7o+M+%2F+local+para+eventos/@-9.8953468,-63.0265068,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhBNclD725_54e2TyE92GFbp!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWlAq2F1HZ0fSTSP83eD1meweR-qBDHMxGydWlJRcmVALiFDwgZLXPKFrWMpQ1eJzAR5iWHvzDoCUO9b4tj73p0Me6wNKw9ycLSqkIb8viSAVSiAkIs164xNLthqqORtvFz2hEJRgOwuoQd8%3Dw203-h270-k-no!7i3024!8i4032!4m7!3m6!1s0x93cc91fd4fda03f3:0x57d961aed4cff414!8m2!3d-9.8953468!4d-63.0265068!10e5!16s%2Fg%2F11njxdpxwh'
  },
  {
    id: 'gal-real-03',
    title: 'Palco para Apresentações com Iluminação Vibrante',
    category: 'palco',
    categoryLabel: 'Palco & Som',
    imageUrl: '/images/venue/espaco-m-iluminacao-palco-festa.jpg',
    description: 'Palco profissional equipado para bandas, DJs e cerimonialistas. Efeitos luminosos dinâmicos com moving heads programáveis, canhões de luz e sonorização equilibrada de alta potência.',
    googleMapsUrl: 'https://www.google.com/maps/place/Espa%C3%A7o+M+%2F+local+para+eventos/@-9.8953468,-63.0265068,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhDByKEn5vIOmp3ALoJ0DZs6!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWkzNh4Izrv4Hc4h1FoE4MHj6AYnT7hMScMHaI9X8WRZrd3Df3euRCQUWOdwFsw5RNCC_lmhzuDxwtM5n-wjBPSbdD346BzG7niWHw-uujvWoFFQ3bEGdzF4yPX-64UAw2cwwH3a98R1sH4%3Dw203-h360-k-no!7i2160!8i3840!4m7!3m6!1s0x93cc91fd4fda03f3:0x57d961aed4cff414!8m2!3d-9.8953468!4d-63.0265068!10e5!16s%2Fg%2F11njxdpxwh'
  },
  {
    id: 'gal-real-04',
    title: 'Distribuição Espaçosa de Mesas & Circulação Fluida',
    category: 'celebracoes',
    categoryLabel: 'Casamentos & Festas',
    imageUrl: '/images/venue/espaco-m-visao-panoramica-mesas.jpg',
    description: 'Disposição planejada de dezenas de mesas mantendo corredores amplos para garçons e convidados. Climatização constante e visibilidade desimpedida de qualquer ponto em direção ao palco e telões.',
    googleMapsUrl: 'https://www.google.com/maps/place/Espa%C3%A7o+M+%2F+local+para+eventos/@-9.8953468,-63.0265068,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhDFsgftBu4EnYepU9is_ax2!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWl76tn0meSJB7_ze4dS9NVn89Leg4V91cVKUrvONgD-2Aut94UlZIhP-wtnuJLYRsPQbdaRlxdUh2KXmUCXja5OOHvjPqlDtosxAS15tN1OCiPQ5EKAxsSyK679KPjEUsVnlo8gMrl1kOwk%3Dw203-h114-k-no!7i4080!8i2296!4m7!3m6!1s0x93cc91fd4fda03f3:0x57d961aed4cff414!8m2!3d-9.8953468!4d-63.0265068!10e5!16s%2Fg%2F11njxdpxwh'
  },
  {
    id: 'gal-real-05',
    title: 'Foyer & Hall de Entrada com Acabamento Arquitetônico',
    category: 'cenografia',
    categoryLabel: 'Luzes & Cenografia',
    imageUrl: '/images/venue/espaco-m-detalhes-cenografia-hall.jpg',
    description: 'Área de recepção com arandelas de iluminação decorativa e paredes texturizadas elegantes. Ambiente planejado para credenciamento rápido de conferências corporativas e recepção calorosa de convidados.',
    googleMapsUrl: 'https://www.google.com/maps/place/Espa%C3%A7o+M+%2F+local+para+eventos/@-9.8953468,-63.0265068,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhCNWBgO3_Gh_GNckb6WY7NQ!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWllouH4aaln0TWFhjOsClGQIdrMhxlL0BuLlbPICiUK1S-wqrFV-KoaM91lk-OJ-tnmI97pJOJju5z8ESNT_7z2Sl50Wp_m7GQKupskVqfLWPPB8vfDaqlM_xNjmpTUP2SqpOwZyW_XXVc%3Dw203-h270-k-no!7i3024!8i4032!4m7!3m6!1s0x93cc91fd4fda03f3:0x57d961aed4cff414!8m2!3d-9.8953468!4d-63.0265068!10e5!16s%2Fg%2F11njxdpxwh'
  },
  {
    id: 'gal-real-06',
    title: 'Pista de Dança com Painéis de LED & Efeitos Imersivos',
    category: 'palco',
    categoryLabel: 'Palco & Som',
    imageUrl: '/images/venue/espaco-m-pista-danca-led-painel.jpg',
    description: 'Estrutura vertical para iluminação de pista com feixes sincronizados e efeitos de alta energia para bailes de formatura, debutantes e festas comemorativas que se estendem pela madrugada.',
    googleMapsUrl: 'https://www.google.com/maps/place/Espa%C3%A7o+M+%2F+local+para+eventos/@-9.8953468,-63.0265068,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhA-mWHuuQN6vZDytbzmI20K!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWlFIsPIn-M4ipwBXDzWHGWdELxy1blbNLShn_Vbw_1OOH1UpofHwygpffziduyEO1sfggSDlq-klAJ2UzPCM_MKNmBqgOCCTkM_FxIoagXeLee1Xxr3iBEzuo0wbhqKhyWU0EH0-ZO_H50k%3Dw203-h360-k-no!7i2296!8i4080!4m7!3m6!1s0x93cc91fd4fda03f3:0x57d961aed4cff414!8m2!3d-9.8953468!4d-63.0265068!10e5!16s%2Fg%2F11njxdpxwh'
  },
  {
    id: 'gal-real-07',
    title: 'Estrutura Climatizada de Grande Vão Livre',
    category: 'corporativo',
    categoryLabel: 'Salão & Convenções',
    imageUrl: '/images/venue/espaco-m-ambiente-climatizado-amplo.jpg',
    description: 'Espaço coberto e isolado termicamente com capacidade para grandes montagens simultâneas. Dutos e maquinário de ar-condicionado central de alto rendimento que preservam o conforto em qualquer época do ano.',
    googleMapsUrl: 'https://www.google.com/maps/place/Espa%C3%A7o+M+%2F+local+para+eventos/@-9.8953468,-63.0265068,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhBfZ6gl5zzIatwqQi-pfyw1!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWmOTpnF42Fib2guk8AsIdP_iuqqJ1ElhFwyn8HzB2uyEqAO1LE4_mLLLF-OZ-B5toNgEfyW-eGrVxV-pAPQixh2gH9ht_bzi7Wqg7Fkv3bxK7FyPvTwycwFUZbyHhnoeFLnrSjNjYVzOjnr%3Dw203-h114-k-no!7i4080!8i2296!4m7!3m6!1s0x93cc91fd4fda03f3:0x57d961aed4cff414!8m2!3d-9.8953468!4d-63.0265068!10e5!16s%2Fg%2F11njxdpxwh'
  },
  {
    id: 'gal-real-08',
    title: 'Engenharia de Rigging & Cobertura Estrutural',
    category: 'palco',
    categoryLabel: 'Palco & Som',
    imageUrl: '/images/venue/espaco-m-estrutura-cobertura-acustica.jpg',
    description: 'Grid estrutural metálico aéreo dimensionado para fixação pesada de iluminação, caixas de som suspensas e telões cenográficos com máxima segurança técnica e conformidade com normas de engenharia.',
    googleMapsUrl: 'https://www.google.com/maps/place/Espa%C3%A7o+M+%2F+local+para+eventos/@-9.8953468,-63.0265068,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhD2x34uhlwvdM0PBCNcqvdO!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWmnhxs8eAHfSrYcyVxQ6i9BR-CvbBpTkD2pdwU0RbUu8PWj5NTThDXopT0tUbXfxG45arlrRLG6cqaDLYHQFqYSX2D2DZo7W7brAS3VvU0wpQ5L-KfgpWVJXefV2jLfaWzew6O8V1rTI4AH%3Dw203-h114-k-no!7i4080!8i2296!4m7!3m6!1s0x93cc91fd4fda03f3:0x57d961aed4cff414!8m2!3d-9.8953468!4d-63.0265068!10e5!16s%2Fg%2F11njxdpxwh'
  },
  {
    id: 'gal-real-09',
    title: 'Acesso Externo & Fachada no Setor 06',
    category: 'corporativo',
    categoryLabel: 'Fachada & Acesso',
    imageUrl: '/images/venue/espaco-m-fachada-e-acesso-externo.jpg',
    description: 'Fachada do Espaço M localizada na R. Cecília Meireles em Ariquemes. Acesso seguro com portões amplos para veículos e pedestres, pavimentação com rampas acessíveis e área facilitada de manobra e estacionamento.',
    googleMapsUrl: 'https://www.google.com/maps/place/Espa%C3%A7o+M+%2F+local+para+eventos/@-9.8953468,-63.0265068,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhBaZc6yTrFX4qFsILZ3D5T-!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWnM--ZiYPtI8WXpFw-A9CbzydauPGikyU7CkF62ONvUrnfRfI7i5uzMUzk5MjQhSefsJL97-yTb-M95E9Dxy6pS6vmIXJuqxVINc-63rE0eJVq285Eem2sJTvJajSj7s5XKQzKK0goA8ZRd%3Dw203-h114-k-no!7i4080!8i2296!4m7!3m6!1s0x93cc91fd4fda03f3:0x57d961aed4cff414!8m2!3d-9.8953468!4d-63.0265068!10e5!16s%2Fg%2F11njxdpxwh'
  },
  {
    id: 'gal-real-10',
    title: 'Iluminação Cênica Noturna em Tons Elétricos',
    category: 'cenografia',
    categoryLabel: 'Luzes & Cenografia',
    imageUrl: '/images/venue/espaco-m-iluminacao-cenica-noturna.jpg',
    description: 'Atmosfera noturna com jogos de luz azul e ciano que criam uma estética imersiva e futurista, conferindo elegância e destaque fotográfico para qualquer tipo de comemoração.',
    googleMapsUrl: 'https://www.google.com/maps/place/Espa%C3%A7o+M+%2F+local+para+eventos/@-9.8953468,-63.0265068,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhDhfVJ3yjysAw9WzrphsYJd!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWnUr5OnK3QqpdqEZEtS0j6PfpxgAtHbvDVkg-O8iX0lDQVwbfsJjBoecXyZhWMeEDJ3lGZx03nqOtoL-n8b3SVS7e6v9oCIKwhar4Dwkl76lz8ZQ3lP52qeHjtHRR_bWbnmgIjBwnZixmyG%3Dw203-h360-k-no!7i2160!8i3840!4m7!3m6!1s0x93cc91fd4fda03f3:0x57d961aed4cff414!8m2!3d-9.8953468!4d-63.0265068!10e5!16s%2Fg%2F11njxdpxwh'
  },
  {
    id: 'gal-real-11',
    title: 'Salão Completo Montado para Grande Banquete Social',
    category: 'celebracoes',
    categoryLabel: 'Casamentos & Festas',
    imageUrl: '/images/venue/espaco-m-salao-social-banquete.jpg',
    description: 'Visão do espaço completamente decorado e ambientado para banquete de gala. Mobiliário de qualidade, toalhas alinhadas e ambiente agradável pronto para receber convidados com máximo conforto.',
    googleMapsUrl: 'https://www.google.com/maps/place/Espa%C3%A7o+M+%2F+local+para+eventos/@-9.8953468,-63.0265068,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhAtwVkJLOV4aVn8feOdTP5K!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWlu2zDwboxw05G9Mvxa27XAQwGX1TuWYPTiqa3K8TgvfV1qKDP7RWTTgVOOlAhN8No1r-st5lML08XUdg_q0dx_7zX1amXLN8NO5JKqVamBnrg8DursRxSnH9XqRN_uKDW8jwZU-waeuvM%3Dw203-h114-k-no!7i4080!8i2296!4m7!3m6!1s0x93cc91fd4fda03f3:0x57d961aed4cff414!8m2!3d-9.8953468!4d-63.0265068!10e5!16s%2Fg%2F11njxdpxwh'
  },
  {
    id: 'gal-real-12',
    title: 'Palco Elevado para Solenidades & Homenagens',
    category: 'palco',
    categoryLabel: 'Palco & Som',
    imageUrl: '/images/venue/espaco-m-palco-estrutura-evento.jpg',
    description: 'Palco frontal elevado com acesso seguro e visão privilegiada de todo o público. Ideal para mesas de honra de formaturas, outorga de títulos, lançamentos e shows musicais de médio e grande porte.',
    googleMapsUrl: 'https://www.google.com/maps/place/Espa%C3%A7o+M+%2F+local+para+eventos/@-9.8953468,-63.0265068,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhCbToqH1cedO0QNp8Dd4ms3!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWna4HtgGfGNOuZbqJL2ZGM4PUkBM8j1NPJlgWVmCK6pqmAT0C7R9Kn5rIhAccmx5yh2exTNdFtN9480aa9-kM9yKwkR5DjFvRa15KVEYUV4Xt4RRkXnvYOdMyhWHxxORNCMopGA6frO7sq_%3Dw203-h114-k-no!7i4080!8i2296!4m7!3m6!1s0x93cc91fd4fda03f3:0x57d961aed4cff414!8m2!3d-9.8953468!4d-63.0265068!10e5!16s%2Fg%2F11njxdpxwh'
  },
  {
    id: 'gal-real-13',
    title: 'Área Lounge & Espaço de Convivência Social',
    category: 'cenografia',
    categoryLabel: 'Lounge & Convivência',
    imageUrl: '/images/venue/espaco-m-detalhe-ambientacao-lounge.jpg',
    description: 'Espaço lounge aconchegante com sofás, poltronas e mesas de apoio para conversas e networking. Perfeito para momentos de descontração durante festas e intervalos de conferências corporativas.',
    googleMapsUrl: 'https://www.google.com/maps/place/Espa%C3%A7o+M+%2F+local+para+eventos/@-9.8953468,-63.0265068,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhDnt0Ce495U9epcYnqQJNOH!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWmarmuCLNXZ3ACL82KX7tBS-F2mvVSZ4sEhtiGLNHQivhUA_TsD8owzczqRHcr8_gIDAsx15Ha96ec4sefakFwf-o1qfQNe0jNL38I0Ku7IPGmKHYtQXKcQlX-kh1Dq47FatwjUh3dP_WY%3Dw203-h270-k-no!7i3024!8i4032!4m7!3m6!1s0x93cc91fd4fda03f3:0x57d961aed4cff414!8m2!3d-9.8953468!4d-63.0265068!10e5!16s%2Fg%2F11njxdpxwh'
  }
];

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: 'review-1',
    author: 'Marcos Vinícius Costa',
    role: 'Cliente Verificado',
    companyOrEvent: 'Aniversário Infantil & Família',
    rating: 5,
    timeAgo: 'há 3 semanas',
    avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop',
    comment: 'Alugamos o Espaço M para o aniversário de 10 anos do meu filho e foi sensacional! A área das duas piscinas (infantil e adulto) estava impecavelmente limpa. Usamos a churrasqueira, o freezer e os 10 jogos de mesas que já vêm no local. Lugar super arejado no Setor 06, recomendo de olhos fechados!',
    source: 'Google Maps',
    isLocalGuide: true,
    reviewCount: 42,
    userInitial: 'M'
  },
  {
    id: 'review-2',
    author: 'Fernanda Soares Ribeiro',
    role: 'Cliente Verificada',
    companyOrEvent: 'Churrasco em Família',
    rating: 5,
    timeAgo: 'há 1 mês',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    comment: 'Excelente espaço para confraternização e churrasco de família em Ariquemes! A cozinha com fogão, freezer potente e a mesa grande facilitaram muito na hora do almoço. Os dois banheiros estavam limpinhos e bem cuidados. O atendimento pelo WhatsApp foi super ágil e prestativo.',
    source: 'Google Maps',
    isLocalGuide: true,
    reviewCount: 28,
    userInitial: 'F'
  },
  {
    id: 'review-3',
    author: 'Julio Cesar Mendes',
    role: 'Cliente Verificado',
    companyOrEvent: 'Comemoração com Amigos',
    rating: 5,
    timeAgo: 'há 2 meses',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    comment: 'Comemorei meu aniversário com churrasco para amigos e família. O Espaço M superou as expectativas: espaço muito bem conservado, piscinas excelentes, ambiente privativo e bem seguro. Todos os convidados elogiaram a estrutura. Com certeza alugaremos nas próximas datas!',
    source: 'Google Maps',
    isLocalGuide: false,
    reviewCount: 8,
    userInitial: 'J'
  },
  {
    id: 'review-4',
    author: 'Ana Paula Fagundes',
    role: 'Cliente Verificada',
    companyOrEvent: 'Recepção de Casamento',
    rating: 5,
    timeAgo: 'há 3 meses',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    comment: 'Fizemos a celebração do nosso casamento no Espaço M e ficou maravilhoso! A iluminação à noite dá um charme todo especial e o ambiente é perfeito para receber as pessoas queridas. A entrada com acessibilidade foi fundamental para receber meus avós com todo conforto. Só elogios!',
    source: 'Google Maps',
    isLocalGuide: true,
    reviewCount: 35,
    userInitial: 'A'
  },
  {
    id: 'review-5',
    author: 'Diego Henrique Santos',
    role: 'Cliente Verificado',
    companyOrEvent: 'Confraternização de Fim de Ano',
    rating: 5,
    timeAgo: 'há 4 meses',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    comment: 'Ótima localização na Cecília Meireles no Setor 06, muito fácil de achar e com estacionamento tranquilo na frente. A estrutura é completa: churrasqueira boa, fogão, freezer gelando perfeitamente e área coberta espaçosa. Nota 10 pro espaço!',
    source: 'Google Maps',
    isLocalGuide: false,
    reviewCount: 14,
    userInitial: 'D'
  },
  {
    id: 'review-6',
    author: 'Patrícia Lemes de Oliveira',
    role: 'Cliente Verificada',
    companyOrEvent: 'Aniversário de 15 Anos',
    rating: 5,
    timeAgo: 'há 5 meses',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    comment: 'Espaço impecável em Ariquemes! Alugamos para a festa de 15 anos da minha sobrinha. O salão acomodou todo mundo muito bem, a piscina com iluminação noturna ficou incrível nas fotos e a comunicação com os responsáveis foi nota mil. Super indico para qualquer evento!',
    source: 'Google Maps',
    isLocalGuide: true,
    reviewCount: 51,
    userInitial: 'P'
  }
];

export const VENUE_DIFFERENTIALS = [
  {
    title: '100% de Backup Energético',
    desc: 'Gerador silencioso de partida automática que supre 100% da carga de som, luz e ar-condicionado sem interrupção.',
    icon: 'Zap'
  },
  {
    title: 'Acústica Arquitetônica',
    desc: 'Tratamento anti-eco e isolamento sonoro em conformidade com as normas ABNT, ideal para gravações e discursos sem ruído externo.',
    icon: 'Volume2'
  },
  {
    title: 'Climatização Inteligente',
    desc: 'Sistema de ar-condicionado central de alta vazão e filtragem contínua, mantendo o clima agradável mesmo com lotação máxima.',
    icon: 'Wind'
  },
  {
    title: 'Acessibilidade Total (PCD)',
    desc: 'Rampas suaves, banheiros adaptados e circulação ampla sem degraus para acolher todos os seus convidados com dignidade.',
    icon: 'ShieldCheck'
  }
];
