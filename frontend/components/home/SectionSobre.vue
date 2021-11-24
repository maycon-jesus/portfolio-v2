<template>
  <section id="sobre" class="background-gray">
    <Title title="Sobre Mim" />
    <div class="container py-0">
      <div class="imagem">
        <img src="/images/sobre.png" alt="Foto do Maycon de corpo todo">
      </div>
      <div class="sobre-conteudo">
        <p>
          Olá! Me chamo Maycon, tenho 18 anos e gosto de criar coisas para a internet, principalmente websites.
        </p>
        <p>
          Meu interesse por desenvolvimento WEB começou em 2018 quando eu precisava de um site para um chatbot do discord que eu tinha desenvolvido, e desde então eu venho me aprimorando.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import Title from '../templates/Title.vue'

export default {
  components: { Title }
}
</script>

<style scoped>
section{
  padding: 50px 25px;
}

.container{
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}

.imagem img{
  height: 500px;
}

.sobre-conteudo{
  max-width: 650px;
  margin-left: 50px;
}

.sobre-conteudo p{
  font-size: 20px;
  margin-bottom: 20px;
  line-height: 1.3;
}

@media (max-width:1000px) {
  .container{
    flex-flow: column nowrap;
    align-items: center;
  }

  .sobre-conteudo{
    margin-left: 0px;
    margin-top: 25px;
  }
}
</style>
