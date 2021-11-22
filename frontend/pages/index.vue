<template>
  <div>
    <SectionApresentacao />
    <SectionCompetencias />
    <SectionEducacao />
    <SectionProjetos />
  </div>
</template>

<script>
import SectionApresentacao from '../components/home/SectionApresentacao.vue'
import SectionCompetencias from '../components/home/SectionCompetencias.vue'
import SectionEducacao from '../components/home/SectionEducacao.vue'
import SectionProjetos from '../components/home/SectionProjetos.vue'

export default {
  components: { SectionApresentacao, SectionCompetencias, SectionEducacao, SectionProjetos },

  head: {
    title: 'Início'
  }
}
</script>
