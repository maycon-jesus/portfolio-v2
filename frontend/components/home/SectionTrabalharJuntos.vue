<template>
  <div>
    <svg
      preserveAspectRatio="xMidYMax meet"
      class="svg-separator"
      viewBox="0 0 1600 100"
      style="display: block;"
      data-height="100"
    >
      <polygon class="" style="fill: #060708;" points="-40,63.667 19.833,3.833 80,64 140,4 200,64 260,4 320,64 380,4 440,64 500,4 560,64 620,4 680,64 740,4 800,64 860,4 920,64 980,4 1040,64 1100,4 1160,64 1220,4 1280.333,64.333 1340.333,4.333 1400,64 1460,4 1520,64 1578,6 1636,64 1636,104 -40,104 " />
      <polygon class="" style="opacity: 1;fill: #D72323;" points="-40,86 20,26 80,86 140,26 200,76 260,4 200,64 140,4 80,64 19.833,3.833 -40,63.667 " />
      <polygon class="" style="opacity: 1;fill: #D72323;" points="1159,69 1220,8 1281,73 1340,14 1399,73 1460,12 1521,73 1578,16 1634,72 1636,73.333 1636,64 1578,6 1520,64 1460,4 1400,64 1340.333,4.333 1280.333,64.333 1220,4 1160,64 1100,4 1040,64 1100,10 " /></svg>
    <section>
      <div>
        <p class="chamada">
          PRECISA DE UM PROGRAMADOR WEB?
        </p>
        <h4>
          <nuxt-link class="link" to="/contato">
            Vamos trabalhar juntos
            <svg class="icone-direita" viewBox="0 0 24 24">
              <path fill="currentColor" d="M4,10V14H13L9.5,17.5L11.92,19.92L19.84,12L11.92,4.08L9.5,6.5L13,10H4Z" />
            </svg>
          </nuxt-link>
        </h4>
      </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
section{
  padding: 35px 25px;
}

.svg-separator{
  background: #121417;
}

.chamada{
  font-family: "Space Mono";
  font-size: 18px;
  letter-spacing: 1.8px;
  text-align: center;
}

h4{
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  margin-top: 25px;
}

h4 .link{
  text-decoration: none;
  color: inherit;
  vertical-align: middle;
}

.icone-direita{
  height: 50px;
  vertical-align: middle;
  margin-bottom: 5px;
  margin-left: -5px;
}
</style>
