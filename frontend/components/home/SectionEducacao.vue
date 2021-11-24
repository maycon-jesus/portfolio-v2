<template>
  <section id="educacao" class="background-gray">
    <Title title="Educação" />
    <div class="container py-0">
      <div class="educacao-list">
        <div class="educacao">
          <img class="logo" src="images/logos/ifmg.png" alt="Logo do IFMG">
          <div class="educacao-conteudo">
            <h3>Instituto Federal de Minas Gerais</h3>
            <h3>Ensino Médio e Técnico em Eletrotécnica</h3>
            <p>Fevereiro 2019 - Dezembro 2021</p>
          </div>
        </div>
        <div class="educacao">
          <img class="logo" src="images/logos/udemy.png" alt="Logo da udemy">
          <div class="educacao-conteudo">
            <h3>Udemy</h3>
            <h3>Curso WEB Moderno</h3>
            <p>Janeiro 2020 - Julho 2020</p>

            <div class="botoes">
              <a href="https://www.udemy.com/certificate/UC-f74399fb-c376-42fc-8ca6-0ec226f11aa3/" target="_blank" class="botao">Visualizar Certificado</a>
            </div>
          </div>
        </div>
        <div class="educacao">
          <img class="logo" src="images/logos/alura.jpg" alt="Logo da Alura">
          <div class="educacao-conteudo">
            <h3>Alura</h3>
            <h3>Flexbox: Posicione elementos na tela</h3>
            <p>Novembro 2021</p>

            <div class="botoes">
              <a href="https://cursos.alura.com.br/certificate/2017c387-a9c9-4c19-922d-ff61f24d3ed2" target="_blank" class="botao">Visualizar Certificado</a>
            </div>
          </div>
        </div>
        <div class="educacao">
          <img class="logo" src="images/logos/alura.jpg" alt="Logo da Alura">
          <div class="educacao-conteudo">
            <h3>Alura</h3>
            <h3>Layouts Cesponsivos: Trabalhando com layouts mobile</h3>
            <p>Novembro 2021</p>

            <div class="botoes">
              <a href="https://cursos.alura.com.br/certificate/fcff18b6-2963-44c6-9493-fe8f21440b2e" target="_blank" class="botao">Visualizar Certificado</a>
            </div>
          </div>
        </div>
        <div class="educacao">
          <img class="logo" src="images/logos/alura.jpg" alt="Logo da Alura">
          <div class="educacao-conteudo">
            <h3>Alura</h3>
            <h3>Certificado Completo</h3>
            <p>Novembro 2021 - Agora</p>

            <div class="botoes">
              <a href="https://cursos.alura.com.br/user/mayconjesus07/fullCertificate/747c169810b63f3dd8564e83e2ea8a78" target="_blank" class="botao">Visualizar Certificado</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="veja-mais-div">
      <nuxt-link class="botao mx-auto" to="/educacao">
        Veja Mais
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

<style scoped lang="scss">
section{
  padding: 50px 0;
}

.educacao-list{
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
  margin-top: -25px;
}

.educacao{
  display: flex;
  flex-flow: row nowrap;
  padding: 15px;
  border-radius: 5px;
  background: var(--background-card);
  width: calc(50% - 30px);
  box-sizing: border-box;
  margin: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: all 0.3s ease;

  &:hover{
    transform: translateY(-5px);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
}

.educacao .logo{
  height: 200px;
}

.educacao-conteudo{
  margin-left: 10px;
}

.educacao-conteudo h3{
  font-size: 26px;
  font-weight: bold;
}

.educacao-conteudo h3:nth-child(2){
  margin-top: 7px;
  font-size: 20px;
}

.educacao-conteudo p{
  color: #ccc;
  font-size: 18px;
  margin-top: 7px;
}

.botoes{
  margin-top: 25px;
}

@media (max-width:1300px) {
  .educacao{
    width: 100%;
  }

  .educacao:not(:last-child){
    margin-bottom: 30px;
  }
}

@media (max-width:900px){
  .educacao{
    flex-flow: column nowrap;
    align-items: center;
  }

  .educacao .logo{
    height: auto;
    width: 100%;
    max-width: 250px;
  }

  .educacao-conteudo{
    width: 100%;
    margin-top: 10px;
    margin-left: 0px;
  }
}
</style>
