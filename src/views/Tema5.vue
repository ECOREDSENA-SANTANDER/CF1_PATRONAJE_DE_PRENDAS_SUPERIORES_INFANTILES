<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Tema 5

    separador
    #t_2_1.titulo-segundo.mb-5
      h2 5.1 Tipos de patronaje y líneas

    separador
    #t_2_1.titulo-segundo.mb-5
      h2 5.2 Patrón básico superior infantil

    separador
    #t_2_1.titulo-segundo.mb-5
      h2 5.3 Patrón básico de manga


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
