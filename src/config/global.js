export default {
  global: {
    componenteFormativo: 'Administración financiera y ejecución presupuestal',
    descripcionCurso:
      'En las organizaciones todo es susceptible de ser medido y evaluado, y cuando esto se realiza en cada hallazgo encontrado hay una oportunidad de mejora o una situación que conlleva a transformaciones que hacen parte del crecimiento empresarial, y por ende, a una acertada toma de decisiones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-0', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
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
        titulo: 'Planeación financiera',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Estructura',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Proyecciones',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión financiera',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Objetivos y funciones',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Políticas de gestión financiera',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Presupuesto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Evaluación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Ajustes',
            hash: 't_3_3',
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
        download: 'downloads/CFA_07_123500.zip',
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
      tema: 'Planeación financiera',
      referencia:
        'Durbán, S., Irimia, A., Oliver, M. & Palacín, M. (2016). <em>Planificación financiera en la práctica empresarial</em> (2da ed.). Ediciones Pirámide.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/49173',
    },
    {
      tema: 'Políticas de gestión financiera',
      referencia:
        'Indoamérica. (s.f.). <em>Política de gestión financiera.</em> Indoamérica.',
      tipo: 'PDF',
      link:
        'https://www.indoamerica.edu.co/documentos/politica_gestion_financiera.pdf',
    },
    {
      tema: 'Presupuesto',
      referencia:
        'Polo. B. (2017). <em>Manual de presupuestos teórico y práctico.</em> Grupo Editorial Nueva Legislación.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/68879',
    },
  ],
  glosario: [
    {
      termino: 'Administración',
      significado:
        'Coordinación de diversos recursos en una organización para alcanzar los objetivos.',
    },
    {
      termino: 'Estados financieros',
      significado:
        'Informes cuantitativos que consolidan información referente a la gestión de recursos a través de la operación de la empresa.',
    },
    {
      termino: 'Finanzas',
      significado:
        'Área de la Economía que estudia la gestión del dinero y el capital, es decir, los recursos financieros. Estudia la obtención de esos recursos como su financiación, así como la inversión y la forma de producir riqueza con el capital de los accionistas o inversionistas.',
    },
    {
      termino: 'Gestión financiera',
      significado:
        'Es la actividad que se realiza en una organización y que se encarga de planificar, organizar, dirigir, controlar, monitorear y coordinar todo el manejo de los recursos financieros, con el fin de generar mayores beneficios y/o resultados.',
    },
    {
      termino: 'Planeación',
      significado:
        'Diseño o concepción de un futuro desde la organización dando fundamento a la misma.',
    },
    {
      termino: 'Política',
      significado:
        'Conjunto de decisiones y medidas tomadas por determinados grupos sociales.',
    },
    {
      termino: 'Presupuesto',
      significado:
        'Herramienta de las finanzas que permite calcular la proyección de ingresos y gastos de una organización en un tiempo determinado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Banco de la República. (s.f.). <em>Indicador bancario de referencia (IBR)</em>. Banrep.',
      link:
        'https://www.banrep.gov.co/es/estadisticas/indicador-bancario-referencia-ibr',
    },
    {
      referencia:
        'Dubarn, S., Irimia, A., Oliver, M. & Palacín, M. (2016). <em>Planificación financiera en la práctica empresarial.</em> (2a Ed.). Ediciones Pirámide.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/49173',
    },
    {
      referencia:
        'Morales, A y Morales, J. (2014). <em>Planeación financiera.</em> Grupo Editorial Patria. ',
      link:
        'http://www.paginaspersonales.unam.mx/app/webroot/files/1613/Asignaturas/1819/Archivo2.4240.pdf',
    },
    {
      referencia:
        'Pacheco, C. (2020). <em>Presupuestos un enfoque gerencial.</em> Editorial Instituto Mexicano de Contadores Públicos.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/151225',
    },
    {
      referencia:
        'Terrazas, R. (2009). Modelo de gestión financiera para una organización. <em>Perspectivas</em>, 23, p. 55-72.',
      link: 'https://www.redalyc.org/pdf/4259/425942159005.pdf',
    },
    {
      referencia:
        'Valle, A. (2020) La planificación financiera es una herramienta clave para el logro de objetivos empresariales. <em>Revista Universidad y Sociedad</em>, 12(3), p. 160-166.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesoría Metodológica y Pedagógica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Experta Temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Diseño y Evaluación Instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Asesoría Metodológica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Corrección de Estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluación Instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Producción Audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Producción Audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseño Web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluación de Contenidos Inclusivos y Accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación de Recursos Educativos Digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
