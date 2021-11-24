<template>
  <section class="background-gray">
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
          <img class="logo" src="images/logos/alura.jpg" alt="Logo da Alura">
          <div class="educacao-conteudo">
            <h3>Alura</h3>
            <h3>Diversos Cursos</h3>
            <p>Novembro 2021 - Agora</p>

            <div class="botoes">
              <a href="https://cursos.alura.com.br/user/mayconjesus07/fullCertificate/747c169810b63f3dd8564e83e2ea8a78" target="_blank" class="botao">Visualizar Certificado</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="veja-mais-div">
      <nuxt-link class="botao mx-auto" to="/educacao">
        Veja Mais
      </nuxt-link>
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
  padding: 50px 0;
}

.educacao-list{
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
}

.educacao{
  display: flex;
  flex-flow: row nowrap;
  padding: 15px;
  border-radius: 5px;
  background: var(--background-card);
  width: calc(50% - 15px);
  box-sizing: border-box;
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
</style>
