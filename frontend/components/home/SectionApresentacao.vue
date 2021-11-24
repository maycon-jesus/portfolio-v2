<template>
  <section id="apresentacao">
    <div class="container">
      <article>
        <h1>Olá, eu sou o Maycon</h1>
        <p class="descricao">
          Um desenvolvedor WEB Full Stack com experiência no desenvolvimento de websites com Javascript, Node.js, Vue.js e outras bibliotecas e frameworks interessantes.
        </p>
        <div class="redes-sociais">
          <ul>
            <li>
              <a class="rede-social github" href="https://github.com/vacuouspatter" target="_blank" aria-label="Github">
                <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                </svg>
              </a>
            </li>
            <li>
              <a class="rede-social linkedin" href="https://www.linkedin.com/in/maycon-jesus-20b3a6216/" target="_blank" aria-label="Linkedin">
                <svg viewBox="0 0 24 24" class="icon" aria-hidden="true">
                  <path fill="currentColor" d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                </svg>
              </a>
            </li>
            <li>
              <a class="rede-social email" href="mailto:email@mayconjesus.com" target="_blank" aria-label="E-Mail">
                <svg viewBox="0 0 24 24" class="icon" aria-hidden="true">
                  <path fill="currentColor" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                </svg>
              </a>
            </li>
            <li>
              <a class="rede-social whatsapp" href="https://api.whatsapp.com/send?phone=5531997466833" target="_blank" aria-label="Whatsapp">
                <svg viewBox="0 0 24 24" class="icon" aria-hidden="true">
                  <path fill="currentColor" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" />
                </svg>
              </a>
            </li>
            <li>
              <a class="rede-social telegram" href="https://t.me/VacuousPatter" target="_blank" aria-label="Telegram">
                <svg
                  class="icon"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="telegram-plane"
                  role="img"
                  viewBox="0 0 448 512"
                ><path fill="currentColor" d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z" /></svg>
              </a>
            </li>
          </ul>
        </div>
        <div class="botoes">
          <nuxt-link to="/contato" class="botao onhover large">
            Fale Comigo
          </nuxt-link>
          <a href="/cdn/curriculo.pdf" target="_blank" class="botao onhover large">Veja Meu Currículo</a>
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

.redes-sociais{
  margin-top: 25px;
}

.redes-sociais ul{
  display: flex;
  flex-flow: row wrap;
}

.redes-sociais ul .rede-social{
  height: 41px;
  width: 41px;
  display: block;
  border-radius: 999rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-right: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.redes-sociais ul .rede-social.github{
  background: #333;
}
.redes-sociais ul .rede-social.linkedin{
  background: #0e76a8;
}
.redes-sociais ul .rede-social.email{
  background: #ea4335;
}
.redes-sociais ul .rede-social.telegram{
  background: #0088cc;
}
.redes-sociais ul .rede-social.whatsapp{
  background: #25d356;
}

.redes-sociais ul .rede-social:hover{
  background: var(--primary);
}

.redes-sociais ul .rede-social .icon{
  width: 25px;
  height: 25px;
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
