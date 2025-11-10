<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Prepatronaje y patronaje básico infantil


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        .ap3.p-lg-5.p-4.mb-4
          .br2.mb-4
          p.mb-lg-4.mb-0 El patronaje es la representación bidimensional de un volumen tridimensional, lo que permite definir la estructura de una prenda a través de planos. Este proceso es clave para desarrollar moldes o patrones que se ajusten correctamente al cuerpo.
      .col-lg-3
        img.img-a.img-t(src='@/assets/curso/tema5/1.svg')
      

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-lg-4.mb-5
        .titulo-sexto.mb-4
          h5 Figura 14.
          | Plano en 3D
        .ap4.p-3.mb-2
          img.img-a.img-t(src='@/assets/curso/tema5/3.svg' alt='Dos representaciones de un cubo: una en perspectiva simple y otra ubicada en un sistema de coordenadas tridimensional con ejes x, y, z.')
        figcaption Fuente: SENA, (2021)
      .col-lg-4.mb-4
        .titulo-sexto.mb-4
          h5 Figura 15.
          | Plano en 2D
        .ap4.p-3.mb-2
          img.img-a.img-t(src='@/assets/curso/tema5/4.svg' alt='Desarrollo en plano de un cubo formado por seis cuadrados unidos, dispuesto en forma de cruz con pestañas laterales para su armado.')
        figcaption Fuente: SENA, (2021)
      .col-lg-4.mb-0
        img.d-none.d-lg-block(src='@/assets/curso/tema5/2.png')


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        img.d-none.d-lg-block(src='@/assets/curso/tema5/5.png')
      .col-lg-9
        img.img-t.mb-4.d-none.d-lg-block(src='@/assets/curso/tema5/6.svg')
        .ap4.p-4.mb-0
          .br2.mb-4.mt-lg-5
          p.mb-lg-4.mb-0 Teniendo en cuenta lo abordado hasta ahora, es pertinente preguntarse: ¿para qué sirve el patronaje? Su utilidad radica en trasladar la estructura del cuerpo humano a planos técnicos, que luego se convierten en moldes para la confección de prendas.


    .row.justify-content-center.align-items-center.mb-0
      .col-lg-10
        .titulo-sexto.mb-4
          h5 Figura 16.
          | Interpretación en plano y molde 
        .ap4.p-3.mb-2
          img.img-a.img-t(src='@/assets/curso/tema5/7.svg' alt='Proceso de transformación del cuerpo humano en prenda. Parte de una figura tridimensional, que se traduce a un plano en dos dimensiones, luego a un molde técnico, y finalmente a una prenda confeccionada.')
        figcaption Fuente: SENA, (2021)




    separador
    #t_2_1.titulo-segundo.mb-5
      h2 5.1 Tipos de patronaje y líneas


    p.mb-5 El patronaje se divide en dos grandes categorías: el industrial, orientado a la producción masiva de prendas, y el sobre medidas, que se enfoca en la personalización y exclusividad para cada cliente. A continuación, se describe cada uno:


    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.col-md-6.mb-lg-0.mb-md-0.mb-4
        .ap13.p-4.h-100
          .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
            .col-auto.ps-lg-3.pe-lg-0.ps-0.pe-0
              .subti
            .col.ps-lg-0
              .ssu.p-lg-2.p-3.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
                h4.mb-0 A. Patronaje industrial
          p.mb-4 Este tipo de patronaje parte del análisis antropométrico de la figura humana en 3D y se desarrolla en 2D, ya sea en papel o mediante #[em software] especializado como Audaces 360, Optitex, Gerber o Lectra. Su metodología precisa permite trazar básicos, desarrollar patrones y realizar transformaciones de forma eficiente.
          p.mb-4 Se basa en tablas de medidas definidas según regiones y tipos de prenda, lo que facilita el escalado. A partir de una talla base, se aplican incrementos estandarizados para generar múltiples tallas sin necesidad de crear nuevos moldes, optimizando así la producción en serie.
          img.img-t.d-none.d-lg-block(src='@/assets/curso/tema5/8.svg')
      .col-lg-6.col-md-6
        .ap13.p-4.h-100
          h5.mb-4 El patronaje industrial incluye:
          ul.lista-ul
            li.d-flex.mb-4
              i.fas.fa-circle-chevron-right
              p.mb-0 Trazado de básicos delanteros y posteriores.
            li.d-flex.mb-4
              i.fas.fa-circle-chevron-right
              p.mb-0 Desarrollo de patrones para prendas superiores e inferiores.
            li.d-flex.mb-4
              i.fas.fa-circle-chevron-right
              p.mb-0 Creación de moldes para componentes como cuellos, escotes, mangas, puños, ribetes, bolsillos, charreteras, entre otros.
            li.d-flex.mb-4
              i.fas.fa-circle-chevron-right
              p.mb-0 Aplicación en todas las líneas: infantil, femenina y masculina.
            li.d-flex.mb-4
              i.fas.fa-circle-chevron-right
              p.mb-0 Desarrollo de colecciones según universos de vestuario y ocasiones de uso.
            li.d-flex.mb-0
              i.fas.fa-circle-chevron-right
              p.mb-0 Se desarrollan toda una gama comercial que comprenden universos de vestuario y ocasiones de uso.



    .bloque-texto-g.color-primario4.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/9.png')})`}"
      )
      .bloque-texto-g__texto.p-lg-5.p-4.p-md-4
        .ap1.mb-5
        p.mb-0 #[b B. Patronaje sobre medidas]
        br
        br
        p.mb-0 Este tipo de patronaje se caracteriza por su precisión en la adaptación ergonómica y funcional de la prenda al cuerpo del cliente. Está diseñado para crear piezas exclusivas, ajustadas a medidas específicas, y es comúnmente utilizado por marcas orientadas a un público exigente con perfiles definidos de consumo.
        br
        br
        p.mb-0 El proceso incluye la toma de medidas antropométricas, la elaboración de una prenda de prueba (generalmente en un textil diferente), y una sesión de ajuste para corregir posibles fallos antes de confeccionar la prenda final.


    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-lg-0.mb-4
        .ap14.p-4.h-100
          h5.mb-4 Se aplican dos técnicas principales:
          ul.lista-ul
            li.d-flex.mb-4
              i.fas.fa-circle-chevron-right.r2
              p.mb-0 #[b Levantamiento en plano,] similar al industrial, aunque el patronista tiene libertad para aplicar fórmulas y ajustes específicos.
            li.d-flex.mb-4
              i.fas.fa-circle-chevron-right.r2
              p.mb-0 #[b Patronaje sobre maniquí,] utilizado en prendas con drapeados, plisados o acabados complejos. Este método, también conocido como #[em moulage], permite trabajar directamente sobre el maniquí para construir moldes únicos con alto nivel de detalle. Es frecuente en la confección de vestidos de fiesta, trajes de matrimonio, prendas infantiles o de sastrería.

      .col-lg-6.mb-lg-0.mb-4
        .ap14.p-4.h-100
          h5.mb-4 El patronaje sobre medidas abarca:
          ul.lista-ul
            li.d-flex.mb-3
              i.fas.fa-circle-chevron-right.r2
              p.mb-0 Trazado de básicos delanteros y posteriores.
            li.d-flex.mb-3
              i.fas.fa-circle-chevron-right.r2
              p.mb-0 Desarrollo de prendas superiores e inferiores.
            li.d-flex.mb-3
              i.fas.fa-circle-chevron-right.r2
              p.mb-0 Creación de moldes para componentes como cuellos, escotes, mangas, puños, ribetes, bolsillos, charreteras, entre otros.
            li.d-flex.mb-3
              i.fas.fa-circle-chevron-right.r2
              p.mb-0 Aplicación en todas las líneas: infantil, femenina y masculina.
            li.d-flex.mb-0
              i.fas.fa-circle-chevron-right.r2
              p.mb-0 Diseño según universos de vestuario y ocasiones de uso.



    .row.fondo5.justify-content-center.align-items-center.p-2.mb-5(data-aos="fade-down")
      .col-lg-12.px-lg-5.px-4.mb-0 
        
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-5
            .titulo-sexto.mb-4
              h5 Figura 17.
              | Patronaje sobre maniquí 
            .ap15.p-4.mb-3
              img.img-a.img-t(src='@/assets/curso/tema5/10.png' alt='Proceso de construcción de una prenda directamente sobre un maniquí. Se trabaja con una pieza de tela fijada con alfileres, marcando líneas guía que siguen las proporciones del cuerpo.')
            figcaption Fuente: https://tarahilebas.com/moulage// 


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .ap12.p-4
          p.mb-0 En los procesos productivos de la industria de la confección, las fichas técnicas son herramientas clave que guían el trabajo de cada integrante del equipo. Estas fichas detallan de forma clara las especificaciones, materiales, secuencia de ensamblaje y requerimientos técnicos de cada prenda, garantizando uniformidad y precisión en la producción.


    .tarjeta.color-primario.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema5/11.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2 Conceptos de prepatronaje
              p.mb-0 Complemente esta información con los conceptos y elementos más importantes en el prepatronaje industrial:
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Conceptos_de_prepatronaje.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download



    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-auto.ps-lg-3.pe-lg-0.ps-0.pe-0
        .subti
      .col.ps-lg-0
        .ssu.p-lg-2.p-3.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h4.mb-0 Procedimiento y entorno

    
    p.mb-4 Para lograr un producto que responda a las necesidades del cliente, es fundamental seguir una secuencia de pasos que aseguren el cumplimiento de los criterios técnicos y de calidad en la confección de prendas sobre medidas. Por tanto, se recomienda el siguiente procedimiento:


    .tarjeta.color-primario.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema5/11.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2 Pasos para definir el patronaje 
              p.mb-0 Complemente esta información con cada uno de los pasos que se debe seguir para realizar el procedimiento de patronaje:
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Pasos_para_definir_el_patronaje.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-lg-3.pe-lg-0.ps-0.pe-0
        .subti
      .col.ps-lg-0
        .ssu.p-lg-2.p-3.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h4.mb-0 Metodología – manual de patronaje SENA


    .cajon-b.color-primario.te5.p-3.mb-5
      p.mb-0 El Manual de Patronaje del SENA fue elaborado por expertos con el respaldo de profesionales especializados en el área, con el objetivo de ofrecer una metodología clara para comprender el patronaje a partir del análisis del cuerpo humano. Si se desea consultar el contenido completo, se puede acceder al manual en su versión oficial.


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-lg-3.pe-lg-0.ps-0.pe-0
        .subti
      .col.ps-lg-0
        .ssu.p-lg-2.p-3.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h4.mb-0 Metodología – Convenciones


    .bloque-texto-g.bloque-texto-g--inverso.color-primario3.p-4.p-md-4.p-lg-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el patronaje, es esencial conocer y aplicar una serie de símbolos que facilitan la interpretación técnica de los patrones y el proceso de corte. Estas convenciones gráficas permiten leer los planos sin necesidad de textos extensos o referencias alfanuméricas, además de indicar cómo deben posicionarse las piezas al momento del corte.

    p.mb-5 Al despiezar un patrón, cada pieza debe estar claramente identificada con:


    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-3.mb-lg-0.mb-4
        .ap16.p-4.h-100
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-12.col-md-6
              ul.lista-ul.mb-0
                li.d-flex.mb-2
                  i.fas.fa-leaf
                  p.mb-0 Nombre de la pieza.
                li.d-flex.mb-2
                  i.fas.fa-leaf
                  p.mb-0 Referencia.
                li.d-flex.mb-2
                  i.fas.fa-leaf
                  p.mb-0 Talla.
                li.d-flex.mb-2
                  i.fas.fa-leaf
                  p.mb-0 Nombre del patronista.
            .col-lg-12.col-md-6
              ul.lista-ul.mb-0
                li.d-flex.mb-2
                  i.fas.fa-leaf
                  p.mb-0 Simbología de corte.
                li.d-flex.mb-2
                  i.fas.fa-leaf
                  p.mb-0 Cantidad de veces a cortar.
                li.d-flex.mb-2
                  i.fas.fa-leaf
                  p.mb-0 Piquetes de confección.
                li.d-flex.mb-0.mb-lg-4 
                  i.fas.fa-leaf
                  p.mb-0 Líneas de aplome.
          img.img-t.d-none.d-lg-block(src="@/assets/curso/tema5/13.svg")

      .col-lg-9
        .ap17.p-4.h-100
          p.mb-4 También pueden añadirse otras especificaciones, como detalles de estampación, cambios de color o material, acabados especiales y ubicación de elementos como bolsillos.
          p.mb-4 En cuanto al trazo, se utilizan formas geométricas básicas como horizontal, vertical, perpendicular, rectángulo, cuadrado, paralelo, ángulo recto, diagonal, vértice, radio, curva, cóncava, convexa, entre otras. Toda construcción parte de un rectángulo base, considerando el contorno y el largo del patrón principal.
          p.mb-4 Las #[b escalas] permiten representar piezas a tamaño real o reducido. Las más comunes son:
          ul.lista-ul
            li.d-flex.mb-2
              i.fas.fa-leaf
              p.mb-0 Escala 1:1 (tamaño real).
            li.d-flex.mb-2
              i.fas.fa-leaf
              p.mb-0 Escala 1:2 (mitad).
            li.d-flex.mb-2
              i.fas.fa-leaf
              p.mb-0 Escala 1:4 (cuarta parte).
          p.mb-0 El trazo a escala es útil para construir patrones base en versiones reducidas y facilitar su análisis.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-lg-0.mb-4
        .ap3.p-4
          .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
            .col-auto.ps-lg-3.pe-lg-0.ps-0.pe-0
              .subti
            .col.ps-lg-0
              .ssu.p-lg-2.p-3.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
                h4.mb-0 Materiales recomendados para trabajar el manual
          ul.lista-ul
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 #[b Regla mágica] (60 x 5 cm con cuadrícula y ángulo de 45°).
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 #[b Curvígrafo] para curvas específicas.
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 #[b Cinta métrica] en centímetros.
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 #[b Esfero de tinta negra] para marcar en papel o tela.
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 #[b Lápiz o portaminas] (HB, 2H, 0,5 mm, 0,7 mm, 0,2 mm).
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 #[b Cinta invisible] para montaje sobre papel.
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 #[b Tijeras de papel], preferiblemente de titanio.
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 #[b Papel blanco tipo #[em manifold]] para mayor claridad en el trazo.
            li.d-flex.mb-0
              i.fas.fa-leaf
              p.mb-0 #[b Juego de reglas de patronaje], incluyendo sisómetro, curvas y escuadra.
      .col-lg-5.col-md-6.col-8
        img.img-t.img-a(src="@/assets/curso/tema5/14.svg")


    p.mb-5 Estas convenciones y herramientas son fundamentales para garantizar precisión, claridad y estandarización en el desarrollo técnico de los patrones.
    
    
    .tarjeta.color-primario.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema5/11.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2 Manual de patronaje. Básico e interpretación de diseños
              p.mb-0 Complemente esta información con las diferentes simbologías, que facilitan los procesos técnicos de patronaje y corte:
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Manual_patronaje_basico_interpretacion_disenos.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download
    
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-lg-3.pe-lg-0.ps-0.pe-0
        .subti
      .col.ps-lg-0
        .ssu.p-lg-2.p-3.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h4.mb-0 Análisis prepatronaje 


    .ap7.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/tema5/15.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .p-4
            p.mb-0(data-aos="fade-left") Antes de iniciar la construcción de moldes dirigidos a la moda infantil, es necesario considerar una serie de factores de preparación que aseguren un adecuado desarrollo de las prendas; estos aspectos preliminares permiten establecer bases sólidas para que el proceso de patronaje responda a las particularidades de la estructura corporal de las niñas. Dentro de estos elementos, se destacan el análisis prepatronaje y la definición del patrón base como puntos de partida.


    p.mb-5 El aprendizaje del patronaje infantil está diseñado para iniciar a partir de patrones base, que posteriormente derivan en moldes fundamentales y específicos. Este análisis incluye:


    .tarjetaf.p-4.mb-0
      SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
        .row.justify-content-center.align-items-center.p-0.p-lg-4
          .col-lg-7
            h4.mb-4 Tipo de plano
            p.mb-lg-0.mb-4 Se debe identificar el tipo de plano sobre el cual se trabajará el molde. Puede tratarse de un plano unido, separado o montado, lo cual depende de la prenda superior que se esté desarrollando.
          .col-lg-5.col-md-8
            img.mb-0(alt="" src="@/assets/curso/tema5/16.png")
        .row.justify-content-center.align-items-center.p-0.p-lg-4
          .col-lg-7
            h4.mb-4 Rectángulo inicial
            p.mb-lg-0.mb-4 Todo trazo básico comienza con la construcción de un rectángulo. Este se establece con la medida de contorno más prominente y el largo principal de la parte del cuerpo a trabajar. En el caso de prendas superiores infantiles, generalmente se toma como referencia el contorno de pecho y el talle posterior.
          .col-lg-5.col-md-8
            img.mb-0(alt="" src="@/assets/curso/tema5/17.png")
        .row.justify-content-center.align-items-center.p-0.p-lg-4
          .col-lg-7
            h4.mb-4 Medida de contorno más prominente
            p.mb-lg-0.mb-4 En moda infantil, la medida más relevante para prendas superiores suele ser el contorno de pecho, ya que constituye la referencia central del patrón base. Esta medida puede ser representada mediante convenciones o letras que faciliten el trazado.
            p.mb-lg-0.mb-4 Ejemplo: P = Contorno de pecho de la talla seleccionada.
          .col-lg-5.col-md-8
            img.mb-0(alt="" src="@/assets/curso/tema5/18.png")
        .row.justify-content-center.align-items-center.p-0.p-lg-4
          .col-lg-7
            h4.mb-4 Medida de largo principal
            p.mb-lg-0.mb-4 El largo inicial del rectángulo se define a partir de la medida más extensa de la zona a trabajar. Para prendas superiores en niñas, se emplea con frecuencia el largo de talle posterior, que permite establecer el equilibrio del molde.
          .col-lg-5.col-md-8
            img.mb-0(alt="" src="@/assets/curso/tema5/19.png")
        .row.justify-content-center.align-items-center.p-0.p-lg-4
          .col-lg-7
            h4.mb-4 Medidas empleadas en el trazo
            p.mb-lg-0.mb-4 La metodología del patronaje infantil suele utilizar medidas deducidas a través de fórmulas, más allá de aquellas extraídas directamente de cuadros de tallas. Generalmente, del cuadro se toman el contorno de pecho y el largo de talle, mientras que dimensiones como anchos de espalda, cuello u hombro se obtienen por cálculos derivados.
          .col-lg-5.col-md-8
            img.mb-0(alt="" src="@/assets/curso/tema5/20.png")
        .row.justify-content-center.align-items-center.p-0.p-lg-4
          .col-lg-7
            h4.mb-4 Manejo del papel
            p.mb-lg-0.mb-4 El trazo de moldes infantiles se realiza sobre papeles especializados como el papel trazo o #[em manifold]. Estos presentan una cara lisa y brillante y otra opaca y corrugada. Se recomienda trabajar sobre la superficie opaca, ya que ofrece mejor adherencia al grafito y evita reflejos de luz que puedan generar fatiga ocular. Además, el uso de papel blanco es aconsejable para mantener la claridad del trazo. 
          .col-lg-5.col-md-8
            img.mb-0(alt="" src="@/assets/curso/tema5/21.png")
        .row.justify-content-center.align-items-center.p-0.p-lg-4
          .col-lg-7
            h4.mb-4 Siluetas
            p.mb-lg-0.mb-4 El tratamiento de siluetas infantiles sigue la misma lógica que en otras líneas de patronaje, con pasos y guías semejantes. La diferencia radica en las fórmulas de proporción, ajustadas a las características del cuerpo de las niñas.
          .col-lg-5.col-md-8
            img.mb-0(alt="" src="@/assets/curso/tema5/22.png")




    separador
    #t_2_1.titulo-segundo.mb-5
      h2 5.2 Patrón básico superior infantil


    p.mb-5 El estudio del patronaje infantil inicia con la explicación del trazo del patrón básico superior, entendido como la base estructural a partir de la cual se desarrollan moldes más complejos y prendas de mayor detalle. Siguiendo la orientación del manual de patronaje básico e interpretación de diseño del SENA, este primer acercamiento permite comprender las proporciones, líneas y referencias necesarias para trabajar sobre el cuerpo en crecimiento de las niñas, considerando tanto su ergonomía como los principios de comodidad y ajuste.


    .row.justify-content-center.align-items-center.mb-5.mt-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-a.color-acento-contenido.te55.p-4.p-md-4.p-lg-5
          .row.align-items-center.justify-content-center
            .col-lg-8.mb-0
              .apw.p-3
                p.mb-0(data-aos="fade-left") La construcción de este patrón básico constituye un punto de partida esencial, pues de él se derivan transformaciones posteriores que posibilitan la creación de blusas, camisas, chaquetas y otras prendas superiores en moda casual infantil. En este sentido, el aprendizaje se organiza desde la comprensión del rectángulo inicial, el uso de medidas de contorno y talle, y la aplicación de fórmulas que aseguran precisión en el trazo. De esta manera, se establece un fundamento metodológico que articula la teoría con la práctica, garantizando un proceso de patronaje riguroso, adaptable y orientado al diseño infantil femenino.
            .col-lg-4.col-md-7.col-7.mb-lg-0.d-none.d-lg-block
              figure
                img.mb-lg-0.img-t.cs4(data-aos="fade-left")(src='@/assets/curso/tema5/23.png', alt='')


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-lg-3.pe-lg-0.ps-0.pe-0
        .subti
      .col.ps-lg-0
        .ssu.p-lg-2.p-3.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h4.mb-0 Paso 1


    .row.fondo5.justify-content-center.align-items-center.p-2.mb-5(data-aos="fade-down")
      .col-lg-12.px-lg-5.px-4.mb-0 
        
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-5
            .titulo-sexto.mb-4
              h5 Figura 18.
              | Trazo del paso 1 del patrón básico infantil
            .ap15.p-4.mb-3
              img.img-a.img-t(src='@/assets/curso/tema5/24.svg' alt='Diagrama técnico de un trazado de patronaje donde se representan rectángulos, líneas de referencia y curvas que corresponden al cálculo de escote y hombros. Incluye medidas expresadas en función del ancho y del largo de espalda.')
            figcaption Fuente: SENA, (2021) 


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4(alt='Tabla con ocho pasos para el trazo del rectángulo base del patrón infantil, que incluye fórmulas o medidas, descripción del trazado y la función correspondiente en la construcción del patrón básico superior.')
          h5 Tabla 5.
          | Pasos para el trazo del rectángulo
        .tabla-a.tab5.mb-2
          table
            thead
              tr
                th Paso
                th Fórmula o medida
                th Trazado
                th Función en el patrón básico infantil
            tbody
              tr
                td 1
                td.left Ancho = B/2 + 3 cm.
                td.left Construcción del ancho del rectángulo base.
                td.left Define la amplitud del patrón considerando la mitad del contorno de busto más una holgura de 3 cm.
              tr
                td 2
                td.left Alto = B/4 + 0,5 cm.
                td.left Construcción del alto del rectángulo base (largo de espalda).
                td.left Determina la proporción vertical del molde a partir del contorno de busto dividido en cuatro más 0,5 cm.
              tr
                td 3
                td.left División en 4 partes iguales.
                td.left Trazar tres líneas verticales internas en el rectángulo.
                td.left Sirve como referencia para ubicar sisas, espalda y delantero.
              tr
                td 4
                td.left 0,7 cm desde el primer punto.
                td.left Marcar y bajar 0,7 cm en la primera división vertical.
                td.left Representa la caída de hombro en la zona de espalda.
              tr
                td 5
                td.left 1,5 cm desde el segundo punto.
                td.left Marcar y bajar 1,5 cm en la segunda división vertical.
                td.left Define la profundidad de la sisa delantera.
              tr
                td 6
                td.left Arcos superiores.
                td.left Dibujar curvas desde la parte superior hacia los puntos de 0,7 cm y 1,5 cm.
                td.left Permiten modelar la forma de la sisa, adaptada a la ergonomía infantil.
              tr
                td 7
                td.left Curvas punteadas internas.
                td.left Conectar con líneas curvas los puntos de referencia hacia la base del rectángulo.
                td.left Indican el desarrollo interno de la sisa y diferencian espalda y delantero.
              tr
                td 8
                td.left División final del rectángulo.
                td.left Separar la zona izquierda (espalda) y la derecha (delantero).
                td.left Define las dos partes fundamentales del patrón básico superior infantil.
 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-lg-3.pe-lg-0.ps-0.pe-0
        .subti
      .col.ps-lg-0
        .ssu.p-lg-2.p-3.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h4.mb-0 Paso 2


    .row.fondo5.justify-content-center.align-items-center.p-2.mb-5(data-aos="fade-down")
      .col-lg-12.px-lg-5.px-4.mb-0 
        
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-5
            .titulo-sexto.mb-4
              h5 Figura 19.
              | Segundo paso del trazo del básico superior infantil 
            .ap15.p-lg-4.p-0.mb-3
              img.img-a.img-t(src='@/assets/curso/tema5/25.svg' alt='Trazado técnico de un patrón básico infantil donde se incorporan medidas, puntos de referencia y desplazamientos específicos en hombros, escote y sisa, señalados con líneas, símbolos y valores numéricos.')
            figcaption Fuente: SENA, (2021) 
 


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4(alt='Tabla con ocho pasos para el trazo del segundo rectángulo en el patrón básico infantil, que integra fórmulas, descripción del procedimiento y la función de cada trazado en la construcción de la prenda.')
          h5 Tabla 6.
          | Pasos para el trazo del segundo  paso del patrón básico superior
        .tabla-a.tab5.mb-2
          table
            thead
              tr
                th Paso
                th Fórmula o medida
                th Trazado
                th Función en el patrón básico infantil
            tbody
              tr
                td 1
                td.left
                  | Ancho = B/2 + 3 cm.
                  br
                  | Alto = B/4 + 0,5 cm
                td.left Rectángulo inicial del patrón.
                td.left Define la base estructural a partir del contorno de busto y largo de espalda.
              tr
                td 2
                td.left
                  | Escote posterior = B/20 cm
                  br
                  | + 2,5 cm.
                td.left Marcar horizontal y bajar 1 cm; unir con curva suave.
                td.left Forma el escote de espalda con proporción ergonómica.
              tr
                td 3
                td.left
                  | Escote delantero = B/20 cm
                  br
                  | + 2,5 cm.
                td.left Marcar horizontal y bajar 0,5 cm; unir con curva más profunda.
                td.left Define el escote delantero, más abierto que el posterior.
              tr
                td 4
                td.left
                  | Caída de hombro:
                  br
                  | Espalda = 1 cm.
                  br
                  | Delantero = 0,5 cm.
                td.left Bajar en cada extremo y unir hacia la línea de hombro.
                td.left Permite la inclinación natural de los hombros en niñas.
              tr
                td 5
                td.left
                  | Ancho de hombro con
                  br
                  | inclinación ±1 cm.
                td.left Proyectar desde escote hacia afuera: espalda con -1 cm y delantero con +1 cm.
                td.left Diferencia anatómica entre hombro de espalda y delantero.
              tr
                td 6
                td.left
                  | Sisa: Espalda = 0,7 cm.
                  br
                  | Delantero = 1,5 cm
                td.left Ajustar curvas desde línea superior hacia el costado.
                td.left Forma la cavidad de la sisa: menos profunda en espalda, más pronunciada en delantero.
              tr
                td 7
                td.left Pinzas: -0,5 cm en espalda y en delantero.
                td.left Marcar reducciones en el talle (espalda y delantero).
                td.left Aseguran ajuste y moldeado en prendas superiores.
              tr
                td 8
                td.left Márgenes inferiores = +0,5 cm.
                td.left Añadir en los extremos inferiores del rectángulo.
                td.left Se utilizan como margen de costura y dobladillo.
 
 
    .tarjeta.color-primario.p-4.mb-0(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema4/3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2 Base superior infantil
              p.mb-0 Se invita a seguir el video con el paso a paso de la construcción del básico superior infantil:
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=jCQosSNNXz0&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA " target="_blank")
                span Ir al sitio
                i.fas.fa-file-video



    separador
    #t_2_1.titulo-segundo.mb-5
      h2 5.3 Patrón básico de manga


    p.mb-5 Constituye uno de los elementos esenciales en el desarrollo de las prendas superiores, ya que su correcta construcción garantiza la movilidad, comodidad y estética de la prenda final. Este patrón parte de las medidas del contorno del brazo, el largo deseado y las proporciones del cuerpo, y se ajusta según el tipo de prenda y el estilo proyectado.


    .row.fondo5.justify-content-center.align-items-center.p-2.mb-5(data-aos="fade-down")
      .col-lg-12.px-lg-5.px-4.mb-0 
        
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-5
            .titulo-sexto.mb-4
              h5 Figura 20.
              | Trazo de patrón básico de manga
            .ap15.p-lg-4.p-0.mb-3
              img.img-a.img-t(src='@/assets/curso/tema5/26.svg' alt='Patrón técnico de una manga infantil donde se representan el largo total, el alto de copa y las medidas de ancho, acompañado de curvas y puntos de referencia que definen la forma de la sisa y el contorno de la manga.')
            figcaption Fuente: SENA, (2021) 


    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4(alt='Tabla con seis pasos para el trazo del patrón básico de manga infantil, que incluye las fórmulas o medidas, el procedimiento de trazado y la función de cada acción en la construcción de la prenda.')
          h5 Tabla 7.
          | Pasos para el trazo del patrón básico de manga
        .tabla-a.tab5.mb-2
          table
            thead
              tr
                th Paso
                th Fórmula o medida
                th Trazado
                th Función en el patrón básico infantil
            tbody
              tr
                td 1
                td.left Ancho = circunferencia de brazo/2 + 2,5 Alto = largo de manga.
                td.left Trazar el rectángulo base con ancho y alto según medidas.
                td.left Define la estructura inicial de la manga a partir de las medidas infantiles.
              tr
                td 2
                td.left En este paso no se aplica fórmula.
                td.left Dividir el rectángulo en dos mitades verticales.
                td.left Establece la línea central de referencia para la copa de la manga.
              tr
                td 3
                td.left Altura de copa = B/4 + 0,5.
                td.left Medir sobre la línea central y marcar punto; trazar línea horizontal auxiliar.
                td.left Determina la altura de la copa de la manga infantil según proporción del busto.
              tr
                td 4
                td.left
                  | Subir +1 cm en el centro
                  br
                  | Bajar -1 cm en los extremos.
                td.left Dibujar curva superior de la copa uniendo los puntos con suavidad.
                td.left Forma la parte superior de la manga; curva más pronunciada en delantero.
              tr
                td 5
                td.left En este paso no se aplica fórmula.
                td.left Desde extremos de la copa, bajar recto hasta la base; ensanchar +1,2 cm a cada lado.
                td.left Define los laterales de la manga y otorga amplitud en el puño.
              tr
                td 6
                td.left Curva inferior = +1 cm en el centro.
                td.left Dibujar curva ascendente en la base del rectángulo.
                td.left Genera mejor movilidad y caída natural de la manga infantil.
         






</template>

<script>
export default {
  name: 'Tema5',
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
