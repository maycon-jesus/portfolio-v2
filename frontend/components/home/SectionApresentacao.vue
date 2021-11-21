<template>
  <section>
    <div class="container">
      <article>
        <h1>Olá, eu sou o Maycon</h1>
        <p class="descricao">
          Um desenvolvedor WEB Full Stack com experiência no desenvolvimento de websites com Javascript, Node.js, Vue.js e outras bibliotecas e frameworks interessantes.
        </p>
        <div class="botoes">
          <nuxt-link to="/contato" class="botao large">
            Fale Comigo
          </nuxt-link>
          <a href="https://google.com" class="botao large">Veja Meu Currículo</a>
        </div>
      </article>
      <div class="imagem-apresentacao-div">
        <img src="/images/imagem-apresentacao.png" alt="Foto do Maycon">
      </div>
    </div>
    <WavesDivider />
  </section>
</template>

<script>
import WavesDivider from '../templates/dividers/Waves.vue'
export default {
  components: { WavesDivider }
}
</script>

<style scoped>
section{
  position: relative;
}

.container{
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: stretch;
  min-height: calc(100vh - 84px);
  box-sizing: border-box;
}

.container >*{
  flex: 1;
}

.container >*:nth-child(2){
  margin-left: 20px;
}

article{
  margin-top: 50px;
}

h1{
  font-size: 50px;
  font-weight: bold;
}

.descricao{
  font-size: 20px;
  margin-top: 35px;
  line-height: 32px;
}

.botoes{
  margin-top: 50px;
}

.botoes .botao{
  margin-right: 15px;
  margin-bottom: 15px;
}

.imagem-apresentacao-div{
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.imagem-apresentacao-div img{
  max-width: 100%;
  max-height: calc(100vh - 84px - 50px);
}

@media (max-width:1300px) {
  section{
    padding-bottom: 60px;
  }

  .imagem-apresentacao-div{
    order: -1;
  }

  .imagem-apresentacao-div img{
    max-width: 400px;
  }

  .container{
    flex-flow: column nowrap;
  }
}
</style>
