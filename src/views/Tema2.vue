<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Análisis de medidas, clasificación y cuadros de tallas


    .row.justify-content-center.align-items-center.mb-4.mt-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5
          .row.align-items-center.justify-content-center
            .col-lg-8.mb-0
              .apw.p-4
                p.mb-0(data-aos="fade-left") El análisis de medidas constituye la base técnica para la elaboración de patrones de prendas de vestir, ya que permite interpretar y organizar la información corporal de manera precisa. A través de este proceso se logra identificar las dimensiones esenciales del cuerpo humano, que posteriormente se convierten en datos útiles para clasificar, deducir y estructurar cuadros de tallas. De esta manera, se asegura la coherencia entre el diseño, la confección y el ajuste final de las prendas, garantizando comodidad, estética y funcionalidad en cada creación.
            .col-lg-4.col-md-7.col-7.mb-lg-0.d-none.d-lg-block
              figure
                img.mb-lg-0.img-a.img-t.cs(data-aos="fade-left")(src='@/assets/curso/tema2/1.png', alt='')


    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Concepto y tipos de medidas


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        img(src='@/assets/curso/tema2/2.png', alt=' ')
      .col-lg-8
        .ap4.p-4.mb-4
          p.mb-4.mx-lg-2.mt-lg-1 Las medidas son unidades numéricas empleadas para representar el tamaño de una figura, objeto o parte específica; en el patronaje de prendas de vestir, estos datos se obtienen utilizando la cinta métrica de manera lineal, con el fin de registrar el largo, el ancho y el contorno de las diferentes partes del cuerpo.
          p.mb-0.mb-lg-1.mx-lg-2 Las medidas corporales se toman a partir de los puntos de referencia o anclaje del cuerpo humano, considerando parámetros antropométricos y anatómicos. 
        p.mb-0 Estas deben contemplar los volúmenes y las protuberancias naturales del cuerpo, y se clasifican en tres grandes grupos:


    .row.justify-content-center.align-items-start.mb-5
        .col-lg-7
          AcordionA.press(tipo="b" clase-tarjeta="tarjeta tarjeta--grey")
            .row.align-items-center(titulo="Largos")
              .col-lg-12
                p.mb-0 Las medidas se toman de forma vertical y estas hacen referencia a los largos y talles del cuerpo.
            .row.align-items-center(titulo="Anchos")
              .col-lg-12
                p.mb-0 La medida se toma de manera horizontal y corresponden a los anchos del cuerpo, como el ancho de pecho. 
            .row.align-items-center(titulo="Contornos")
              .col-lg-11
                p.mb-0 La medida se toma teniendo en cuenta la figura 3D del cuerpo humano, por ejemplo, todo el contorno de la cintura.
        .col-lg-5
          .titulo-sexto.mb-4
            h5 Figura 3. 
            | Toma de medidas infantil 
          img(src='@/assets/curso/tema2/3.svg', alt=' ')     



    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Proporción versus canon


    p.mb-4 La relación entre proporción y canon se refiere al número de cabezas que caben en la altura total del cuerpo. Para entenderlo, es importante precisar:

  
    .row.justify-content-center.align-items-center.mb-0.mb-lg-5
      .col-lg-12
        .tarjeta--container.row.mb-4
          .col-md.tarjeta.color-primario.p-4.p-md-4.p-lg-5.mb-lg-0.mb-4(data-aos="fade-right")
            .row.justify-content-center.mb-0
              .col-12
                img.img-a.img-t.mb-5(src='@/assets/curso/tema2/4.svg', alt='Imagen decorativa.')
                h3.mb-4.text-center Canon
                p.mb-4 Prototipo de cuerpo físico que integra características consideradas casi perfectas dentro de su género. Está directamente vinculado a la percepción de proporcionalidad de la figura humana.
         
          .col-md.tarjeta.color-secundario.p-4.p-md-4.p-lg-5.mb-lg-0.mb-4(data-aos="fade-left")
            .row.justify-content-center.mb-0
              .col-12
                img.img-a.img-t.mb-5(src='@/assets/curso/tema2/5.svg', alt='Imagen decorativa.')
                h3.mb-4.text-center Proporción
                p.mb-4.mb-lg-5.mb-md-5 Corresponde a la relación de equilibrio o simetría existente entre las partes de un todo. Este concepto resulta esencial en disciplinas como el arte, la moda o la arquitectura.









    separador
    #t_2_3.titulo-segundo.mb-5
      h2 2.3 Proporciones corporales

    separador
    #t_2_4.titulo-segundo.mb-5
      h2 2.4 Medidas deducidas

    separador
    #t_2_5.titulo-segundo.mb-5
      h2 2.5 Normatividad
  















</template>

<script>
export default {
  name: 'Tema2',
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
