<template>
  <div>
    <SectionApresentacao />
    <SectionCompetencias />
    <SectionEducacao />
    <SectionProjetos />
    <SectionTrabalharJuntos />
  </div>
</template>

<script>
import SectionApresentacao from '../components/home/SectionApresentacao.vue'
import SectionCompetencias from '../components/home/SectionCompetencias.vue'
import SectionEducacao from '../components/home/SectionEducacao.vue'
import SectionProjetos from '../components/home/SectionProjetos.vue'
import SectionTrabalharJuntos from '../components/home/SectionTrabalharJuntos.vue'

export default {
  components: { SectionApresentacao, SectionCompetencias, SectionEducacao, SectionProjetos, SectionTrabalharJuntos },

  head: {
    title: 'Início'
  }
}
</script>
