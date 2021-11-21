<template>
  <div>
    <SectionApresentacao />
    <SectionCompetencias />
    <SectionEducacao />
  </div>
</template>

<script>
import SectionApresentacao from '../components/home/SectionApresentacao.vue'
import SectionCompetencias from '../components/home/SectionCompetencias.vue'
import SectionEducacao from '../components/home/SectionEducacao.vue'

export default {
  components: { SectionApresentacao, SectionCompetencias, SectionEducacao },

  head: {
    title: 'Início'
  }
}
</script>
