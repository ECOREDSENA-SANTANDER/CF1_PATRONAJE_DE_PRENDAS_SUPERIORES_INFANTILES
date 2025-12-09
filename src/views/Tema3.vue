<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Moda


    .bloque-texto-g.color-primario4.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}"
      )
      .bloque-texto-g__texto.p-lg-5.p-4.p-md-4
        p.mb-0 La moda en el diseño se concibe como un fenómeno complejo que trasciende la idea de un simple conjunto de prendas, pues constituye un reflejo de la identidad individual, la dinámica social y la cultura. En este sentido, Kawamura (2005) explica que la moda no se limita a un repertorio de elementos o tendencias, sino que debe entenderse como un sistema socialmente construido, fundamentado en normas que determinan qué resulta aceptable en determinados contextos.

    img.mb-4(src='@/assets/curso/tema3/2.png', alt='')


    p.mb-0 A partir de esta perspectiva, en el sector de la moda se reconoce el concepto de “sistema moda”, entendido como un entramado que integra no solo las prendas de vestir, sino también accesorios, complementos y calzado, al tiempo que incorpora dimensiones cambiantes y adaptables de acuerdo con las tendencias contemporáneas.

    

    separador
    #t_3_1.titulo-segundo.mb-5
      h2 3.1 Universos del vestuario

    .ap7.p-4.mb-5
      p.mb-0 Corresponden a agrupaciones de prendas organizadas en categorías que responden a contextos específicos de uso. Cada universo mantiene coherencia interna en cuanto a tipologías, materiales textiles y criterios de aplicación, lo que facilita una clasificación clara y funcional; esta organización del vestuario según la ocasión de uso no solo optimiza la estructuración del producto, sino que también permite definir con mayor precisión el mercado objetivo al cual se dirige.


    .row.justify-content-center.align-items-center.mb-lg-5.mb-md-4.mb-0(data-aos="fade-right")
      .col-lg-12(alt='Clasificación de diferentes tipos de vestuario según su ocasión de uso y proporciona ejemplos de prendas para cada uno de estos. Los universos de vestuario son; formal, informal, deportivo, ejecutivo y ceremonial.')
        .titulo-sexto.mb-4
          h5 Tabla 1.
          | Clasificación de universos del vestuario por ocasión de uso
        .tabla-a.tab1.mb-2
          table
            thead
              tr
                th Universo
                th Uso
                th Ejemplos
            tbody
              tr
                td Formal
                td Eventos elegantes, reuniones importantes, fiestas de etiqueta.
                td Trajes de gala, trajes de ocasión (noche, día).
              tr
                td Informal casual
                td Vida cotidiana, actividades diarias.
                td Pantalones en #[em denim], camisetas, camisas, zapatillas, vestidos ligeros.
              tr
                td Deportivo o funcional
                td Actividad física, trabajo especializado.
                td Ropa deportiva, uniformes médicos, overoles.
              tr
                td Oficina o ejecutivo
                td Entornos laborales, negocios.
                td Trajes ejecutivos, blusas, pantalones de vestir.
              tr
                td Ceremonia y festivo
                td Bodas, graduaciones, eventos religiosos.
                td Vestidos largos, trajes formales, indumentaria cultural.
              tr
                td Fantasía
                td Teatro, cine, #[em cosplay], carnaval.
                td Disfraces, vestuario teatral, trajes de época.
              tr
                td #[em Swimwear]
                td Playa, piscina, eventos recreativos.
                td Vestidos de baño, salidas de baño, atuendos para la playa y la piscina.
              tr
                td #[em Lingerie wear]
                td Prendas interiores.
                td Ropa interior.
              tr
                td #[em Sleepwear]
                td Para dormir o descansar.
                td Ropa de descanso, pijamas.
        figcaption Fuente: SENA, (2025)



    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .ap10.p-lg-5.p-4
          .ap7.p-4
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2
                img.img-t.d-none.d-lg-block(src="@/assets/curso/tema3/3.png")
              .col-lg-10.ps-lg-0 
                p.mb-0(data-aos="fade-left") #[b Ocasión de uso:] contempla los posibles escenarios en los que una persona o grupos de personas usan una prenda de acuerdo con el contexto, esto es pactado culturalmente y hace parte de la identidad cultural individual y grupal.
            

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-6
        .titulo-sexto.mb-4(alt='Clasificación de ocasión de uso por universo de vestuario, correspondiendo el protocolario a la gala /formal, multiocasion al casual, Informal al kakiwear, Jeanswear, Sportswear, Activwear, Leisurewear, y finaliza con complementos al Swinwear/Beachwear, Sleepwear, y Underwear.')
          h5 Tabla 2.
          | Ocasión de uso por universo de vestuario
        .tabla-a.tab2.mb-2
          table
            thead
              tr
                th.p-3 Ocasión de uso
                th.p-3 Universo de vestuario
            tbody
              tr
                td.p-2 Protocolario
                td.p-2 Gala#[br]Formal
              tr
                td.p-2 Multiocasión
                td.p-2 Casual
              tr
                td.p-2 Informal
                td
                  .row
                    .col-lg-12
                      p.mb-0 #[em Kakiwear]
                      p.mb-0 #[em Jeanswear]
                      p.mb-0 #[em Sportswear]
                      p.mb-0 #[em Activewear]
                      p.mb-0 #[em Leisurewear]
              tr
                td.p-2 Complementos
                td
                  .row
                    .col-lg-12
                      p.mb-0 #[em Swimwear - Beachwear]
                      p.mb-0 #[em Sleepwear]
                      p.mb-0 #[em Underwear]
        figcaption.mb-lg-0.mb-4 Fuente: SENA, (2025)
      .col-lg-6.col-md-7.col-8
        img(src="@/assets/curso/tema3/4.png")


    .tarjeta.color-primario.p-4.mb-0(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema3/5.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2 Gamas de mercado - universos de vestuarios - ocasiones de uso
              p.mb-0 Para ampliar y profundizar en los contenidos abordados, se recomienda consultar el siguiente enlace:
            .col-sm-auto
              a.boton.color-acento-botones(href="https://youtu.be/VsTacEciP3k" target="_blank")
                span Ir al sitio
                i.fas.fa-file-video



    separador
    #t_3_2.titulo-segundo.mb-5
      h2 3.2 Tipología de prendas infantiles para niña


    .bloque-texto-g.bloque-texto-g--inverso.color-primario3.p-4.p-md-4.p-lg-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las tipologías de las prendas se clasifican en función de la estructura corporal. Por esta razón, para completar la etapa de conceptualización, resulta necesario realizar una clasificación que permita identificar las partes de las prendas según la arquitectura del cuerpo. 


    .tarjeta.color-primario.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema3/5.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2 Categoría de prendas - tipologías - bitácora de formas
              p.mb-0 Para ampliar y profundizar en los contenidos abordados, se recomienda consultar el siguiente enlace:
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=leHGYnfUxGk" target="_blank")
                span Ir al sitio
                i.fas.fa-file-video


    p.mb-4 A continuación, se presentan prendas de moda casual para niña:


    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        .ap10.p-4
          .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
            .col-lg-6.mb-lg-0.mb-4
              .tarjeta.tarjeta--azull.p-4
                SlyderF(columnas="col-lg-12")
                  .tarjeta.color-acento-botones.p-4
                    .titulo-sexto.mb-4(alt='')
                      h5 Figura 6.
                      | Camiseta
                    .ap11.p-4
                      .row.justify-content-center.align-items-stretch.mb-0
                        .col-lg-12
                          img(src='@/assets/curso/tema3/7.png', alt='Camiseta infantil de manga corta colgada en un gancho, sostenida por una mano frente a un fondo con textura.')
                  .tarjeta.color-acento-botones.p-4
                    .titulo-sexto.mb-4(alt='')
                      h5 Figura 7.
                      | Camisa manga larga
                    .ap12.p-3
                      .row.justify-content-center.align-items-stretch.mb-0
                        .col-lg-12
                          img(src='@/assets/curso/tema3/8.png', alt='Una prenda infantil de corte formal con cuello camisero, abotonadura frontal completa y mangas largas.  La persona adopta una postura erguida frente a un espejo, lo que permite apreciar tanto el frente como el perfil del conjunto.')
                  .tarjeta.color-acento-botones.p-4
                    .titulo-sexto.mb-4(alt='')
                      h5 Figura 8.
                      | Chaqueta para niña
                    .ap12.p-3
                      .row.justify-content-center.align-items-stretch.mb-0
                        .col-lg-12
                        img(src='@/assets/curso/tema3/9.png', alt='Chaqueta infantil de manga larga con cuello clásico, botonadura al frente y bolsillos superiores con solapa, acompañada de su ficha técnica con los dibujos planos delantero y trasero.')
                  .tarjeta.color-acento-botones.p-4
                    .titulo-sexto.mb-4(alt='')
                      h5 Figura 9.
                      | Blusa con diseño en manga
                    .ap12.p-3
                      .row.justify-content-center.align-items-stretch.mb-0
                        .col-lg-12
                        img(src='@/assets/curso/tema3/10.png', alt='Figura infantil con sombrero, usando prenda de hombros descubiertos y mangas amplias decoradas en el borde con detalles de flores.')
                  .tarjeta.color-acento-botones.p-4
                    .titulo-sexto.mb-4(alt='')
                      h5 Figura 10.
                      | Blusa con bolero
                    .ap12.p-3
                      .row.justify-content-center.align-items-stretch.mb-0
                        .col-lg-12
                        img(src='@/assets/curso/tema3/11.png', alt='Dos prendas infantiles colgadas en ganchos: una blusa con volado en la parte inferior y otra prenda ligera con estampado de puntos, ambas diseñadas con estilo casual.')
                  .tarjeta.color-acento-botones.p-4
                    .titulo-sexto.mb-4(alt='')
                      h5 Figura 11.
                      | Jardinera para niña
                    .ap12.p-3
                      .row.justify-content-center.align-items-stretch.mb-0
                        .col-lg-12
                        img(src='@/assets/curso/tema3/12.png', alt='Figura infantil de pie frente a una pared, con camiseta básica debajo de un vestido con tirantes y falda amplia, combinada con botas y medias.')


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
