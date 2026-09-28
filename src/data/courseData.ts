export interface SubjectTopicCategory {
  category: string;
  items: string[];
}

export interface SubjectItem {
  id: string;
  title: string;
  image: string;
  description: string;
  accentColor: string;
  topics: SubjectTopicCategory[];
}

const BASE_SUBJECTS: SubjectItem[] = [
  {
    id: 'biologia',
    title: 'Apostila de Biologia',
    image: 'https://i.imgur.com/1xXhTJw.png',
    accentColor: '#10b981',
    description:
      'Revise Biologia para o ENEM com resumos simples, organizados e focados nos temas mais importantes da prova. O material aborda células, genética, evolução, ecologia, corpo humano, bioquímica, fisiologia e processos naturais para ajudar você a entender melhor as questões.',
    topics: [
      {
        category: 'Bioquímica',
        items: ['Águas e Sais', 'Vitaminas', 'Carboidratos e Lipídios', 'Intolerância à Lactose', 'Proteínas', 'Ácido Nucleico'],
      },
      {
        category: 'Botânica',
        items: ['Reino Plantae'],
      },
      {
        category: 'Citologia',
        items: ['Organelas Citoplasmáticas', 'Esp. Membrana', 'Transporte Celular', 'Respiração Celular', 'Fotossíntese', 'Mutações', 'Câncer'],
      },
      {
        category: 'Embriologia',
        items: ['Ovos e Segmentação', 'Anexos Embrionários', 'Embriologia'],
      },
      {
        category: 'Ecologia',
        items: ['Ciclo do Nitrogênio', 'Rel. Ecológicas', 'Sucessão Ecológica', 'Ecologia'],
      },
      {
        category: 'Evolução',
        items: ['Origem da Vida', 'Lamarck', 'Darwin', 'Especiação', 'Evidências Evolutivas'],
      },
      {
        category: 'Fisiologia',
        items: [
          'Sistema Digestório',
          'Sistema Respiratório',
          'Sistema Excretor',
          'Sistema Urinário',
          'Sistema Linfático',
          'Sistema Circulatório',
          'Sistema Nervoso',
          'Sistema Endócrino',
          'Ciclo Menstrual',
          'Métodos Contraceptivos',
          'Genital Masculino',
          'Genital Feminino',
          'Fecundação',
          'Gêmeos',
          'Espermatogênese',
        ],
      },
      {
        category: 'Genética',
        items: ['1ª Lei de Mendel', 'Genética', 'Sistema RH'],
      },
      {
        category: 'Histologia',
        items: ['Epitélio', 'Tecido Nervoso', 'Tecido Muscular', 'Tecido Conjuntivo'],
      },
      {
        category: 'Microbiologia',
        items: ['Taxonomia e Sistemática', 'Algas', 'Bactérias', 'Bacterioses', 'Protozooses', 'Micoses', 'Viroses', 'Coronavirus'],
      },
      {
        category: 'Zoologia',
        items: ['Poríferos', 'Celenterados', 'Platelmintos', 'Nematodeos', 'Anfíbios', 'Répteis', 'Aves', 'Mamíferos', 'Peixes'],
      },
    ],
  },
  {
    id: 'fisica',
    title: 'Apostila de Física',
    image: 'https://i.imgur.com/4HpzCBB.png',
    accentColor: '#059669',
    description:
      'Um material direto para estudar Física sem se perder em fórmulas complicadas. Você revisa os principais assuntos cobrados no ENEM, como cinemática, dinâmica, termodinâmica, ondas, eletricidade e gravitação, com resumos claros para facilitar a compreensão e a prática.',
    topics: [
      {
        category: 'Calorimetria',
        items: ['Calor', 'Calorimetria'],
      },
      {
        category: 'Cinemática',
        items: ['Movimento Uniforme', 'MU Variado', 'Queda Livre', 'Lançamento Vertical', 'Lançamentos', 'Polias', 'Cal. Vetores', 'MCU', 'Cinemática'],
      },
      {
        category: 'Dinâmica',
        items: ['Forças', 'Atrito', 'Plano Inclinado', 'Lei de Hooke', 'Força Centrípeta', 'Estática', 'Newton'],
      },
      {
        category: 'Eletrostática',
        items: ['Eletrostática'],
      },
      {
        category: 'Energia',
        items: ['Trabalho', 'Potência'],
      },
      {
        category: 'Estática',
        items: ['Estática'],
      },
      {
        category: 'Gravitação Universal',
        items: ['Gravitação'],
      },
      {
        category: 'Mecânica Impulsiva',
        items: ['Momento Linear', 'Alavancas'],
      },
      {
        category: 'Ondulatória',
        items: ['Ondas', 'Ondulatória', 'Som'],
      },
      {
        category: 'Termodinâmica',
        items: ['Termodinâmica'],
      },
      {
        category: 'Termometria e Dilatometria',
        items: ['Termologia'],
      },
      {
        category: 'Fórmulas de Física',
        items: ['Fórmulas essenciais de Física comentadas'],
      },
    ],
  },
  {
    id: 'quimica',
    title: 'Apostila de Química',
    image: 'https://i.imgur.com/XTFuRuJ.png',
    accentColor: '#0d9488',
    description:
      'Um guia direto para entender Química sem travar nas fórmulas e conceitos. Você revisa os assuntos mais cobrados no ENEM, aprende a identificar o que a questão está pedindo e ganha mais segurança para resolver exercícios de química orgânica, inorgânica, equilíbrio, soluções e energia.',
    topics: [
      {
        category: 'Cinética Química',
        items: ['Cinética Química'],
      },
      {
        category: 'Dispersões',
        items: ['Soluções', 'Diluição', 'Dispersões Coloidais'],
      },
      {
        category: 'Eletroquímica',
        items: ['Pilha', 'Eletrólise'],
      },
      {
        category: 'Equilíbrio Químico',
        items: ['Equilíbrio Químico'],
      },
      {
        category: 'Estudo Físico dos Gases',
        items: ['Gás Ideal'],
      },
      {
        category: 'Ligações Químicas',
        items: ['Ligações Químicas', 'Polaridade', 'Hibridação', 'Geometria Molecular'],
      },
      {
        category: 'Matéria e Energia',
        items: ['Química Básica'],
      },
      {
        category: 'Química Ambiental',
        items: ['Poluição Ambiental'],
      },
      {
        category: 'Química Inorgânica',
        items: ['Ácidos', 'Bases', 'Óxidos', 'Sais', 'Nox', 'Teorias Ácido-Base', 'Balanceamento', 'Reações Inorgânicas'],
      },
      {
        category: 'Química Orgânica',
        items: ['Orgânica', 'Isomeria', 'Funções Orgânicas'],
      },
      {
        category: 'Transformações Químicas',
        items: ['Modelos Atômicos', 'Distribuição Eletrônica', 'Classificação Periódica', 'Propriedades Periódicas', 'Análise Imediata'],
      },
      {
        category: 'Termoquímica',
        items: ['Termoquímica'],
      },
    ],
  },
  {
    id: 'geografia',
    title: 'Apostila de Geografia',
    image: 'https://i.imgur.com/uDony5A.png',
    accentColor: '#16a34a',
    description:
      'Um guia direto para você estudar Geografia sem complicação. Entenda os principais temas cobrados no ENEM, como meio ambiente, população, economia, urbanização, agricultura, energia e espaço geográfico, com resumos claros para facilitar sua revisão.',
    topics: [
      {
        category: 'Agricultura',
        items: ['Espaço Agrário Brasileiro', 'Biotecnologia', 'Agricultura'],
      },
      {
        category: 'Cartografia',
        items: ['Projeções Cartográficas', 'Sensoriamento Remoto'],
      },
      {
        category: 'Comércio e Transportes',
        items: ['Divisão Internacional do Trabalho', 'Transportes', 'Blocos Econômicos'],
      },
      {
        category: 'Elementos e Fatores do Clima',
        items: ['Zonas Térmicas', 'Massas de Ar', 'Clima', 'Climas do Brasil'],
      },
      {
        category: 'Globalização',
        items: ['Globalização'],
      },
      {
        category: 'Hidrografia',
        items: ['Conceitos Hidrográficos', 'Hidrografia Brasileira'],
      },
      {
        category: 'Industrialização',
        items: ['Indústria no Mundo', 'Indústria Brasileira', 'Indústria'],
      },
      {
        category: 'Litosfera',
        items: ['Estrutura Interna da Terra', 'Estrutura Geológica', 'Dinâmica da Crosta'],
      },
      {
        category: 'População',
        items: ['Teorias Demográficas', 'Estrutura Populacional'],
      },
      {
        category: 'Recursos Energéticos',
        items: ['Energia Não Renovável', 'Energias Renováveis', 'Recursos Energéticos'],
      },
      {
        category: 'Regionalização',
        items: ['Regionalização', 'Regiões Brasileiras'],
      },
      {
        category: 'Relevo do Brasil',
        items: ['Relevo Brasileiro', 'Brasil Estrutura Geológica'],
      },
      {
        category: 'Solos',
        items: ['Solos', 'Solos no Brasil', 'Recursos Minerais Brasileiros'],
      },
      {
        category: 'Urbanização',
        items: ['Urbanização Brasileira', 'Urbanização', 'Problemas Urbanos'],
      },
      {
        category: 'Vegetação',
        items: ['Biomas', 'Vegetação Brasileira', 'Vegetação'],
      },
    ],
  },
  {
    id: 'historia',
    title: 'Apostila de História',
    image: 'https://i.imgur.com/a72uShB.png',
    accentColor: '#eab308',
    description:
      'Um material direto para você estudar História sem se perder em datas e nomes difíceis. Revise os períodos, conflitos, revoluções e transformações sociais mais cobradas no ENEM, entendendo como esses acontecimentos impactaram o Brasil e o mundo.',
    topics: [
      {
        category: 'A Era das Revoluções',
        items: [
          'Iluminismo',
          'Revolução Inglesa',
          'Revolução Americana',
          'Revolução Francesa',
          'Revolução Industrial',
          'Fases da Revolução Industrial',
          'Revolução Russa',
          'Revoluções Liberais',
          'Congresso de Viena',
          'Independência da América Espanhola',
          'Era Napoleônica',
          'Primavera dos Povos',
        ],
      },
      {
        category: 'América e Brasil na Época Colonial',
        items: [
          'América Colonial',
          'América Inglesa',
          'América Espanhola',
          'Brasil Colonial',
          'Entradas e Bandeiras',
          'Mineração',
          'Crise do Sistema Colonial',
          'Período Joanino',
          'Independência do Brasil',
        ],
      },
      {
        category: 'Brasil dos Anos 80 e 2000',
        items: ['Redemocratização do Brasil'],
      },
      {
        category: 'Brasil Império',
        items: ['1º Reinado', 'Período Regencial', 'Revoltas Regenciais'],
      },
      {
        category: 'Brasil República',
        items: ['Movimentos Republicanos', 'República do Brasil', 'Era Vargas'],
      },
      {
        category: 'EUA e Europa no Século XIX',
        items: ['EUA no Século XIX', 'Imperialismo', 'Movimentos Socialistas'],
      },
      {
        category: 'Guerras Mundiais',
        items: ['Crise de 29', 'Nazifascismo', '1ª Guerra Mundial', '2ª Guerra Mundial'],
      },
      {
        category: 'História Antiga',
        items: ['Grécia', 'Roma Antiga'],
      },
      {
        category: 'Idade Média',
        items: ['Alta Idade Média', 'Baixa Idade Média', 'Império Bizantino', 'Absolutismo', 'Grandes Navegações'],
      },
      {
        category: 'Idade Moderna',
        items: ['Renascimento', 'Reforma e Contrarreforma'],
      },
      {
        category: 'Mundo Bipolar',
        items: ['Guerra Fria', 'Descolonização Afro-Asiática', 'América Latina no Século XX'],
      },
      {
        category: 'Regime Militar',
        items: ['Ditadura Militar', 'Anos Dourados'],
      },
    ],
  },
  {
    id: 'filosofia',
    title: 'Apostila de Filosofia',
    image: 'https://i.imgur.com/DX8BgBX.png',
    accentColor: '#3b82f6',
    description:
      'Um guia direto para entender Filosofia sem complicação. Você revisa os conceitos, autores e correntes filosóficas mais cobrados no ENEM, aprendendo a interpretar ideias sobre ética, sociedade, política, conhecimento e comportamento humano com mais segurança.',
    topics: [
      {
        category: 'Epistemologia',
        items: [
          'Tipos de Conhecimento',
          'Teoria do Conhecimento',
          'Ontologia',
          'Platão e o Mito da Caverna',
          'Empirismo Aristotélico',
          'Empirismo Moderno',
          'Racionalismo Moderno',
          'Racionalismo x Empirismo',
          'Kant e o Criticismo',
        ],
      },
      {
        category: 'Filosofia Moral',
        items: ['Moral, Ética e Lei', 'Ética Helênica e Moral Cristã', 'Ética Contemporânea', 'Filósofos Pré-Socráticos e Socráticos'],
      },
      {
        category: 'Filosofia Política',
        items: [
          'Política Grega',
          'Estado, Governo e Sociedade',
          'Estratificação Social',
          'Contrato Social',
          'Maquiavel',
          'Hobbes',
          'Hannah Arendt',
          'Foucault',
          'Jean-Paul Sartre',
          'Feminismo',
        ],
      },
    ],
  },
  {
    id: 'sociologia',
    title: 'Apostila de Sociologia',
    image: 'https://i.imgur.com/K1A1FT6.png',
    accentColor: '#8b5cf6',
    description:
      'Um material direto para você compreender Sociologia sem ficar perdido em termos difíceis. Revise os autores clássicos, os conceitos sociais mais importantes e temas atuais que costumam aparecer no ENEM, como desigualdade, cidadania, mídia, consumo e direitos humanos.',
    topics: [
      {
        category: 'Introdução e Origem',
        items: ['Introdução à Sociologia', 'Auguste Comte', 'Karl Marx', 'Emile Durkheim', 'Max Weber'],
      },
      {
        category: 'Conceitos Fundamentais',
        items: ['Democracia e Direitos Humanos', 'Escola de Frankfurt', 'Sociedade Midiática', 'Sociedade de Consumo'],
      },
    ],
  },
  {
    id: 'artes',
    title: 'Apostila de Artes',
    image: 'https://i.imgur.com/wpnwTdT.png',
    accentColor: '#ec4899',
    description:
      'Um guia prático para entender Artes sem complicação. Você revisa da Arte Pré-Histórica ao Modernismo, passando pelos estilos mais cobrados no ENEM, com explicações diretas para reconhecer características, interpretar obras e não travar nas questões.',
    topics: [
      {
        category: 'Arte Clássica',
        items: ['Arte Renascentista', 'Arte Barroca', 'Barroco no Brasil', 'Rococó', 'Neoclassicismo', 'Romantismo na Arte'],
      },
      {
        category: 'Arte Moderna',
        items: ['Realismo na Arte', 'Pós-Impressionismo', 'Futurismo', 'Expressionismo Alemão'],
      },
      {
        category: 'Pré-História',
        items: ['Paleolítico e Neolítico', 'Arte Egípcia', 'Arte Grega', 'Arte Romana', 'Gótica x Romana'],
      },
    ],
  },
  {
    id: 'literatura',
    title: 'Apostila de Literatura',
    image: 'https://enem.medvetab.com.br/wp-content/uploads/2026/08/Mockup_Livro_Literatura-1-1024x1024.webp',
    accentColor: '#f97316',
    description:
      'Um material direto para você entender as escolas literárias sem decorar tudo no desespero. Aprenda os períodos, autores, obras e características mais cobradas no ENEM, com resumos claros para facilitar sua revisão antes da prova.',
    topics: [
      {
        category: 'Escolas Literárias',
        items: ['Trovadorismo', 'Humanismo e Classicismo'],
      },
      {
        category: 'Literatura no Brasil Colônia',
        items: ['Quinhentismo e Barroco', 'Arcadismo'],
      },
      {
        category: 'Literatura no Brasil Império',
        items: ['Romantismo', 'Poesia Romântica', 'Prosa Romântica', 'Realismo', 'Naturalismo', 'Parnasianismo', 'Simbolismo'],
      },
      {
        category: 'Literatura no Brasil República',
        items: ['Modernismo – 1ª Fase', 'Modernismo – 2ª Geração', 'Modernismo – 3ª Fase'],
      },
      {
        category: 'Literatura Contemporânea',
        items: ['Literatura Contemporânea'],
      },
    ],
  },
  {
    id: 'portugues',
    title: 'Apostila de Português',
    image: 'https://i.imgur.com/Ilr6z4i.png',
    accentColor: '#06b6d4',
    description:
      'Um guia prático para melhorar sua interpretação e dominar os pontos de Português que mais aparecem no ENEM. Com resumos organizados, você revisa gramática, funções da linguagem, crase, sintaxe e compreensão textual sem perder tempo com conteúdo confuso.',
    topics: [
      {
        category: 'Gramática',
        items: [
          'Substantivo',
          'Adjetivos',
          'Artigo',
          'Figuras de Linguagem',
          'Funções da Linguagem',
          'Variação Linguística',
          'Crase',
          'Sintaxe',
          'Orações Coordenadas',
          'Orações Subordinadas',
          'Orações Subordinadas Adverbiais',
        ],
      },
    ],
  },
  {
    id: 'matematica',
    title: 'Apostila de Matemática',
    image: 'https://i.imgur.com/qNP1WGL.png',
    accentColor: '#38bdf8',
    description:
      'Um material direto ao ponto para você dominar os conteúdos mais cobrados em Matemática no ENEM. Com explicações simples, fórmulas essenciais e revisões estratégicas, fica mais fácil entender os cálculos e ganhar tempo na hora da prova.',
    topics: [
      {
        category: 'Estatística',
        items: ['Estatística'],
      },
      {
        category: 'Função',
        items: [
          'Função Afim',
          'Função Quadrática',
          'Logaritmo',
          'Função Logarítmica',
          'Função Composta e Inversa',
          'Módulo e Função Modular',
          'Função, Equação e Inequação',
        ],
      },
      {
        category: 'Geometria Plana',
        items: ['Triângulos', 'Polígonos', 'Trigonometria', 'Círculo Trigonométrico', 'Fórmulas Matemáticas'],
      },
      {
        category: 'Porcentagem',
        items: ['Juros Simples e Compostos'],
      },
      {
        category: 'Razão e Proporção',
        items: ['Razão e Proporção'],
      },
    ],
  },
];

// Ordem totalmente invertida: os últimos da lista agora aparecem em primeiro lugar
export const SUBJECTS: SubjectItem[] = [...BASE_SUBJECTS].reverse();

export interface SamplePage {
  title: string;
  image: string;
  alt: string;
}

export const SAMPLE_PAGES: SamplePage[] = [
  { title: 'Capa História', image: 'https://i.imgur.com/02QkUMs.png', alt: 'Capa História' },
  { title: 'Amostra História 01', image: 'https://i.imgur.com/DRebk4x.png', alt: 'Amostra de Página 01' },
  { title: 'Amostra Biologia 02', image: 'https://i.imgur.com/MR9jmm9.png', alt: 'Amostra de Página 02' },
  { title: 'Amostra Química 03', image: 'https://i.imgur.com/kKbQqnj.png', alt: 'Amostra de Página 03' },
  { title: 'Amostra Física', image: 'https://i.imgur.com/JKqXJMs.png', alt: 'Amostra Física' },
  { title: 'Amostra Física 04', image: 'https://i.imgur.com/ePFo96p.png', alt: 'Amostra de Página 04' },
  { title: 'Amostra Matemática 05', image: 'https://i.imgur.com/yxJPBKV.png', alt: 'Amostra de Página 05' },
  { title: 'Amostra Geografia 06', image: 'https://i.imgur.com/W6bh9yt.png', alt: 'Amostra de Página 06' },
  { title: 'Amostra Geografia', image: 'https://i.imgur.com/ibmvqU7.png', alt: 'Amostra Geografia' },
  { title: 'Amostra Filosofia 07', image: 'https://i.imgur.com/IL9SZtP.png', alt: 'Amostra de Página 07' },
  { title: 'Amostra Literatura 08', image: 'https://enem.medvetab.com.br/wp-content/uploads/2026/08/pg08.webp', alt: 'Amostra de Página 08' },
];

export const STORY_PHOTOS = [
  { id: 1, image: 'https://enem.medvetab.com.br/wp-content/uploads/2026/08/PS01.webp', caption: 'Ana Beatriz - Estudante & Criadora' },
  { id: 2, image: 'https://enem.medvetab.com.br/wp-content/uploads/2026/08/PS02.webp', caption: 'Rotina de Estudos & Resumos' },
  { id: 3, image: 'https://enem.medvetab.com.br/wp-content/uploads/2026/08/PS03.webp', caption: 'Método Visual na Prática' },
  { id: 4, image: 'https://enem.medvetab.com.br/wp-content/uploads/2026/08/PS04.webp', caption: 'Aprovações & Resultado 940+' },
  { id: 5, image: 'https://enem.medvetab.com.br/wp-content/uploads/2026/08/PS05.webp', caption: 'Formatura Medicina Veterinária' },
];

export const BENEFITS = [
  {
    iconName: 'Banknote',
    title: 'Economize tempo e dinheiro.',
    description:
      'Com o Pack de Resumos ENEM, você terá acesso a mais de 400 resumos em PDF sobre os principais assuntos do ENEM, economizando horas de pesquisa e dinheiro com materiais e livros caros.',
  },
  {
    iconName: 'BookOpen',
    title: 'Facilite os seus estudos e revisões.',
    description:
      'Os resumos são práticos e fáceis de serem consultados, permitindo que você possa estudar em qualquer lugar e a qualquer hora, seja no computador, tablet ou smartphone.',
  },
  {
    iconName: 'CheckSquare',
    title: 'Organize e planeje os seus estudos.',
    description:
      'Com o Pack de Resumos ENEM, você poderá organizar seu tempo e planejar seus estudos de forma mais eficiente, já que terá um material completo e estruturado próprio para consulta.',
  },
  {
    iconName: 'Zap',
    title: 'Melhore a sua produtividade.',
    description:
      'Ao utilizar os resumos do Pack de Resumos ENEM, os estudantes terão acesso a um conteúdo completo e de qualidade, o que pode melhorar seu desempenho na prova e aumentar suas chances de ingressar em uma universidade.',
  },
  {
    iconName: 'Brain',
    title: 'Assimile e fixe o conteúdo.',
    description:
      'Os resumos do Pack de Resumos ENEM foram escritos de forma cuidadosa e com uma linguagem de fácil entendimento, no melhor aspecto visual de modo a facilitar a interpretação e memorização dos conteúdos.',
  },
  {
    iconName: 'Award',
    title: 'Estude através de um método validado.',
    description:
      'Todas as apostilas presentes no combo foram criadas e utilizadas por mim, Ana Beatriz, durante a minha preparação como vestibulanda de Medicina Veterinária, o que garante que sejam materiais realmente funcionais e de qualidade para você.',
  },
];

export const TARGET_AUDIENCE = [
  'Parar de estudar 12h por dia e estudar apenas 3h a 4h, mas de forma mais produtiva.',
  'Facilitar a rotina de estudo com materiais práticos, visuais e fáceis de serem revisados, podendo acessar de qualquer lugar, em qualquer dispositivo.',
  'Estudar de forma mais organizada, com um planejamento claro e realmente eficiente, criado para te ajudar a tirar nota alta no ENEM.',
  'Parar de estudar às cegas e utilizar um método realmente validado, que já funcionou pra outra pessoa antes, alguém que já passou pelo ENEM e com nota alta (940+).',
  'Parar de utilizar PDFs soltos, bagunçados, slides pouco visuais e passar a utilizar materiais de fácil consumo, assimilação e revisão, que te ajudam a fixar todos os assuntos, melhorar seu desempenho na prova e aumentar suas chances de ingressar em uma universidade.',
];

export const FAQS = [
  {
    question: 'Os materiais funcionam no celular?',
    answer:
      'Sim! Todos os materiais são entregues em formato PDF, compatível com qualquer dispositivo (celular, tablet ou computador). Você pode estudar onde e quando quiser.',
  },
  {
    question: 'Recebo meu acesso logo após a compra?',
    answer:
      'Sim! O acesso é liberado automaticamente logo após a confirmação do pagamento pela plataforma. Você receberá um e-mail com o link de acesso da Área de Membros e lá você encontrará todas as apostilas do combo.\n\nPor isso é importante você cadastrar o seu melhor e-mail na hora da compra, pois é nele que você receberá o seu acesso imediato.',
  },
  {
    question: 'Posso imprimir as apostilas?',
    answer:
      'Sim! As apostilas foram criadas já com os tamanhos exatos para que você possa imprimir se quiser.\n\nTudo o que você precisa fazer é baixar as apostilas e levar numa gráfica para imprimir.',
  },
  {
    question: 'O pagamento é único ou mensal?',
    answer:
      'Pagamento único! Não há mensalidade ao adquirir as apostilas, uma vez pago você terá acesso vitalício a ele (ou seja, para sempre).',
  },
  {
    question: 'Por quanto tempo terei acesso às apostilas?',
    answer:
      'Para sempre! O acesso é 100% vitalício (exceto em casos de solicitação de reembolso).',
  },
];

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  originalPrice: string;
  currentPrice: string;
  installments: string;
  discountAmount: string;
  checkoutUrl: string;
  ctaText: string;
  description: string;
  features: string[];
  bonuses?: string[];
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'essencial',
    name: 'Plano Essencial',
    badge: 'ENTRADA ACESSÍVEL',
    isPopular: false,
    originalPrice: 'R$ 47,00',
    currentPrice: 'R$ 10,90',
    installments: 'ou 2x de R$ 5,75 no cartão / PIX',
    discountAmount: 'R$ 36,10',
    checkoutUrl: 'https://checkout.wiven.com.br/checkout/cmukogow20w3q01pu8em4sfr5?offer=S2XAYPC',
    ctaText: 'QUERO O PLANO ESSENCIAL',
    description: 'Ideal para quem quer começar a estudar hoje com o menor investimento possível.',
    features: [
      '6 Apostilas Completas',
      'Acesso Imediato',
      'Material visual e prático',
      'Garantia de 14 dias',
      'Sem os bônus inclusos',
    ],
  },
  {
    id: 'completo',
    name: 'Plano Completo',
    badge: 'PLANO COMPLETO',
    isPopular: true,
    originalPrice: 'R$ 97,00',
    currentPrice: 'R$ 32,90',
    installments: 'ou até 6x de R$ 6,21 no cartão',
    discountAmount: 'R$ 64,10',
    checkoutUrl: 'https://checkout.wiven.com.br/checkout/cmukogow20w3q01pu8em4sfr5?offer=U1N8PE3',
    ctaText: 'QUERO O PLANO COMPLETO',
    description: 'A preparação definitiva com todas as matérias e bônus inclusos.',
    features: [
      'Acesso à nossa Plataforma Especializada e Treinada para o ENEM 2026',
      'Todas as 11 Apostilas Completas (Biologia, Física, Química, Geografia, História, Filosofia, Sociologia, Artes, Literatura, Português, Matemática)',
      'Acesso VITALÍCIO (estude no seu ritmo, sem limites de tempo)',
      'Material 100% atualizado para o ENEM 2026',
      'Pronto para leitura digital e impressão gráfica em alta qualidade',
      'Garantia incondicional blindada de 14 dias',
    ],
    bonuses: [
      'BONUS 1 - Questões comentadas de física e matemática dos ENEM passados com resoluções passo a passo.',
      'BONUS 2 - Planner de estudos diário e semanal para organização de rotina e acompanhamento de metas.',
      'BONUS 3 - Checklist dos Assuntos Mais Cobrados: Lista por matéria com os temas que mais aparecem na prova.',
    ],
  },
];

export const PRICING = {
  plan1090: PRICING_PLANS[0],
  plan2990: PRICING_PLANS[1],
  originalPrice: 'R$ 97,00',
  currentPrice: 'R$ 32,90',
  entryPrice: 'R$ 10,90',
  installments: 'ou até 6x de R$ 6,21 no cartão',
  discountAmount: 'R$ 64,10',
  checkoutUrl: 'https://checkout.wiven.com.br/checkout/cmukogow20w3q01pu8em4sfr5?offer=U1N8PE3',
};

export const PLAN_UPGRADE_1890 = {
  name: 'Combo Completo VIP (Oferta Especial)',
  originalPrice: 'R$ 32,90',
  anchorPrice: 'R$ 97,00',
  currentPrice: 'R$ 18,90',
  installments: 'ou até 3x de R$ 6,70 no cartão',
  differencePrice: 'R$ 8,00',
  checkoutUrl: 'https://checkout.wiven.com.br/checkout/cmukogow20w3q01pu8em4sfr5?offer=G6N1R77',
  ctaText: 'QUERO O PLANO COMPLETO POR R$ 18,90',
};
