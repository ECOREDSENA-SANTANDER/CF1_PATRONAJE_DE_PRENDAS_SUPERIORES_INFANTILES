<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta un esquema que sintetiza los elementos clave del componente formativo estructura corporal y patronaje básico infantil. Este integra los elementos fundamentales del patronaje básico infantil en cinco ejes principales: la estructura del cuerpo, que abarca antropometría, anatomía, biomecánica, morfología, ergonomía y división corporal; el análisis y clasificación de medidas, que incluye los sistemas de medición y sus aplicaciones; la moda, que contempla universos del vestuario, gamas de mercado y tipologías de prendas infantiles de uso casual; los textiles, orientados al aprovechamiento del material; y finalmente el prepatronaje y patronaje básico infantil, donde se consideran los tipos de líneas y los patrones base superior y de manga. En conjunto, refleja la integración de conocimientos técnicos y prácticos necesarios para el diseño y confección de prendas dirigidas a la población infantil. 
    

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.png", alt="La síntesis presenta la estructura general del estudio del cuerpo y el patronaje básico infantil, organizada en cinco ejes: la estructura del cuerpo, que comprende aspectos como antropometría, anatomía, biomecánica, morfología, ergonomía y división corporal; el análisis y clasificación de las medidas, que integra los sistemas de medición y la definición de las principales dimensiones corporales; la moda, que aborda los universos del vestuario, las gamas de mercado y la tipología de prendas infantiles de uso casual; los textiles, con énfasis en el aprovechamiento de los recursos; y finalmente el prepatronaje y patronaje básico infantil, que considera los tipos de patronaje y líneas, así como la elaboración de patrones básicos para prendas superiores y mangas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
