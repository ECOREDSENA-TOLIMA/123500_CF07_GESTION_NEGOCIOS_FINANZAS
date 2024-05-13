<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5(data-aos="fade-right") La administración financiera es la especialidad que se encarga de la gestión de los recursos financieros en una empresa, con especial cuidado en los resultados acerca de la rentabilidad y la disposición o liquidez de sus recursos. Con un ámbito vasto en las empresas a su cargo se realizan transacciones clave enfocadas en la planificación, organización, dirección y control, siendo estas las etapas del proceso administrativo, lo que constituye un conglomerado estratégico para el desempeño exitoso de toda organización. El siguiente video presenta sus orígenes e importancia en la actualidad.

    figure.mb-5(data-aos="fade-down-left")
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/KovK8lzphXI" title="Administración financiera y ejecución presupuestal" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      figcaption Administración financiera y ejecución presupuestal
    
    p.mb-5(data-aos="fade-right") La administración financiera es un fundamento esencial en la consolidación y prospectiva de la empresa, de manera que cada objetivo que se plantee requiere de la función y asistencia de esta disciplina, convirtiéndose en un eje fundamental para la consolidación de la organización a través de decisiones pertinentes y pasos firmes. Sus funciones se precisan así:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-11.col-lg-9.col-12
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Funciones de la administración financiera</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/intro/fig-1a.svg', alt='Imagen que menciona las funciones que hacen parte de la administración financiera, las cuales se componen por manejo de crédito, emisión de acciones, interrelación y meta.')  
          img.d-block.d-md-none(src='@/assets/curso/temas/intro/fig-1b.svg', alt='Imagen que menciona las funciones que hacen parte de la administración financiera, las cuales se componen por manejo de crédito, emisión de acciones, interrelación y meta.') 
          figcaption Nota. Adaptado de Terrazas (2009).

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-10.col-12(data-aos="zoom-in-down")
        .cajon.color-secundario.p-3.p-md-4
            p.mb-0 En cuanto a la ejecución presupuestal, es una acción derivada de la gestión financiera que busca proyectar los gastos y costos; en otras palabras, las necesidades de inversión de la organización y su eficiente y oportuna apropiación o aplicación de recursos, conforme a lo propuesto desde el proceso de planeación y proyección de actividades para el logro de los objetivos. Esto último también conocido como ciclo presupuestario, comprendido como el cúmulo de acciones realizadas con el fin de dar una optimización a los recursos de la empresa como son el talento humano, los materiales y aspectos financieros para la producción oportuna en cuanto a cantidades, oportunidad, calidad de bienes y servicios.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
