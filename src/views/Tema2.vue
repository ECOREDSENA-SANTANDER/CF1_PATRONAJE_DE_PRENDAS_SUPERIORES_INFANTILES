<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Análisis de medidas, clasificación y cuadros de tallas


    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Concepto y tipos de medidas

    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Proporción versus canon

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
