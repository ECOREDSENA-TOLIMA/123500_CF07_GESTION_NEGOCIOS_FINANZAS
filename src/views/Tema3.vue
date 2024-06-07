<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Presupuesto 

    p.mb-5(data-aos="fade-right") Es considerado un instrumento de planificación financiera a partir del cual se consolidan los rubros relacionados con un área, especialidad, proyecto, los cuales requieren planificar el costo total de cada uno de estos, por lo que debe elaborarse desde lo particular a lo general, es decir, conocer el número de unidades, así como su valor unitario para luego calcular el valor total.
   
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.col-12(data-aos="fade-left") 
        img.mt-3(src='@/assets/curso/temas/tema3/img_1.png') 
      .col-lg-8.col-12(data-aos="fade-right") 
        .cajon.color-primario.p-3.p-md-4.mb-3
          p.mb-0 También es considerado un componente de la planeación, como primera fase de la administración donde se cuantifican las actividades necesarias para alcanzar los objetivos organizacionales. Este informe presenta los ingresos y egresos, estos incluyen los costos con el fin de concretar las operaciones previstas.
        p Su elaboración conlleva las fases planteadas en la planificación financiera y en la gestión financiera, las cuales tienen un mismo objetivo, proveer a la empresa de los recursos financieros oportunamente brindando las garantías. Si la financiación viene a través de endeudamiento, que la empresa cuente con los recursos para cumplir oportunamente con las obligaciones; si la empresa emite acciones o bonos para capitalizarse como segunda estrategia de financiación, mantenga el control de su empresa. También busca proyectar la empresa hacia la visión que se ha definido, lo que implica un proceso de planeación integral desde la definición de objetivos y los estados requeridos para evaluar su viabilidad, hasta la elaboración del presupuesto que permite planear a nivel de detalle, incluyendo actividades y dividiéndolas en tareas para su realización y cuantificación previa, que a su vez se convierte en un soporte para el manejo del efectivo. Las razones de presupuestar el efectivo son:

    .titulo-quinto.color-primario(data-aos="fade-down")
      h4.color-primario Las razones de presupuestar el efectivo son: 

    .row.justify-content-center.mb-5(data-aos="zoom-in-down")
      .col-lg-10.col-12.position-relative
        .avatar
          figure
            img(src="@/assets/curso/temas/tema3/conectada_00.svg", alt="alt").img250
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema3/conectada_01.svg", alt="alt").img100
            .col
              p Conocer la generación de flujo de caja libre, teniendo como criterio que se debe partir de las utilidades operativas y relacionar este estado financiero con el servicio a la deuda, que es igual al capital más intereses.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema3/conectada_02.svg", alt="alt").img100
            .col
              p La política de dividendos, la cual se debe cumplir según lo establecido, corresponde al beneficio que la empresa entrega a sus accionistas, basados en el criterio de contar con la liquidez para cancelarlas y no estimarlas sobre utilidades generadas.
        .crd.crd--avatarHorizontal.crd--third.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema3/conectada_03.svg", alt="alt").img100
            .col
              p Estimar el crecimiento de la empresa según proyección. lo cual requiere de inversión en activos fijos y capital de trabajo, para definirlos es necesario conocer la disponibilidad de efectivo o de recursos financieros con el fin de acudir, solo si es necesario, a la financiación con entidades financieras o contrayendo compromisos con los socios.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema3/conectada_04.svg", alt="alt").img100
            .col
              p Mantener una gestión sana y eficiente de los recursos financieros, de tal manera que la empresa no viva el día a día, tipo contabilidad de tendero sino que esté preparada para el día a día en cuanto a las actividades y la disponibilidad de los recursos para llevarlos a cabo.

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-10.col-12(data-aos="zoom-in-down")
        .cajon.color-secundario.p-3.p-md-4
            p.mb-0 En definitiva, el presupuesto de efectivo corresponde a la planificación del movimiento de efectivo en la empresa o a la estimación de los ingresos y erogaciones de dinero para un periodo futuro determinado.

    p.mb-5(data-aos="fade-right") Para elaborar el presupuesto es necesario que el administrador financiero cuente con esta información previa, sumado a la información histórica que hayan considerado estratégica para su elaboración. Entre esta se encuentra:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 8. </b> <i>Información a tener en cuenta para la elaboración del presupuesto</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema3/fig_8a.svg', alt='Imagen que hace relación a la información que se debe tener en cuenta al momento de elaborar el presupuesto.')  
          img.d-block.d-md-none(src='@/assets/curso/temas/tema3/fig_8b.svg', alt='Imagen que hace relación a la información que se debe tener en cuenta al momento de elaborar el presupuesto.')  

    Separador
    #t_3_1.titulo-segundo.color-primario(data-aos="fade-right")
      h2 3.1 Tipos

    p.mb-5(data-aos="fade-right") Existen tantos presupuestos como motivos u objetivos para elaborarlos, aquí se clasifican de acuerdo con los siguientes criterios:

    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones.p-4(titulo="Según la clase de entidad")
        h4 Según la clase de entidad
        p En esta categoría se encuentran los presupuestos públicos y privados de acuerdo con el tipo de empresa. 
        p #[b Presupuesto público:] corresponde a la estimación de gastos o inversiones que realiza una entidad del estado para el beneficio de la comunidad. 
        p #[b Presupuesto privado:] elaborado por entidades o empresas de carácter privado. Se soportan en diferentes herramientas matemáticas, estadísticas y financieras para calcular los ingresos, costos y gastos asociados a una actividad o proyecto a emprender.
      .tarjeta.color-acento-botones.p-4(titulo="Según el procedimiento")
        h4 Según el procedimiento
        p Al elaborar el presupuesto se requiere de las actividades planificadas, las cuales son organizadas en la moneda funcional.
        p #[b Presupuesto histórico:] es utilizado por las empresas industriales, comerciales y privadas y se basa en datos estadísticos de un periodo anterior para su elaboración.
        p #[b Presupuesto base cero:] apareció en 1970 y es elaborado sin contar con datos estadísticos y se lleva a cabo al realizar el análisis de las actividades proyectadas para un período; en algunos casos toma como base la información del período inmediatamente anterior. Está ligado a la Administración Basada por Actividades (ABA), igual que los Costos Basados por Actividades (ABC). Es aplicable a empresas de servicios, del Estado o a departamentos de empresas manufactureras.
      .tarjeta.color-acento-botones.p-4(titulo="Según su cubrimiento")
        h4 Según su cubrimiento
        p #[b Presupuesto sectorial:] se elabora a una empresa por zonas, por distrito, por línea de producto o a una división o área en períodos intermedios de tiempo.
        p #[b Presupuesto integral:] es el presupuesto que se basa en la empresa como un todo.
      .tarjeta.color-acento-botones.p-4(titulo="Según los niveles de producción")
        h4 Según los niveles de producción
        p #[b Presupuesto fijo o rígido:] elaborado para un solo periodo de tiempo o nivel de producción o actividad proyectada; no puede ser modificado, ni alterarse los niveles de producción estimados.
        p #[b Presupuesto flexible:] es el instrumento de la administración utilizado para planificar en la marcha, lo que permite realizar ajustes de manera constante.
      .tarjeta.color-acento-botones.p-4(titulo="Según el campo de aplicación")
        h4 Según el campo de aplicación
        p #[b Presupuesto operacional:] se realiza basado en la actividad económica y los rubros que de ella dependen y producen ingresos, egresos y costos a fin de determinar la utilidad o pérdida en un periodo de tiempo determinado.
        p #[b Presupuesto financiero:] se elabora con el fin de conocer la situación financiera de la empresa y se basa en las cuentas del estado de la situación financiera.
      .tarjeta.color-acento-botones.p-4(titulo="Según el período que cubre")
        h4 Según el período que cubre
        p #[b Presupuesto a largo plazo:] elaborado para un periodo entre 2 a 5 años de ejecución presupuestal o proyección presupuestaria.
        p #[b Presupuesto a corto plazo:] estimado para un periodo menor a un año o vigencia de ejecución puede proyectar por periodos bimensuales, trimestrales, cuatrimestrales o semestrales.

    p.mb-5(data-aos="fade-right") Ahora bien, este apartado se concentrará en los presupuestos financieros y operacionales, los cuales a su vez tienen relacionados los siguientes presupuestos:

    //- TabsC.color-primario.mb-4
    //-   .py-3.py-md-4(titulo="Presupuesto de inversiones")
    //-     .row
    //-       .col-md-6.mb-4.mb-md-0
    //-         figure
    //-           img(src='@/assets/curso/temas/tema3/img_2.png', alt='')
    //-       .col-md-6
    //-         p Refleja las inversiones a realizar durante un período de tiempo futuro, por lo cual va ligado a los activos y por ende, a un proyecto de inversión a realizar, lo que genera el incremento en el valor de los activos y en contrapartida en obligaciones o patrimonio, dependiendo la fuente que haya provisto los recursos.
    //-   .py-3.py-md-4(titulo="Presupuesto de financiación")
    //-     .row
    //-       .col-md-6.mb-4.mb-md-0
    //-         figure
    //-           img(src='@/assets/curso/temas/tema3/img_3.svg', alt='')
    //-       .col-md-6
    //-         p Este presupuesto pretende validar o evaluar la estrategia de financiación o de provisión de recursos financieros más apropiada para la organización. De esta manera, si la empresa adquiere una obligación financiera para embarcarse en un proyecto de inversión debe tener la capacidad de asumir el servicio a la deuda o si los socios son quienes aportan el capital, debe dejarse claro los riesgos que se enfrentan y el nivel de seguridad que puede brindar la entidad con cierta propuesta de financiación.
    //-         p La figura expone que tanto proveedores como entidades financieras y los aportes a capital, son beneficios generados a la empresa mediante la estrategia de financiación y se constituyen en fuentes de financiamiento; estas a su vez tienen un costo por el servicio a la empresa o costo de capital. Es importante anotar que existen recursos de generación interna o GIR. Estos son todos aquellos conceptos que no representan salida o erogaciones de dinero; pero que son descontados, como lo es el caso de la depreciación, que cuantifica el desgaste de los activos en la empresa.
    //-   .py-3.py-md-4(titulo="Presupuesto de capital")
    //-     .row
    //-       .col-md-6.mb-4.mb-md-0
    //-         figure
    //-           img(src='@/assets/curso/temas/tema3/img_4.svg', alt='')
    //-       .col-md-6
    //-         p Este presupuesto se elabora con el fin de evaluar cuáles de las opciones al alcance de la empresa son más favorables para su capitalización. 
    //-         p Los recursos provenientes por vía de financiación, deben ser utilizados especialmente en capital de trabajo de ágil circulación o de fácil recuperación, de circulación baja o lenta. Se refiere a la generación de recursos internos como la depreciación, la amortización y los dividendos por cancelar, y el capital de trabajo intangible o capital intelectual con el cual se aplican excelentes estrategias y se logran resultados exitosos.
    //-         p El apalancamiento se traduce en dinero, el cual es invertido en inventarios, costos operativos y financieros y costos de ventas, generando ventas. Esto último son ingresos, cancelando el costo de ventas y por consiguiente, realizando la cancelación a proveedores, costos operativos, costos financieros y costos de largo plazo. 

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.align-items-center.justify-content-center(titulo="Presupuesto de inversiones")
        .col-lg-10.col-12.mb-4.mb-md-3
          figure
            img(src='@/assets/curso/temas/tema3/img_2.png', alt='')
        .col-lg-10.col-12
          p Refleja las inversiones a realizar durante un período de tiempo futuro, por lo cual va ligado a los activos y por ende, a un proyecto de inversión a realizar, lo que genera el incremento en el valor de los activos y en contrapartida en obligaciones o patrimonio, dependiendo la fuente que haya provisto los recursos.
      .row.align-items-center.justify-content-center(titulo="Presupuesto de financiación")
        .col-lg-10.col-12.mb-4.mb-md-3
          figure
            img(src='@/assets/curso/temas/tema3/img_3.svg', alt='')
            figcaption Nota. Mapa mental del financiamiento hacia la inversión. Adaptado de Pacheco (2020). 
        .col-12.d-block.d-md-none
          a.anexo.mb-4(:href="obtenerLink('/downloads/anexo_PresupuestoFinanciación.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p #[b Descargar.] Gráfica de presupuesto de financiación
        .col-lg-10.col-12
          p Este presupuesto pretende validar o evaluar la estrategia de financiación o de provisión de recursos financieros más apropiada para la organización. De esta manera, si la empresa adquiere una obligación financiera para embarcarse en un proyecto de inversión debe tener la capacidad de asumir el servicio a la deuda o si los socios son quienes aportan el capital, debe dejarse claro los riesgos que se enfrentan y el nivel de seguridad que puede brindar la entidad con cierta propuesta de financiación.
          p La figura expone que tanto proveedores como entidades financieras y los aportes a capital, son beneficios generados a la empresa mediante la estrategia de financiación y se constituyen en fuentes de financiamiento; estas a su vez tienen un costo por el servicio a la empresa o costo de capital. Es importante anotar que existen recursos de generación interna o GIR. Estos son todos aquellos conceptos que no representan salida o erogaciones de dinero; pero que son descontados, como lo es el caso de la depreciación, que cuantifica el desgaste de los activos en la empresa.
      .row.align-items-center.justify-content-center(titulo="Presupuesto de capital")
        .col-lg-10.col-12.mb-4.mb-md-3
          figure
            img(src='@/assets/curso/temas/tema3/img_4.svg', alt='')
            figcaption Nota. Mapa mental del impacto de flujo. Adaptado de Pacheco (2020). 
        .col-12.d-block.d-md-none
          a.anexo.mb-4(:href="obtenerLink('/downloads/anexo_PresupuestoCapital.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p #[b Descargar.] Gráfica de presupuesto de capital
        .col-lg-10.col-12
            p Este presupuesto se elabora con el fin de evaluar cuáles de las opciones al alcance de la empresa son más favorables para su capitalización. 
            p Los recursos provenientes por vía de financiación, deben ser utilizados especialmente en capital de trabajo de ágil circulación o de fácil recuperación, de circulación baja o lenta. Se refiere a la generación de recursos internos como la depreciación, la amortización y los dividendos por cancelar, y el capital de trabajo intangible o capital intelectual con el cual se aplican excelentes estrategias y se logran resultados exitosos.
            p El apalancamiento se traduce en dinero, el cual es invertido en inventarios, costos operativos y financieros y costos de ventas, generando ventas. Esto último son ingresos, cancelando el costo de ventas y por consiguiente, realizando la cancelación a proveedores, costos operativos, costos financieros y costos de largo plazo. 

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-10.col-12(data-aos="zoom-in-down")
        .cajon.color-primario.p-3.p-md-4
            p.mb-0 En el presupuesto de capital se tiene en cuenta la emisión de acciones, emisión de bonos, readquisición de acciones, venta de activos, entre otros, como opciones de capitalización. Sus funciones son el crecimiento, la diversificación, el posicionamiento y operación basada en decisiones pertinentes y eficientes orientadas al logro de los objetivos. Es importante resaltar que cuando la empresa inicia su operación es necesario presupuestar el capital de trabajo en el que se asuman todos los costos de ventas, de logística, administrativos y financieros para luego iniciar la recuperación a su ritmo de la generación interna de recursos.

    Separador
    #t_3_2.titulo-segundo.color-primario(data-aos="fade-right")
      h2 3.2 Evaluación

    .row.align-items-center.justify-content-center.mb-4
      .col-md-7(data-aos="fade-right") 
        p.mb-2 Al ejecutar el presupuesto, es indispensable generar informes de su puesta en marcha con el fin de aplicar el control de la gestión en los mismos, utilizando el instrumento de control de gestión del presupuesto, el cual permite reconocer desde la gerencia financiera los puntos o hallazgos. En otras palabras, se realiza un ejercicio en el que se analiza lo planeado junto a lo ejecutado para determinar si hubo una desviación o si el hallazgo se produce por causa de un imprevisto, lo que obligó a realizar modificaciones al presupuesto, también al escrutinio del presupuesto desde sus diferentes etapas, con el fin de tomar medidas correctivas apropiadas, indispensables para evitar futuros fracasos.
        p.mb-0 Lo anterior evidencia la importancia de la ejecución presupuestal y la necesaria aplicación del control en cada etapa y gestión financiera. A continuación, se presentan los tipos de control aplicables al presupuesto:
      .col-md-5(data-aos="fade-left") 
        img.mt-3(src='@/assets/curso/temas/tema3/img_5.png').mb-3
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 9. </b> <i>Tipos de control aplicables al proceso</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema3/fig_9a.svg', alt='Imagen que menciona lo relacionado con los tipos de control que son aplicables al presupuesto, estos tipos son: preliminar, retroalimentación, coincidente.')  
          img.d-block.d-md-none(src='@/assets/curso/temas/tema3/fig_9b.svg', alt='Imagen que menciona lo relacionado con los tipos de control que son aplicables al presupuesto, estos tipos son: preliminar, retroalimentación, coincidente.') 

    p.mb-5(data-aos="fade-right") Desde esta óptica, el presupuesto puede ser visualizado desde dos enfoques:

    .row.justify-content-center.mb-5
      .col-sm-6.col-lg-4.col-12.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-4(data-aos="fade-right")
          .row.justify-content-center.mb-3
            .col-7.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema3/ico1.svg', alt='')
          h3.text-center Presupuesto como control de eficacia
          p Es elaborado con el fin de planificar y decidir. Se puede tomar el presupuesto como marco de referencia o punto de partida en el que se estarán supervisando y controlando en la ejecución presupuestal que lo planeado sea llevado a cabo. De esta manera, se realiza una contrastación permanente por si surge algún desvío y por ende, las razones y se justifique lo sucedido.
      .col-sm-6.col-lg-4.col-12.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-4(data-aos="fade-left")
          .row.justify-content-center.mb-3
            .col-7.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema3/ico2.svg', alt='')
          h3.text-center Presupuesto como control de eficiencia
          p Está diseñado sobre escenarios de entornos específicos pero al surgir modificaciones en ellos el presupuesto puede discrepar con esa realidad, por lo que la gerencia financiera deberá decidir las modificaciones o ajustes requeridos, tomando como base el presupuesto proyectado y manteniendo el fin para el cual fue creado.

    Separador
    #t_3_3.titulo-segundo.color-primario(data-aos="fade-right")
      h2 3.3 Ajustes

      
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.col-12(data-aos="fade-left") 
        img.mt-3(src='@/assets/curso/temas/tema3/img_6.svg') 
      .col-lg-8.col-12(data-aos="fade-right") 
        p Son las modificaciones que se necesitan aplicar al presupuesto, debido a que en la ejecución del mismo se producen escenarios diferentes a lo planeado, por lo que es necesario tomar decisiones apropiadas, lo cual no puede quedar allí, sino que requiere de una revisión exhaustiva, ya que estos hallazgos aportarán a la modificación del presupuesto, especialmente para la proyección de la vigencia siguiente.
        p Debido a que estos ajustes son constantes, se requiere de la habilidad para elaborar un presupuesto adaptable; pero que se ajuste a la mínima expresión o cuantía, a fin de que cumpla su función de promover el logro de objetivos de la organización de manera eficiente.
        .cajon.color-primario.p-3.p-md-4.mb-3
          p.mb-0 Lo más importante a la hora de construir un presupuesto es ser realista, lo que pone sobre la mesa muchas variaciones que se deban realizar; pero eso no quiere decir que el presupuesto puede quedar mal estimado o que gracias a la posibilidad de ajustarlos se incluyan sobrecostos, lo cual sería un error en la gestión financiera.

          
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
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
