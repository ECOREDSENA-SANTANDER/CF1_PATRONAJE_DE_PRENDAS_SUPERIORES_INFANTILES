export default {
  global: {
    Name: 'Estructura corporal y patronaje básico infantil',
    Description:
      'El componente de estructura corporal y patronaje básico infantil brinda los fundamentos técnicos necesarios para la construcción de patrones básicos adaptados a la figura infantil femenina. Se centra en la aplicación de la antropometría, la ergonomía y la proporcionalidad corporal para el desarrollo de prendas superiores. Esta formación fortalece la capacidad del aprendiz para interpretar diseños, elaborar cuadros de tallas infantiles y generar propuestas acordes con las exigencias del vestuario casual, integrando precisión técnica, comodidad y seguridad en cada proceso.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Estructura del cuerpo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'División del cuerpo',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Análisis de medidas, clasificación y cuadros de tallas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto y tipos de medidas',
            hash: 't_1_1',
          },
          {
            numero: '2.2',
            titulo: 'Proporción versus canon',
            hash: 't_1_1',
          },
          {
            numero: '2.3',
            titulo: 'Proporciones corporales',
            hash: 't_1_1',
          },
          {
            numero: '2.4',
            titulo: 'Medidas deducidas',
            hash: 't_1_1',
          },
          {
            numero: '2.5',
            titulo: 'Normatividad',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Universos del vestuario',
            hash: 't_1_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipología de prendas infantiles para niña',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Tema 4',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Aprovechamiento',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Tema 5',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Tipos de patronaje y líneas',
            hash: 't_1_1',
          },
          {
            numero: '5.2',
            titulo: 'Patrón básico superior infantil',
            hash: 't_1_1',
          },
          {
            numero: '5.3',
            titulo: 'Patrón básico de manga',
            hash: 't_1_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Moda y Vestuario: universos paralelos con infinitas posibilidades de encuentro',
      referencia:
        'Servicio Nacional de Aprendizaje, SENA. (2021).  Trazo de manga y cabezas de manga.  Ecosistema de recursos educativos.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=EAl_FBfkYUE&t=2018s&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
  ],
  glosario: [
    {
      termino: '<em>Atelier</em>',
      significado: 'taller de creación de moda.',
    },
    {
      termino: 'Bidimensional',
      significado:
        'se representa según su altura y su anchura, y no su profundidad.',
    },
    {
      termino: 'Diseño',
      significado:
        'actividad creativa orientada a soluciones idóneas a ciertas problemáticas.',
    },
    {
      termino: 'Estilo',
      significado:
        'manifestación personal de cada individuo según las características propias y su comunicación a través de su actitud y su vestuario. En el estilo se manifiesta la identidad de la persona que está fundamentada en la unidad que se refleja a partir de la relación existente entre el ser y su aspecto exterior o la apariencia.',
    },
    {
      termino: '<em>Outfit</em>',
      significado:
        'conjunto de prendas combinadas de una manera determinada. Designa un atuendo concreto, pero su uso se ha popularizado hasta el punto de emplearse como sinónimo del término genérico conjunto.',
    },
    {
      termino: 'Corte asimétrico',
      significado:
        'estructura de las prendas, más cortas por delante que por detrás, con la que se consigue el llamado «efecto cola» en faldas y vestidos.',
    },
    {
      termino: 'Tipología',
      significado:
        'estudio de los tipos o modelos que se usan para clasificar en diversas ciencias o disciplinas.',
    },
    {
      termino: '<em>T-shirt</em>',
      significado:
        'prenda de vestir ligera, generalmente de algodón, con mangas cortas y cuello redondo, usada como ropa informal, conocida también como camiseta.',
    },
    {
      termino: 'Estándar',
      significado:
        'que sirve de patrón, modelo o punto de referencia para medir o valorar cosas de la misma especie.',
    },
    {
      termino: 'Talla',
      significado:
        'expresión normalizada que permite identificar a las personas para el uso de prendas de vestir.',
    },
    {
      termino: 'Trazo de un plano',
      significado:
        'en lo referente al oficio del patronista, el trazo de un plano hace referencia a la estructura de los patrones básicos que posteriormente se convertirán en moldes.',
    },
    {
      termino: 'Patronaje',
      significado:
        'oficio dedicado a la creación de patrones en la línea de vestuario que permitan la construcción de prendas de vestir.',
    },
    {
      termino: 'Molde',
      significado:
        'término usado en el patronaje para señalar que después del trazo de planos se llegan a abstraer los elementos que permiten proceder con el corte del textil.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aldrich, W. (2009). Metric pattern cutting for children’s wear and babywear: From birth to 14 years (4th ed.). Wiley-Blackwell.',
      link: '',
    },
    {
      referencia:
        'Bunka Fashion College. (2007). Children clothes (Bunka Fashion Series: Garment Design Textbook 8). Bunka Publishing Bureau.',
      link: '',
    },
    {
      referencia:
        'Cooklin, G. (1991). Pattern grading for children’s clothes: The technology of sizing. Wiley-Blackwell / BSP Professional Books.',
      link: '',
    },
    {
      referencia:
        'Crim, C. H. (2014). Pattern making for kids’ clothes: All you need to know about designing, adapting, and customizing sewing patterns for children’s clothing. Barron’s.',
      link: '',
    },
    {
      referencia:
        'Crim, C. H. (2015). Patronaje de moda para niños: Todo lo que necesita saber para diseñar, adaptar y personalizar los patrones de costura. Promopress.',
      link: '',
    },
    {
      referencia:
        'Donnanno, A. (2014). Técnicas de patronaje de prendas infantiles de moda. Promopress.',
      link: '',
    },
    {
      referencia:
        'Donnanno, A. (2021). Fashion patternmaking techniques for children’s clothing: Dresses, shirts, bodysuits, trousers, jackets and coats. Hoaki Books.',
      link: '',
    },
    {
      referencia: 'Ebele, L. (2021). Modelagem infantil: Modele. Amoler.',
      link: '',
    },
    {
      referencia:
        'Morgan, P. (1973). Designing and pattern cutting for children’s clothes. B. T. Batsford.',
      link: '',
    },
    {
      referencia:
        'Mukai, M. (2018). Modelagem prática especial infantil. (Autoed.).',
      link: '',
    },
    {
      referencia:
        'Rohr, M. (1963). Pattern drafting: Children’s garment design. M. Rohr.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lillibeth Liseth Celis Pardo',
          cargo: 'Desarrolladora <em>full stack</em> Junior',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
