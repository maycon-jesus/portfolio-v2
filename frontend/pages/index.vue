<template>
  <div>
    <SectionApresentacao />
    <SectionCompetencias />
  </div>
</template>

<script>
import SectionApresentacao from '../components/home/SectionApresentacao.vue'
import SectionCompetencias from '../components/home/SectionCompetencias.vue'

export default {
  components: { SectionApresentacao, SectionCompetencias },

  head: {
    title: 'Início'
  }
}
</script>
