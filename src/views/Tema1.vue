<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Planeación financiera

    p.mb-5(data-aos="fade-right") Es la herramienta que permite ejecutar una excelente gestión gracias a que toma el control de la situación de la empresa, con el fin de poner en marcha estrategias requeridas para corregir desviaciones posibles o errores, por lo que no es suficiente que la empresa realice esfuerzos constantes en su actividad económica. Se hace indispensable tener el control en todos los ámbitos, no importa su número, en los que se desempeña, siendo tan flexible que es útil en decisiones como asignación de activos, asistencia para preparar una declaración de política de inversión, definición de la política de reparto de dividendos, evaluación del desempeño de la inversión, medición del impacto de la administración de activos, prevención de riesgos, gestión de inversiones y preparación de los impuestos, así como el cumplimiento de acuerdos en cuanto a compra, venta y sus caminos alternos.
    
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-10.col-12(data-aos="zoom-in-down")
        .cajon.color-secundario.p-3.p-md-4
          p.mb-0 Debido a que la empresa es una unidad productiva que se espera arroje resultados convenientes y rentables a sus inversionistas, es necesario que esta se encuentre preparada en todos sus frentes de acción para obtener resultados óptimos, con el fin de atender las demandas de información de los diferentes grupos de interés como lo son accionistas, acreedores, proveedores y colaboradores, quienes por su injerencia directa o indirecta en la organización velan porque la empresa sirva a sus intereses particulares, lo cual hace imprescindible la planificación financiera adecuada y pertinente. Esta tiene como función principal analizar su estado actual y fijar directrices que se llevan a cabo mediante objetivos financieros relacionados con sus metas.
      
    .row.justify-content-center.align-items-center(data-aos="zoom-in-down")
      .col-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img_1.png')})`}"
          ) 
          .bloque-texto-g__texto.p-4
            p.mb-0 Las organizaciones deben realizar una permanente y oportuna planificación financiera con el fin de optimizar procesos, prosperar las finanzas y determinar qué área de la empresa tiene debilidades en su operación y cuáles necesitan un apoyo especial para mejorar su desempeño y alcanzar los objetivos. Lo anterior se convierte en un mecanismo eficiente y de gran impacto en las empresas, debido a su flexibilidad tiene el alcance de adaptarse a las características de la empresa, generando beneficios sostenibles en el tiempo.

    p.mb-5(data-aos="fade-right") Con el fin de propiciar el escenario de la planificación financiera se presentan a continuación definiciones de autores como Valle (2020) para contar con distintos puntos de vista y así proponer al final un concepto integrador, que puede ser luego deconstruido para la proposición de uno mucho más pertinente.

    .row.justify-content-center.align-items-center(data-aos="zoom-in-down")
      .col-12.col-md-10.col-lg-8.d-none.d-sm-none.d-md-block
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img_2.png', alt='')

          .tarjeta.color-primario.p-3(x="33%" y="53%" numero="+")
            .h5.mb-2 Gestión de recursos
            p Apaza (2017) define la planificación financiera como uno de los agentes imprescindibles para lograr una correcta gestión de recursos financieros, lo que hace factible la fundamentación de diferentes estrategias con el fin de cumplir los objetivos y metas establecidas bajo criterios de control necesarios para su cumplimiento (Valle, 2020).
          .tarjeta.color-primario.p-3(x="50%" y="74%" numero="+")
            .h5.mb-2 Incremento del capital
            p Guajardo (2014) (citado en Valle, 2020) el fin esencial de una planeación financiera es incrementar el capital de los socios, de los accionistas o propietarios en las fuentes propiciadoras de mayor valor o riqueza. 
            P Esto justifica por qué los empresarios orientados a su actividad económica están trazando de manera permanente estrategias que promuevan la sostenibilidad de su organización incrementando la rentabilidad, lo que redunda en el bienestar de los colaboradores y de las diversas partes interesadas.
          .tarjeta.color-primario.p-3(x="30%" y="80%" numero="+")
            .h5.mb-2 Aumento de la producción
            p Navarro (2018) expresa que una optimización o eficiente administración de los recursos de capital de trabajo y financieros, puede generar un aumento en la producción y un mayor valor agregado, lo que propicia el incremento de las utilidades y rentabilidad económica; razón que hace de las finanzas la principal herramienta para una pertinente dirección empresarial apoyada en la aplicación eficaz y eficiente de nuevas técnicas de análisis financiero, que permitan obtener una mayor productividad económica, así como el control y disminución de los costos y gastos, lo cual se hace posible mediante la implementación y uso de los presupuestos. 
            P A partir de allí, la planificación financiera asume un rol estratégico en el crecimiento y desempeño organizacional, gracias a que no se concentra en predecir eventos sino que se anticipa a un futuro, lo que facilita la identificación de desviaciones o errores que hacen necesario la puesta en marcha de mecanismos adecuados, con el fin de corregir errores de la gestión y solucionar las desviaciones, si es posible, o en caso extremo, contrarrestar los efectos para continuar direccionados hacia el logro de los objetivos planteados (Valle, 2020).
          .tarjeta.color-primario.p-3(x="50%" y="92%" numero="+")
            .h5.mb-2 Resultados financieros
            p Calopa (2017) (citado en Valle, 2020) refiere a que  existen la planificación financiera y estratégica creadas para promover el exitoso y sostenible desempeño organizacional; sin embargo, la mayoría de propietarios y administradores se enfocan en los resultados financieros, es decir, hay rentabilidad o no, pero se deja de lado la función esencial que tiene este mecanismo y es la organización; a partir de la cual se genera mayor impacto en la toma de decisiones desde la óptica financiera, gracias a que es allí donde se prevén los riesgos. Por ello, es considerada uno de los pilares de las entidades modernas, debido a que se enfoca en diferentes fuentes de financiación, prevé sucesos y anticipadamente prospecta el futuro a través de los presupuestos.

      .col-12.d-block.d-md-none
        figure
          img(src='@/assets/curso/temas/tema1/img_2b.svg', alt='')           

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-10.col-12(data-aos="zoom-in-down")
        .cajon.color-primario.p-3.p-md-4
          p.mb-0 Se considera la planificación financiera como una herramienta esencial en la administración de toda organización, donde se construyen escenarios presentes y futuros basados en datos de resultados anteriores facilitando su elaboración, la cual tiene como fin esencial, generar excelentes resultados financieros y aportar a la toma de decisiones desde su mayor influencia que es la organización; desde allí se disponen los recursos para que generen una mayor productividad y mayor valor agregado, redundando en los resultados de rentabilidad, permitiendo prever riesgos y anticiparse a un futuro siempre, buscando la sostenibilidad a través de la cual se impacta todos sus grupos de interés haciendo una consolidación progresiva de futuros eventos, partiendo de la realidad y basados en los resultados del pasado.

    .titulo-quinto.color-primario(data-aos="fade-down")
      h4.color-primario A continuación se presenta el proceso de planificación financiera:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 2. </b> <i>Proceso de planificación financiera</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema1/fig_2a.svg', alt='Esquema que relaciona el proceso de la planificación financiera, el cual parte de nuevas estrategias que tienen una situación actual y situaciones futuras deseadas y no deseadas.')  
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig_2b.svg', alt='Esquema que relaciona el proceso de la planificación financiera, el cual parte de nuevas estrategias que tienen una situación actual y situaciones futuras deseadas y no deseadas.') 
          figcaption Nota. Adaptado de Terrazas (2009).
    
    .row.align-items-center.justify-content-center.mb-4
      .col-md-7(data-aos="fade-right") 
        p.mb-2 En el proceso de la planificación financiera es fundamental el control y administración de los bienes de una organización. De esta manera, al poner en marcha un proceso pertinente que aporte a la eficiencia organizacional será posible alcanzar el escenario deseado o el futuro que la empresa espera lograr mediante la aplicación de prácticas operacionales que conduzcan a la productividad, es decir, a mayor número de unidades producidas, mayor valor agregado, generando así la ventaja que producirá finalmente un beneficio económico aportando a la rentabilidad.
        p.mb-0 Para cumplir esos objetivos es determinante controlar dos factores esenciales en el desempeño organizacional y el logro de los objetivos, los costos y los tiempos o plazos establecidos. Ahora bien, por ser un proceso, la planificación financiera se lleva a través de unas etapas que se definen de acuerdo con la realidad de la empresa y los objetivos planteados, criterios indispensables para la definición del proceso de ejecución. De acuerdo con lo anterior y según la trayectoria de este mecanismo se pueden definir las siguientes etapas:
      .col-md-5(data-aos="fade-left") 
        img.mt-3(src='@/assets/curso/temas/tema1/img_3.png').mb-3

    .row.justify-content-center.align-items-center(data-aos="zoom-in-down")
      .col-12
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img_4.svg', alt='')

          .p-3.is-modal(x="25.5%" y="68%" numero="+" @click="modal1 = true; content = 1")
          .p-3.is-modal(x="32.5%" y="44.5%" numero="+" @click="modal1 = true; content = 2")
          .p-3.is-modal(x="47%" y="44.5%" numero="+" @click="modal1 = true; content = 3")
          .p-3.is-modal(x="53.5%" y="68%" numero="+" @click="modal1 = true; content = 4")
          .tarjeta.color-primario.p-3(x="58%" y="10%" numero="+")
            .h5.mb-2 Estrategias de producto
            p Las previsiones de producto son las más inciertas y deben definirse con mayor cuidado por su complejidad para determinarlas y su incidencia en los resultados de la organización. En este punto se deben tener en cuenta:
            ul.lista-ul.mb-3.ms-3
              li.mb-0
                i.lista-ul__vineta
                | Productos para elaborar.
              li.mb-0
                i.lista-ul__vineta
                | Precio de venta.
              li.mb-0
                i.lista-ul__vineta
                | Productos para eliminar.
              li.mb-0
                i.lista-ul__vineta
                | Costo de producción.
              li.mb-0
                i.lista-ul__vineta
                | Demanda.
              li.mb-0
                i.lista-ul__vineta
                | Costo y cantidades de futuras producciones.
          .tarjeta.color-primario.p-3(x="64%" y="16%" numero="+")
            .h5.mb-2 Estrategia de capital
            p Los métodos utilizados para evaluar el beneficio de una inversión son el costo de capital y la TIR; a partir de estos criterios se define cuáles son las oportunidades de inversión y de financiación más beneficiosas o menos costosas. 
            p En el caso de que la empresa ya cuente con unas decisiones predeterminadas se debe evaluar el impacto o beneficio de las mismas y buscar entre la diversidad de oportunidades que ofrece el mercado la alternativa más apropiada para la organización, de acuerdo con su efecto en el corto y mediano plazo y su impacto en la tesorería o su flujo de caja. Entre ellas se encuentran:
            ul.lista-ul.mb-3.ms-3
              li.mb-0
                i.lista-ul__vineta
                | Políticas de inversión: previsión sobre inversión define la alternativa, la rentabilidad, el riesgo y la liquidez.
              li.mb-0
                i.lista-ul__vineta
                | Políticas de financiación: previsión sobre fuente financiera u oportunidades de captar recursos como alternativas, costos, exigibilidad y riesgo.
          .tarjeta.color-primario.p-3(x="64%" y="26.5%" numero="+")
            .h5.mb-2 Estrategias financieras
            p Encargada de definir el uso o distribución de los recursos generados por la organización, siendo preponderante las amortizaciones, la reserva legal y dividendos por pagar, los cuales impactan en la generación de beneficios o utilidad, porque aunque también se deben considerar los costos, estos son fijos y los impuestos se derivan de esta suma algebraica. 
          .tarjeta.color-primario.p-3(x="64%" y="38.5%" numero="+")
            .h5.mb-2 Estrategias a corto plazo
            p Definidas con el fin de atender distintos asuntos relacionados con activos y disponible, es decir, recursos líquidos o de corto plazo como:
            ul.lista-ul.mb-3.ms-3
              li.mb-0
                i.lista-ul__vineta
                | Política de clientes.
              li.mb-0
                i.lista-ul__vineta
                | Política de inventario.
              li.mb-0
                i.lista-ul__vineta
                | Política de tesorería.
              li.mb-0
                i.lista-ul__vineta
                | Política de seguridad.
              li.mb-0
                i.lista-ul__vineta
                | Política de proveedores.
              li.mb-0
                i.lista-ul__vineta
                | Política de endeudamiento.
          .tarjeta.color-primario.p-3(x="74%" y="60.5%" numero="+")
            .h5.mb-2 Estrategia de producto
            p Se deberá quedar la que aporte mayor flujo y por ende, a la rentabilidad de la organización.
          .tarjeta.color-primario.p-3(x="74%" y="71%" numero="+")
            .h5.mb-2 Estrategia de capital
            p Se recogerán las estrategias de largo plazo fundamentales para elaborar el presupuesto de capital donde están la política de inversión, de financiación y de activos permanentes.
          .tarjeta.color-primario.p-3(x="74%" y="82.5%" numero="+")
            .h5.mb-2 Estrategia financiera
            p Se debe seleccionar preferiblemente un conjunto de dos de entre las políticas sobre amortizaciones, dividendos y reservas.
          .tarjeta.color-primario.p-3(x="68%" y="90%" numero="+")
            .h5.mb-2 Estrategia a corto plazo
            p Define una política por cada rubro correspondiente o que integran el activo circulante, la cual aportará a la elaboración del presupuesto de necesidades netas de capital corriente, así:
            ul.lista-ul.mb-3.ms-3
              li.mb-0
                i.lista-ul__vineta
                | Política de #[em stock] o inventarios.
              li.mb-0
                i.lista-ul__vineta
                | Política de clientes.
              li.mb-0
                i.lista-ul__vineta
                | Política de tesorería.
              li.mb-0
                i.lista-ul__vineta
                | Política de proveedores.
              li.mb-0
                i.lista-ul__vineta
                | Política de financiación.
            p La consolidación de las anteriores políticas de manera detallada indica el plan financiero y su estimación cuantificada respecto al presupuesto. Por tanto, es necesaria la elaboración de los siguientes instrumentos:
            ul.lista-ul.mb-3.ms-3
              li.mb-0
                i.lista-ul__vineta
                | Flujo de caja.
              li.mb-0
                i.lista-ul__vineta
                | Necesidades netas de capital corriente (NNCC).
              li.mb-0
                i.lista-ul__vineta
                | Presupuesto de capital.
              li.mb-0
                i.lista-ul__vineta
                | Presupuesto de tesorería.
              li.mb-0
                i.lista-ul__vineta
                | Estados de la situación financiera previsional.
        
    .row.justify-content-center
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/anexo_EtapasPlanificacionFinanciera.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Descargar. Etapas de la planificación financiera

    .container.bg-white.py-2.fondo-1
      .row.align-items-center.justify-content-center.mb-5
        .col-12
          p.mb-4(data-aos="fade-right") En las estrategias financieras las políticas a considerar son:
        .col-lg-10.col-12
          .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
            p.titulo.pb-0.mb-0 <b>Tabla 1. </b> <i>Políticas de las estrategias financieras</i>
          .tabla-c.color-acento-contenido.mb-5(data-aos="zoom-in-right")
            table
              caption(style="display:none")
              tr
                th Política de amortizaciones
                td(style="width:40%") Establece el método para amortizar los activos de la empresa.
                td(style="width:40%") CAC = CAE cuando la empresa continúe su política de amortización de activos por el método de amortización contable (CAC) deberá ajustarlo a la verdadera depreciación CAE.
              tr
                th Política de dividendos
                td Define la forma de recompensar a los accionistas.
                td CAC < CAE cuando la empresa continúe con una política de rentabilidad por medio de dividendos y utiliza las amortizaciones contables para favorecer a los accionistas, descapitalizando.
              tr
                th Política de reservas
                td Determina el uso de estos recursos generados a utilizar para la financiación de inversiones.
                td CAC > CAE si la empresa continúa su política de crecimiento mediante amortizaciones contables, favoreciendo su crecimiento mediante la autofinanciación.
              
    .tarjeta.color-secundario.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/componentes/ico-export-1.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Secuencia del proceso de planificación financiera basado en estrategias
              p En el siguiente gráfico se evidencia cómo cada estrategia planteada en la planificación financiera tiene un resultado, producto o impacto en los documentos que permiten planificar de forma estructurada los diferentes componentes o puntos críticos en cuanto a finanzas en la organización.  
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/anexo_EstrategiasPlanificacion.pdf')" target="_blank")
                span Ver gráfico
                i.fas.fa-file-download

    p.mb-5(data-aos="fade-right") La clasificación de la planeación financiera se remonta al tema de la administración y su definición, la cual se considera como una ciencia, una técnica y un arte.

    .row.justify-content-center.align-items-center(data-aos="zoom-in-down")
      .col-12.col-md-11.col-lg-10.d-none.d-sm-none.d-md-block
        ImagenInfograficaB.color-acento-botones.ismodal2.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img_5.svg', alt='')
          div(x="37%" y="65%" numero="+" tooltip="Clic para abrir recurso")
            p #[b Ciencia]
            p Una ciencia debido a que desde su aparición la administración ha evolucionado generando nuevos conocimientos y permitiendo el mejoramiento organizacional mediante su implementación a través del liderazgo, el direccionamiento estratégico, la coordinación de recursos, la división del trabajo, la especialización de las áreas o departamentos, la asignación de funciones, responsabilidad y autoridad de los puestos de trabajo.
          div(x="50%" y="37%" numero="+" tooltip="Clic para abrir recurso")
            p #[b Técnica]
            p Es considerada una técnica porque se implementa mediante dos fases administrativas: mecánica o estructural y dinámica u operacional. Haga clic en cada una de sus etapas. 
            .row.justify-content-center.align-items-center
              .col-12.col-lg-8
                ImagenInfografica.color-acento-botones.mb-5
                  template(v-slot:imagen)
                    figure
                      img(src='@/assets/curso/temas/tema1/img_6.svg', alt='')
                  .tarjeta.color-primario.p-3(x="92%" y="29%" numero="+")
                    .h5.mb-2 Planeación
                    p La fase mecánica o estructural corresponde al diseño de la organización; cómo se concibe desde la idea que tienen sus dueños y cómo espera que sea, para lo cual la #[b planeación] se convierte en la herramienta que permite diseñar desde lo general a lo particular, definiendo objetivos estratégicos u organizacionales hasta llegar a definir los objetivos de cada puesto de trabajo.
                  .tarjeta.color-primario.p-3(x="92%" y="47%" numero="+")
                    .h5.mb-2 Organización
                    p Asimismo, la #[b organización] pertenece a esta fase y toma la información consignada en la etapa de planeación y la aterriza a la realidad a través de procesos y procedimientos. Define los recursos requeridos para lograr los objetivos y diseña una estructura organizacional que comunica la jerarquía existente: el nivel de responsabilidad y autoridad de cada cargo, los cuales siempre serán el nivel estratégico o de la gerencia; el nivel táctico correspondiente a las áreas o departamentos; y nivel operativo donde se encuentran los responsables de llevar a cabo las actividades de la empresa.
                  .tarjeta.color-primario.p-3(x="92%" y="64%" numero="+")
                    .h5.mb-2 Dirección
                    p En la fase dinámica se encuentra la #[b dirección] donde se pone en marcha todo lo diseñado en la planeación, junto con los recursos dispuestos en la organización para llevarlos a cabo en la realidad, lo que permite ejecutar o poner en marcha procesos, procedimientos, instructivos y actividades, con el fin de trabajar de manera coordinada en pro del logro de los objetivos.
                  .tarjeta.color-primario.p-3(x="92%" y="82%" numero="+")
                    .h5.mb-2 Control
                    p Y por último, en esta fase se encuentra la etapa de #[b control] donde se consolidan resultados y se evalúan si estos están acordes con lo planeado. De no ser así, se detectan desviaciones y sus causas, así como imprevistos para retroalimentar el proceso administrativo y posteriormente, realizar una actualización a la planeación y a las demás fases, de ser necesario, cumpliendo con su esencia de ser un proceso sistémico que se encuentra en constante renovación.
          div(x="63%" y="65%" numero="+" tooltip="Clic para abrir recurso")
            p #[b Arte]
            p La administración es considerada un arte, pues es fundamental también reconocer que depende de cada administrador, el sello que le imprime a su gestión y dirección en la empresa. Esto obedece a que cada individuo tiene una personalidad definida y de esto depende que la administración a pesar de ser una ciencia con un planteamiento claro, sea percibida desde diferentes enfoques o maneras.

      .col-12.d-block.d-md-none
        .row 
          .col-12.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img_7.svg', alt='')
          .col-12
            .tarjeta.color-primario.p-3.mb-4
              p #[b Ciencia]
              p Una ciencia debido a que desde su aparición la administración ha evolucionado generando nuevos conocimientos y permitiendo el mejoramiento organizacional mediante su implementación a través del liderazgo, el direccionamiento estratégico, la coordinación de recursos, la división del trabajo, la especialización de las áreas o departamentos, la asignación de funciones, responsabilidad y autoridad de los puestos de trabajo.
              div(x="37%" y="65%" numero="+" tooltip="Clic para abrir recurso")
            .tarjeta.color-primario.p-3.mb-4
              p #[b Técnica]
              p Es considerada una técnica porque se implementa mediante dos fases administrativas: mecánica o estructural y dinámica u operacional. A continuación, se describen cada una de sus etapas. 
            figure.mb-3
              img(src='@/assets/curso/temas/tema1/img_8.svg', alt='')
            .tarjeta.color-terciario.p-3.mb-3
              .h5.mb-2 Planeación
              p La fase mecánica o estructural corresponde al diseño de la organización; cómo se concibe desde la idea que tienen sus dueños y cómo espera que sea, para lo cual la #[b planeación] se convierte en la herramienta que permite diseñar desde lo general a lo particular, definiendo objetivos estratégicos u organizacionales hasta llegar a definir los objetivos de cada puesto de trabajo.
            .tarjeta.color-terciario.p-3.mb-3
              .h5.mb-2 Organización
              p Asimismo, la #[b organización] pertenece a esta fase y toma la información consignada en la etapa de planeación y la aterriza a la realidad a través de procesos y procedimientos. Define los recursos requeridos para lograr los objetivos y diseña una estructura organizacional que comunica la jerarquía existente: el nivel de responsabilidad y autoridad de cada cargo, los cuales siempre serán el nivel estratégico o de la gerencia; el nivel táctico correspondiente a las áreas o departamentos; y nivel operativo donde se encuentran los responsables de llevar a cabo las actividades de la empresa.
            .tarjeta.color-terciario.p-3.mb-3
              .h5.mb-2 Dirección
              p En la fase dinámica se encuentra la #[b dirección] donde se pone en marcha todo lo diseñado en la planeación, junto con los recursos dispuestos en la organización para llevarlos a cabo en la realidad, lo que permite ejecutar o poner en marcha procesos, procedimientos, instructivos y actividades, con el fin de trabajar de manera coordinada en pro del logro de los objetivos.
            .tarjeta.color-terciario.p-3.mb-4
              .h5.mb-2 Control
              p Y por último, en esta fase se encuentra la etapa de #[b control] donde se consolidan resultados y se evalúan si estos están acordes con lo planeado. De no ser así, se detectan desviaciones y sus causas, así como imprevistos para retroalimentar el proceso administrativo y posteriormente, realizar una actualización a la planeación y a las demás fases, de ser necesario, cumpliendo con su esencia de ser un proceso sistémico que se encuentra en constante renovación.
            .tarjeta.color-primario.p-3.mb-4
              p #[b Arte]
              p La administración es considerada un arte, pues es fundamental también reconocer que depende de cada administrador, el sello que le imprime a su gestión y dirección en la empresa. Esto obedece a que cada individuo tiene una personalidad definida y de esto depende que la administración a pesar de ser una ciencia con un planteamiento claro, sea percibida desde diferentes enfoques o maneras.
    
    .row.align-items-center.justify-content-center.mb-4
      .col-md-6.col-12(data-aos="fade-right") 
        img(src='@/assets/curso/temas/tema1/img_9.png').mb-3
      .col-md-6.col-12(data-aos="fade-left") 
        p.mb-3 Como es necesario mencionar la planeación financiera, luego de esta exposición general de la administración y el proceso administrativo se tratará con mayor profundidad sobre su concepto, para luego realizar la analogía con la planificación financiera, de manera que se conozca el fundamento de esta última y su clasificación.
        p.mb-0 La planeación consiste en establecer los objetivos que se desean alcanzar, después de hacer un exhaustivo análisis de la compañía y su interacción con el entorno al que pertenece donde se definen los caminos o estrategias y tácticas para su logro. A continuación se presenta el proceso de planeación.

    figure.mb-5(data-aos="fade-down-left")
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/bYIFsW74Gtg" title="Proceso de planeación" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      figcaption Proceso de planeación
    
    p.mb-5(data-aos="fade-right") De acuerdo con lo anterior, el siguiente recurso presenta la relación existente entre la planeación estratégica y la planeación financiera, permitiendo definir que a partir de la definición estratégica de la organización se realiza el análisis del pasado, presente y futuro y de este último, se producen las previsiones en estados financieros como lo son el estado de situación financiera, el estado de resultados y el flujo de efectivo o de caja.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12.mb-4
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 3. </b> <i>Relación entre la planeación estratégica y la planeación financiera</i>
        figure
          img(src='@/assets/curso/temas/tema1/fig_3.svg', alt='Gráfico que hace mención de la relación entre la planeación estratégica y la planeación financiera, destacando que de la parte estratégica se hacen análisis para enfrentar posibles problemas y se llevan a cabo planes que ayuden a enfrentar improvistos; y dentro de la parte financiera se analiza el desempeño pasado, actual y futuro, con proyecciones a corto y largo plazo.')  
          figcaption Nota. Adaptado de Morales y Morales (2014).
      .col-12.d-block.d-md-none
        a.anexo.mb-4(:href="obtenerLink('/downloads/anexo_PlanificacionEstrategicayFinanciera.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Descargar. Relación entre la planeación estratégica y la planeación financiera
      .col-12
        .cajon.color-primario.p-4
          p.mb-0 Conociendo la capacidad de endeudamiento y el interés de inversión, se hacen proyecciones a corto plazo como el presupuesto de flujo de efectivo y de largo plazo como el presupuesto de capital, por lo cual, se puede concluir que los tipos de planificación financiera son de corto y largo plazo, pero también se puede definir que la planificación financiera se ajusta a los tipos de planeación que son estratégica, táctica y operativa.

    Separador
    #t_1_1.titulo-segundo.color-primario(data-aos="fade-right")
      h2 1.1 Estructura
    
    p.mb-5(data-aos="fade-right") La estructura financiera de una organización, relacionada con la planificación financiera, se refiere a un documento que consolida la información acerca de la manera en que se financia por medio de sus estados financieros. A continuación, se presentan los cinco estados que representan esta estructura:

    .row.justify-content-center.align-items-center
      .col-12.col-md-10.d-none.d-sm-none.d-md-block(data-aos="zoom-in-down")
        ImagenInfografica.color-acento-botones.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img_10.png', alt='')
          .tarjeta.color-primario.p-3(x="58%" y="73%" numero="+")
            .h5.mb-2 Estado de la situación financiera de la empresa
            p Estado financiero que se consolida en la estructura financiera de la organización, donde en el lado izquierdo se encuentran los rubros correspondientes a los activos y en el lado derecho se muestra cómo han sido financiados, dejando claro si ha sido a través de endeudamiento o con recursos propios.
          .tarjeta.color-primario.p-3(x="25%" y="65%" numero="+")
            .h5.mb-2 Estado de resultados
            p Mide los beneficios obtenidos luego de consolidar ingresos, costos y gastos de una actividad económica en un periodo de tiempo determinado.
          .tarjeta.color-primario.p-3(x="49%" y="40%" numero="+")
            .h5.mb-2 Flujos de efectivo
            p Está constituido por tres categorías de actividades: operativas, de financiación y de capital.
          .tarjeta.color-primario.p-3(x="72%" y="34%" numero="+")
            .h5.mb-2 Estructura de capital
            p Se define basado en el costo de capital del proyecto o alternativa de inversión, la cual debe necesariamente generar un VPN que sea atractivo a fin de que los proyectos generen un mayor valor a la empresa; entre más alternativas existan con estos resultados, la empresa se encuentra en el camino de crecimiento y generación de valor EVA, produciendo riqueza.
          .tarjeta.color-primario.p-3(x="83%" y="63%" numero="+")
            .h5.mb-2 Otras variables
            p Siendo conscientes de que la empresa toma decisiones de inversión en otros aspectos que garantizan su operación, se hace necesario que se estudie el punto de equilibrio, análisis de costos, riesgos y rendimientos, aspectos cualitativos como el capital intelectual, el #[em superávit] y el medio ambiente.
      .col-12.d-block.d-md-none
        .row 
          .col-12.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img_11.png', alt='')
          .col-12
            .tarjeta.color-primario.p-3.mb-4(data-aos="zoom-in-down")
              .h5.mb-2 Estado de la situación financiera de la empresa
              p Estado financiero que se consolida en la estructura financiera de la organización, donde en el lado izquierdo se encuentran los rubros correspondientes a los activos y en el lado derecho se muestra cómo han sido financiados, dejando claro si ha sido a través de endeudamiento o con recursos propios.
            .tarjeta.color-primario.p-3.mb-4(data-aos="zoom-in-down")
              .h5.mb-2 Estado de resultados
              p Mide los beneficios obtenidos luego de consolidar ingresos, costos y gastos de una actividad económica en un periodo de tiempo determinado.
            .tarjeta.color-primario.p-3.mb-4(data-aos="zoom-in-down")
              .h5.mb-2 Flujos de efectivo
              p Está constituido por tres categorías de actividades operativas, de financiación y de capital.
            .tarjeta.color-primario.p-3.mb-4(data-aos="zoom-in-down")
              .h5.mb-2 Estructura de capital
              p Se define basado en el costo de capital del proyecto o alternativa de inversión, la cual debe necesariamente generar un VPN que sea atractivo a fin de que los proyectos generen un mayor valor a la empresa; entre más alternativas existan con estos resultados, la empresa se encuentra en el camino de crecimiento y generación de valor EVA, produciendo riqueza.
            .tarjeta.color-primario.p-3.mb-4(data-aos="zoom-in-down")
              .h5.mb-2 Otras variables
              p Siendo conscientes de que la empresa toma decisiones de inversión en otros aspectos que garantizan su operación, se hace necesario que se estudie el punto de equilibrio, análisis de costos, riesgos y rendimientos, aspectos cualitativos como el capital intelectual, el #[em superávit] y el medio ambiente.
      
      .col-12.col-md-10(data-aos="zoom-in-down")
        .cajon.color-primario.p-4
          p.mb-0 Los estados definen la estructura del capital y cómo la empresa acude a diferentes estrategias para mantener el equilibrio entre las entradas o ingresos de dinero y las salidas o erogaciones del mismo, con el fin de mantener la liquidez necesaria, la financiación de sus activos y un nivel moderado y manejable de endeudamiento.

    Separador
    #t_1_2.titulo-segundo.color-primario(data-aos="fade-right")
      h2 1.2 Proyecciones

    .row.align-items-center.justify-content-center.mb-4
      .col-md-7(data-aos="fade-right") 
        p Son útiles para determinar el rumbo de la organización desde los datos cuantitativos, ya que realizarla no es producto de la intuición sino un proceso estructurado que parte de la recolección y análisis de información, para luego definir la posición real de la empresa en el sector y evaluar si lo actuado corresponde a lo que se diseñó desde la planeación, y si esta misma se ve reflejada en los informes financieros, o si definitivamente la empresa requiere definir un nuevo norte para luego calcular los recursos necesarios.
        p Las proyecciones son también conocidas como un pronóstico financiero que facilita la definición previa de la factibilidad de realizar programas. Es además un instrumento indispensable de control, pues genera un escenario de confianza entre los acreedores, identifica o determina la existencia de excedentes o faltantes de efectivo y determina la mejor forma o estrategia de usarlos o generarlos.
      .col-md-5(data-aos="fade-left") 
        img.mt-3(src='@/assets/curso/temas/tema1/img_12.png').mb-3
    
    .row.justify-content-center.align-items-center(data-aos="zoom-in-down")
      .col-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img_13.png')})`}"
          ) 
          .bloque-texto-g__texto.p-4
            p.mb-0 Las proyecciones son esa parte de la planificación financiera producto de un análisis previo exhaustivo que atiende políticas, condiciones o factores influyentes en la organización presentes en el entorno, estadísticas, movimientos de recursos e indicadores financieros. En otras palabras, todos estos factores se combinan para establecer la proyección financiera de un periodo determinado.

    p.mb-5(data-aos="fade-right") Las proyecciones financieras corresponden a estimar los resultados a obtener en escenarios predeterminados y condiciones establecidas, a través de los cuales se construye la información financiera como resultado de las decisiones tomadas y con el fin de facilitar la toma de decisiones acerca de la implementación de nuevos proyectos de inversión. De esta manera, los tipos de proyecciones a realizar corresponden al tipo de informes financieros indispensables para la toma de decisiones, entre los que se encuentran los siguientes:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 4. </b> <i>Tipo de informes financieros</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema1/fig_4a.svg', alt='Imagen que menciona los 10 tipos de informes financieros presentes dentro de las proyecciones a realizar.')  
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig_4b.svg', alt='Imagen que menciona los 10 tipos de informes financieros presentes dentro de las proyecciones a realizar.') 
    
    p.mb-5(data-aos="fade-right") A continuación, se detallan los tres primeros y los formatos requeridos para su elaboración. En cuanto a los presupuestos de inversiones, financiación, de capital y de ingresos, costos y gastos se tratarán con detalle en el capítulo correspondiente al «presupuesto». Se sugiere descargar cada uno de los siguientes documentos, los cuales se explican a través de ejemplos para una mayor comprensión.

    .row.align-items-center.justify-content-center.mb-4
      .col-md-6.col-12.mb-3.mb-md-0(data-aos="fade-right") 
        img(src='@/assets/curso/temas/tema1/img_14.png')
      .col-md-6.col-12(data-aos="fade-left") 
        .tarjeta.color-secundario.p-3.mb-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/componentes/ico-export-2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Estado de la situación financiera
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/anexo_EstadoSituacionFinanciera.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
        .tarjeta.color-secundario.p-3.mb-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/componentes/ico-export-3.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Estado de resultados
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/anexo_EstadoResultados.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
        .tarjeta.color-secundario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/componentes/ico-export-4.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Flujo de caja o de efectivo
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/anexo_FlujoCajaEfectivo.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

 
    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-12.mb-4.mb-md-0
          h4 {{ getTitle() }}
          p {{ getContent() }}
    
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    modal1: false,
    content: 0,
    getTitle() {
      if (this.content == 1) return 'Análisis de la situación financiera'
      else if (this.content == 2) return 'Fijación de objetivos'
      else if (this.content == 3) return 'Diseño de estrategias'
      else if (this.content == 4)
        return 'Evaluación de resultados o posibles alternativas'
    },
    getContent() {
      if (this.content == 1)
        return 'Es necesario definir la situación de la empresa en lo referente a las finanzas, con el fin de acudir a datos concretos como estado de la situación financiera, estados de cambio en el capital, activos y flujos de caja. A partir de este fundamento se deberán definir los objetivos, los cuales deben ser coordinados con el área de contabilidad, a fin de que queden claramente establecidos y sean incluidos en el proceso de planificación financiera con los recursos precisos requeridos.'
      else if (this.content == 2)
        return 'Esta etapa es crucial para el proceso de planificación financiera. Es aquí donde la empresa debe plantearse el escenario deseado o a dónde espera llevar la empresa y el tiempo en que espera lograrlo; de esta manera, se podrá definir el objetivo realizable, medible y cuantificable para el corto, mediano y largo plazo, siendo los objetivos de corto plazo prioritarios o inmediatos.'
      else if (this.content == 3)
        return 'Se definen los caminos a través de los cuales se espera llevar a la empresa a alcanzar los objetivos planteados, persiguiendo el único fin de generar rentabilidad, fundamentados en información cuantitativa financiera, de manera que estén aterrizados a la realidad. A partir de esta etapa se inicia la toma de decisiones empezando con la definición de factores críticos o determinantes como la liquidez, las inversiones, los gastos, entre otros. El diseño de estrategias parte del análisis o planteamiento de escenarios tanto internos como externos, con el fin de realizar las previsiones de acuerdo con las variables del entorno.'
      else if (this.content == 4)
        return 'A través de los resultados obtenidos se evalúa simultáneamente la eficacia de las estrategias para identificar modificaciones, maniobrar imprevistos y ajustar lo necesario para continuar en el camino hacia el logro de los objetivos organizacionales. Es necesario, entonces, evaluar cada estrategia planteada a fin de definir cuáles son las que verdaderamente deben implementarse, siempre que se encuentren en el marco de las regulaciones que le atañen a la compañía y deberán ser seleccionadas acorde con las estrategias.'
    },
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
