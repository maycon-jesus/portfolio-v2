<template>
  <section class="background-gray">
    <Title title="Projetos" description="Conheça alguns dos projetos desenvolvi" />
    <div class="container py-0">
      <div class="card-projeto">
        <img src="/images/projetos/zapelena.png" alt="Foto do projeto Zap e Lena">
        <h3>Zap E Lena</h3>
        <div class="techs-wrapper">
          <div class="techs">
            <p class="tech">
              HTML 5
            </p>
            <p class="tech">
              CSS 3
            </p>
            <p class="tech">
              Vue.js
            </p>
            <p class="tech">
              Nuxt.js
            </p>
            <p class="tech">
              MySQL
            </p>
            <p class="tech">
              JavaScript
            </p>
            <p class="tech">
              TypeScript
            </p>
          </div>
        </div>
        <p class="description">
          Esse é um site feito para melhorar e ajudar as live do Zap e da Lena com um sistema de recompensas para os espectadores, apoiadores, ranking de atividades, etc
        </p>
        <div class="botoes">
          <a href="https://zapelena.com.br" target="_blank" class="botao">Visitar Website</a>
        </div>
      </div>
      <div class="card-projeto">
        <img src="/images/projetos/velloso.png" alt="Foto do projeto Zap e Lena">
        <h3>Velloso</h3>
        <div class="techs-wrapper">
          <div class="techs">
            <p class="tech">
              HTML 5
            </p>
            <p class="tech">
              CSS 3
            </p>
            <p class="tech">
              Vue.js
            </p>
            <p class="tech">
              Nuxt.js
            </p>
            <p class="tech">
              MySQL
            </p>
            <p class="tech">
              JavaScript
            </p>
            <p class="tech">
              TypeScript
            </p>
          </div>
        </div>
        <p class="description">
          Velloso é um streamer da Booyah que possui um sistema de
          recompensas para quem assiste ele. Eu fui responsável por
          planejar, desenvolver, e hospedar o site de recompensas
          dele.
        </p>
        <div class="botoes">
          <a href="https://velloso.live" target="_blank" class="botao">Visitar Website</a>
        </div>
      </div>
      <div class="card-projeto">
        <img src="/images/projetos/stars-horizon-streamers.png" alt="Foto do projeto Stars Horizon - Streamers">
        <h3>Stars Horizon - Streamers</h3>
        <div class="techs-wrapper">
          <div class="techs">
            <p class="tech">
              HTML 5
            </p>
            <p class="tech">
              CSS 3
            </p>
            <p class="tech">
              Vue.js
            </p>
            <p class="tech">
              Nuxt.js
            </p>
            <p class="tech">
              JavaScript
            </p>
          </div>
        </div>
        <p class="description">
          Uma landing page para captação de novos streamers para compor o time de streamers da Stars Horizon.
        </p>
        <div class="botoes">
          <a href="https://starshorizon.com.br/streamers" target="_blank" class="botao">Visitar Website</a>
        </div>
      </div>
    </div>
    <!-- <div class="veja-mais-div">
      <nuxt-link class="botao mx-auto" to="/projetos">
        Ver Todos
      </nuxt-link>
    </div> -->
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
  justify-content: center;
  flex-flow: row wrap;
  margin-top: -15px;
}

.card-projeto{
  padding: 15px;
  border-radius: 5px;
  background: var(--background-card);
  width: calc(33% - 15px);
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  margin-top: 15px;
}

.card-projeto:nth-child(1n+1),
.card-projeto:nth-child(1n+2){
  margin-right: 30px;
}

.card-projeto:last-child{
    margin-right: 0px;
}

@media (max-width:1300px) {
  .card-projeto{
    width: calc(50% - 15px);
  }

  .card-projeto:nth-child(1n+1){
    margin-right: 30px;
  }

  .card-projeto:nth-child(1n+2){
    margin-right: 0px;
  }
}

@media (max-width:950px) {
  .card-projeto{
    width: 100%;
    margin-bottom: 30px;
  }

  .card-projeto:not(:last-child){
    margin-bottom: 30px;
  }

  .card-projeto:nth-child(1n+1){
    margin-right: 0;
  }
}

.card-projeto h3{
  font-size: 26px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 15px;
}

.techs-wrapper{
  overflow: hidden;
  margin-bottom: 25px;
}

.techs{
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  overflow: hidden;
  width: max-content;
}

.techs .tech{
  width: max-content;
  border: 1px solid #ccc;
  padding: 5px 10px;
  border-radius: 999rem;
  margin-right: 10px;
  font-size: 14px;
}

p.description{
  font-size: 18px;
  margin-bottom: 25px;
  line-height: 1.3;
  letter-spacing: .25px;
}
</style>
