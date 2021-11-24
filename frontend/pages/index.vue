<template>
  <div>
    <SectionApresentacao />
    <SectionSobre />
    <SectionCompetencias />
    <SectionEducacao />
    <SectionProjetos />
    <SectionTrabalharJuntos />
  </div>
</template>

<script>
import SectionApresentacao from '../components/home/SectionApresentacao.vue'
import SectionSobre from '../components/home/SectionSobre.vue'
import SectionCompetencias from '../components/home/SectionCompetencias.vue'
import SectionEducacao from '../components/home/SectionEducacao.vue'
import SectionProjetos from '../components/home/SectionProjetos.vue'
import SectionTrabalharJuntos from '../components/home/SectionTrabalharJuntos.vue'

export default {
  components: {
    SectionApresentacao,
    SectionSobre,
    SectionCompetencias,
    SectionEducacao,
    SectionProjetos,
    SectionTrabalharJuntos
  },

  head: {
    title: 'Início'
  }
}
</script>
