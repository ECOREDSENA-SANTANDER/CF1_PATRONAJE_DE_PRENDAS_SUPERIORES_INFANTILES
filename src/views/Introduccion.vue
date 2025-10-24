<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bloque-texto-a.color-acento-contenido.p-4.p-md-4.p-lg-5.mb-5(data-aos="fade-right") 
      .row.m-0.align-items-center.justify-content-center
        .col-lg-9.mb-0.mb-lg-0
          .bloque-texto-a__texto.p-lg-4.p-md-4.p-4.mb-lg-0.mb-4.my-3.my-lg-0
            p.mb-4 El diseño de moda infantil integra procesos creativos y técnicos que permiten transformar ideas en prendas adaptadas a las necesidades de las niñas, donde la estética, la comodidad y la funcionalidad se convierten en ejes centrales. Dentro de estos procesos, el patronaje ocupa un papel esencial, pues consiste en trasladar las particularidades de la estructura corporal en crecimiento hacia representaciones bidimensionales que sirven como base para la confección de diferentes tipologías de vestuario.
            p.mb-0 En este contexto, comprender la figura infantil femenina resulta indispensable, ya que posibilita reconocer los cambios propios de las etapas de desarrollo, garantizando patrones que respondan tanto a la ergonomía como al confort y la seguridad que demanda la moda casual para niñas; esta comprensión facilita la adecuada interpretación de diseños y asegura que las prendas se ajusten a las expectativas de uso cotidiano.

        .col-lg-3.col-md-6.col-9.mb-0
          img(src='@/assets/curso/intro/1.png', alt='')
    
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .ap1.p-4
          p.mb-4 A partir de fundamentos como la antropometría infantil, se abordará el estudio de la estructura corporal en su dinámica de crecimiento, integrando conceptos de ergonomía, proporcionalidad y morfología, finalizando con el trazado de los patrones básicos. Todos estos elementos permiten definir sistemas de medición específicos que se convierten en la base para la construcción de cuadros de tallas adaptados a las diferentes edades y contextos de uso.
          p.mb-0 De esta manera, el componente ofrecerá al aprendiz metodologías que favorecen la interpretación de modelos y tipologías, tomando como referencia las necesidades propias del vestuario infantil, las categorías de prendas superiores más representativas, como camisetas, camisas, blusas, buzos y chaquetas livianas.


    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
