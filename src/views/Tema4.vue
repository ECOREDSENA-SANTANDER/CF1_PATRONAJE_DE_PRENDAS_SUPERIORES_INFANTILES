<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Textiles

    .bloque-texto-g.bloque-texto-g--inverso.color-primario3.p-4.p-md-4.p-lg-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los textiles, tanto en el ámbito del vestuario como en el industrial, se producen a partir de fibras que se transforman en filamentos; estos filamentos, una vez hilados, se convierten en hilos que posteriormente son tejidos para dar origen a las telas. El proceso textil, por lo tanto, comprende una secuencia organizada de etapas que van desde la obtención de la fibra hasta la elaboración de los diferentes tipos de tejidos.


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        TabsA.color-acento-contenido.mb-0(data-aos="fade-right")
          .tarjeta.color-a.p-lg-5.p-4(titulo="Fibras textiles")
            .row.justify-content-center
              .col-lg-11
                p.mb-0 Las fibras textiles constituyen la unidad fundamental de cualquier estructura textil. Una fibra se entiende como un filamento cuya longitud es considerablemente mayor a su diámetro y que, al agruparse, permite la fabricación de hilos, tejidos y telas. En términos prácticos, cada fibra es la materia prima sólida que da origen a toda construcción textil.
          .tarjeta.color-a.p-lg-5.p-4(titulo="Clasificación de las fibras")
            .row.justify-content-center
              .col-lg-11
                p.mb-4 La clasificación de las fibras se realiza según su origen, dividiéndose en dos grandes grupos:
                ul.lista-ul
                  li.d-flex.mb-2
                    i.fas.fa-star
                    p.mb-0 #[b Fibras naturales:] aquellas que provienen de fuentes animales, vegetales o minerales.
                  li.d-flex.mb-2
                    i.fas.fa-star
                    p.mb-0 #[b Fibras químicas:] elaboradas mediante procesos industriales, que a su vez se subdividen en fibras artificiales (derivadas de polímeros naturales) y fibras sintéticas (producidas íntegramente por síntesis química).


    p.mb-4 Como complemento se representa esta clasificación, facilitando la comprensión de las principales tipologías de fibras que intervienen en la industria textil:


    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4(alt='Tabla organizada que clasifica las fibras textiles en dos grandes grupos: fibras naturales y fibras químicas, según su origen y composición.')
          h5 Tabla 3.
          | Clasificación de las fibras
        .tabla-a.tab3.mb-2
          table
            thead
              tr
                th Tipo de fibra
                th Origen
                th Subcategoría
                th Ejemplos
            tbody
              tr
                td(rowspan="7") #[b Fibras naturales]
                td(rowspan="3") Animales
                td.left Procedentes de glándulas sedosas.
                td.left Seda y seda salvaje.
              tr
                td.left Procedentes de folículos pilosos.
                td.left Pelo de alpaca, angora, buey, caballo, conejo, castor, camello, cachemira, cabra guanaco, llama, nutria, yak y vicuña.
              tr
                td.left Procedentes de las semillas.
                td.left Algodón.
              tr
                td(rowspan="3") Vegetales
                td.left Procedentes del tallo.
                td.left Lino, cáñamo, yute y ramio.
              tr
                td.left Procedentes de la hoja.
                td.left Esparto y sisal.
              tr
                td.left Procedentes del fruto.
                td.left Coco.
              tr
                td Minerales
                td.left No aplica.
                td.left Asbestos, fibra de vidrio y fibra de carbono.
              tr
                td(rowspan="6") #[b Fibras químicas]
                td Artificiales
                td.left Base proteínica.
                td.left De la caseína de la leche (Fibroína) y de algas (alginato).
              tr
                td(rowspan="5") Sintéticas
                td.left Base celulósica.
                td.left Rayones (viscosa, crupón y acetato).
              tr
                td.left Base metálica.
                td.left Oro, plata y cobre.
              tr
                td.left Por polimerización.
                td.left Polivinilo y poliacrílicos.
              tr
                td.left Por condensación.
                td.left Poliéster (tergal) y poliamida (nylon).
              tr
                td.left Por poliadición.
                td.left Poliuretano y poliespán.
        figcaption Fuente: el rincón de celeste cielo, (2015)


    .row.justify-content-center.align-items-center.mb-0.mb-lg-4
      .col-lg-12
        .tarjeta--container.row.mb-4
          .col-md.tarjeta.color-primario.p-4.p-md-4.p-lg-5.mb-lg-0.mb-4(data-aos="fade-right")
            .row.justify-content-center.mb-0
              .col-12
                img.img-a.img-t.mb-5(src='@/assets/curso/tema2/4.svg', alt='Imagen decorativa.')
                h3.mb-4.text-center Hilos e hilatura
                p.mb-4 se denomina hilo al conjunto de fibras textiles, continuas o discontinuas, que se tuercen juntas alcanzando una gran longitud y que es directamente empleado para la fabricación de tejidos, a su vez, hilatura al arte de hilar los filamentos para obtener un conjunto de hebras preparadas para el proceso de construcción de hilos y tejidos. 
         
          .col-md.tarjeta.color-secundario.p-4.p-md-4.p-lg-5.mb-lg-0.mb-4(data-aos="fade-left")
            .row.justify-content-center.mb-0
              .col-12
                img.img-a.img-t.mb-5(src='@/assets/curso/tema2/5.svg', alt='Imagen decorativa.')
                h3.mb-4.text-center Tejidos
                p.mb-4.mb-lg-5.mb-md-5 son estructuras manufacturadas a partir de fibras o hilos que presentan una proporción significativa entre su longitud, área y espesor, y que cuentan con suficiente resistencia mecánica para mantener su cohesión (Textile Terms and Definitions, The Textile Institute, citado por el SENA).


    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-auto.ps-lg-3.pe-lg-0.ps-0.pe-0
        .subti
      .col.ps-lg-0
        .ssu.p-lg-2.p-3.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h4.mb-0 La clasificación de los tejidos se divide en tres grupos principales


    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .ap8.p-4.h-100
          .apw1.p-1.mb-4
            h4.mb-0 Tejidos planos
          p.mb-0.text-center formados por el entrelazado perpendicular de hilos de urdimbre y trama.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .ap8.p-4.h-100
          .apw1.p-1.mb-4
            h4.mb-0 Tejidos de punto
          p.mb-0.text-center construidos a partir de bucles entrelazados, lo que les otorga mayor elasticidad.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .ap8.p-4.h-100
          .apw1.p-1.mb-4
            h4.mb-0 No tejidos
          p.mb-0.text-center materiales obtenidos sin procesos de tejido o hilado tradicionales, mediante técnicas como el prensado, agujereado o termofusión.


    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4(alt='Clasificación de telas dividida en tejidas y no tejidas, donde las tejidas se agrupan en planas (fundamentales, derivadas y otras) y de punto (por trama y por urdimbre), mientras que las no tejidas incluyen interlones, guatas y entretelas.')
          h5 Tabla 4.
          | Clasificación de tejidos
        .tabla-a.tab4.mb-2
          table
            thead
              tr
                th Tipo de tela
                th Subtipo
                th Clasificación
                th Ejemplos
            tbody
              tr
                td(rowspan="5") #[b Telas tejidas]
                td(rowspan="3") Plano
                td.left Ligamentos fundamentales.
                td.left
                  .row.justify-content-center.align-items-center.mb-0
                    .col-lg-12
                      p.mb-0 • Tafetán.
                      p.mb-0 • Sarga (diagonal).
                      p.mb-0 • Raso.
              tr
                td.left Ligamentos derivados.
                td.left
                  .row.justify-content-center.align-items-center.mb-0
                    .col-lg-12
                      p.mb-0 • Esterilla / panamá / canastra.
                      p.mb-0 • Espina / espiga.
                      p.mb-0 • Sarga interrumpida #[em (broken twill).]
              tr
                td.left Otros.
                td.left • Dobby, jacquard, riso, afeipados, etc.
              tr
                td(rowspan="2") Punto
                td.left Por trama.
                td.left
                  .row.justify-content-center.align-items-center.mb-0
                    .col-lg-12
                      p.mb-0 • Sencillo (Jersey, Lacoste).
                      p.mb-0 • Doble (#[em rib] o resortado, #[em interlock], piqué).
              tr
                td.left Por urdimbre.
                td.left
                  .row.justify-content-center.align-items-center.mb-0
                    .col-lg-12
                      p.mb-0 • #[em Tricot.]
                      p.mb-0 • #[em Raschell.]
              tr
                td #[b Telas no tejidas]
                td No aplica
                td.left No aplica
                td.left
                  .row.justify-content-center.align-items-center.mb-0
                    .col-lg-12
                      p.mb-0 • Guatas.
                      p.mb-0 • Entretelas.
         
        figcaption Fuente: SENA, 2020
 


    .bloque-texto-g.color-acento.p-4.p-lg-5.p-md-4.mb-4(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/2.png')})`}"
      )
      .bloque-texto-g__texto.p-lg-5.p-4.p-md-4
        p.mb-0 La caracterización de los textiles se organiza en función de su comportamiento, el cual está estrechamente relacionado con el peso del material, así como con su estructura, fluidez, capacidad de expansión y compresión. Estos aspectos permiten identificar cómo se comporta un textil durante su manipulación, confección y uso.


    p.mb-4 A continuación, se presentan los aspectos más relevantes que permiten reconocer y clasificar los diferentes tipos de textiles según sus propiedades físicas y funcionales:


    .tarjeta.color-primario.p-4.mb-4(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema4/3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2 Sesión 6 - caracterización de los textiles
              p.mb-0 Para ampliar y profundizar en los contenidos abordados, se recomienda consultar el siguiente enlace:
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=mc1kARHDHrs&t=1s" target="_blank")
                span Ir al sitio
                i.fas.fa-file-video



    separador
    #t_2_1.titulo-segundo.mb-5
      h2 4.1 Aprovechamiento


    .ap4.p-5.mb-4
      .br2.mb-3
      .p.mb-0 El aprovechamiento por metro de tela consiste en determinar cuánta tela se utiliza realmente para confeccionar una prenda en relación con la cantidad total comprada; este cálculo es crucial para optimizar costos, minimizar desperdicios y mejorar la eficiencia en producción.
      

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-auto.ps-lg-3.pe-lg-0.ps-0.pe-0
        .subti
      .col.ps-lg-0
        .ssu.p-lg-2.p-3.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h4.mb-0 Pasos para determinar el aprovechamiento


    .row.fondot4.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-down")
      .col-lg-12
        .tarjeta.tarjeta--grisr.ul.p-lg-4.p-3.mb-0(data-aos="fade-right")
          PasosB.color-acento-botones
            .row.justify-content-center.align-items-center
              .col-lg-6
                h4.mb-4 Trazado de las piezas del patrón
                p.mb-4 Coloque las piezas del patrón sobre la tela respetando lo siguiente:  
                ul.lista-ul
                  li.d-flex.mb-2
                    i.fas.fa-leaf
                    p.mb-0 El sentido del hilo (dirección de la urdimbre).
                  li.d-flex.mb-2
                    i.fas.fa-leaf
                    p.mb-0 Los márgenes de costura. 
                  li.d-flex.mb-2
                    i.fas.fa-leaf
                    p.mb-0 El sentido del diseño o estampado, si aplica.          
              .col-lg-6.col-md-7.col-10
                img.img-a.img-t(src='@/assets/curso/tema4/4.png')
            .row.justify-content-center.align-items-center
              .col-lg-6
                h4.mb-4 Distribución y encaje de piezas 
                p.mb-4 Organice las piezas para que ocupen el menor espacio posible dentro del ancho de la tela (normalmente 1,40 m o 1,50 m). Aquí se busca una disposición eficiente, como encajar piezas en ángulos o rotarlas si el diseño lo permite.
              .col-lg-6.col-md-7.col-10
                img.img-a.img-t(src='@/assets/curso/tema4/5.png')
            .row.justify-content-center.align-items-center
              .col-lg-6
                h4.mb-4 Medición de tela usada 
                p.mb-4 Mida el largo total de tela utilizado una vez acomodadas todas las piezas. Por ejemplo, si las piezas distribuidas ocupan 0,95 metros del total de 1 metro adquirido, ese será su valor de uso real.
              .col-lg-6.col-md-7.col-10
                img.img-a.img-t(src='@/assets/curso/tema4/6.png')
            .row.justify-content-center.align-items
              .col-lg-12
                h4.mb-4 Cálculo del aprovechamiento
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-6
                    p.mb-lg-5.mb-4 La fórmula para calcular el aprovechamiento es:
                    .titulo-sexto.mb-2
                      h5 Figura 12. 
                      | Fórmula de aprovechamiento
                    img.img-a.img-t.mb-lg-0.mb-4(src='@/assets/curso/tema4/7.png' alt='Fórmula utilizada para calcular el porcentaje de aprovechamiento de tela. Se obtiene dividiendo el área útil utilizada por los patrones entre el área total del metro de tela, y multiplicando el resultado por 100.') 
                  .col-lg-6
                    p.mb-4 #[b Nota:] tela 1 metro de largo x 1,50 metros de ancho = 1,5 m². Área ocupada por los patrones: 1,15 m².
                    .titulo-sexto.mb-2
                      h5 Figura 13. 
                      | Ejemplo de aplicación
                    img.img-a.img-t(src='@/assets/curso/tema4/8.png' alt='Presenta un ejemplo aplicado de la fórmula de aprovechamiento de tela. Se divide un área útil de 1.15 metros cuadrados entre un área total de 1.5 metros cuadrados, y el resultado se multiplica por 100. El aprovechamiento obtenido es del 76.67 %, lo que indica que se utiliza eficientemente esa proporción del material disponible.')
           

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-auto.ps-lg-3.pe-lg-0.ps-0.pe-0
        .subti
      .col.ps-lg-0
        .ssu.p-lg-2.p-3.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h4.mb-0 Pasos para determinar el aprovechamiento



    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12.clp
        TabsA.color-acento-contenido.mb-0(data-aos="fade-right")
          .tarjeta.color-a.p-lg-5.p-4(titulo="Factores que afectan el aprovechamiento")
            .row.justify-content-center
              .col-lg-11
                ul.lista-ul.mb-0
                  li.d-flex.mb-2
                    i.fas.fa-star
                    p.mb-3 #[b Forma y número de piezas:] prendas con muchas piezas pequeñas tienden a generar más sobrantes.
                  li.d-flex.mb-2
                    i.fas.fa-star
                    p.mb-3 #[b Ancho de la tela:] a mayor ancho, más oportunidades de optimización. 
                  li.d-flex.mb-2
                    i.fas.fa-star
                    p.mb-3 #[b Diseño o estampado:] telas con dibujos direccionados limitan la rotación de piezas.
                  li.d-flex.mb-2
                    i.fas.fa-star
                    p.mb-0 #[b Técnicas de corte:] el uso de software de corte o corte manual puede influir en el rendimiento.
          .tarjeta.color-a.p-lg-5.p-4(titulo="Consideraciones adicionales")
            .row.justify-content-center
              .col-lg-11
                ul.lista-ul.mb-0
                  li.d-flex.mb-2
                    i.fas.fa-star
                    p.mb-3 Siempre se recomienda dejar un margen de seguridad del 5 - 10 % al comprar tela.
                  li.d-flex.mb-0
                    i.fas.fa-star
                    p.mb-0 El uso de retales sobrantes en otras prendas o complementos puede mejorar el rendimiento general.
                



</template>

<script>
export default {
  name: 'Tema4',
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
