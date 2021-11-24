<template>
  <header>
    <nuxt-link to="/" class="remove-style-link">
      <h1><span class="text-bold">Maycon</span> Jesus</h1>
    </nuxt-link>
    <button class="botao-abrir-menu" @click="navOpen=true">
      <svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
      </svg>
    </button>
    <nav :class="{open:navOpen}">
      <button class="botao-fechar-menu" :class="{open:navOpen}" @click="navOpen=false">
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M5,13L9,17L7.6,18.42L1.18,12L7.6,5.58L9,7L5,11H21V13H5M21,6V8H11V6H21M21,16V18H11V16H21Z" />
        </svg>
      </button>
      <ul>
        <li>
          <nuxt-link to="#sobre" class="link">
            Sobre
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="#competencias" class="link">
            Competências
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="#projetos" class="link">
            Projetos
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="#apresentacao" class="botao link text-bold">
            Contato
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data () {
    return {
      navOpen: false
    }
  }
}
</script>

<style scoped>
header{
  height: 84px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0 50px;
  position: sticky;
  top: 0px;
  background-color: #060708;
  z-index: 999;
}

.remove-style-link{
  text-decoration: none;
  color: inherit;
}

h1{
 font-size: 24px;
 flex-shrink: 0;
}

nav{
  margin-left: auto;
  z-index: 999;
}

nav ul{
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

nav ul li:nth-child(1n+2){
  margin-left: 20px;
}

nav ul li a{
  font-size: 20px;
  color: #fff;
  text-decoration: none;
}

.botao-abrir-menu{
  background: transparent;
  padding: 5px;
  border: none;
  color: inherit;
  margin-left: auto;
  display: none;
  cursor: pointer;
}

.botao-abrir-menu svg{
  height: 32px;
}

.botao-fechar-menu{
  position: fixed;
  background: transparent;
  padding: 5px;
  border: none;
  color: inherit;
  margin-left: auto;
  display: none;
  right: 298px;
  top: 100px;
  background: #121417;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: 2px solid var(--primary);
  border-right: none;
  cursor: pointer;
}

.botao-fechar-menu svg{
  height: 32px;
}

@media (max-width: 800px) {
  .botao-abrir-menu{
    display: block;
  }

  .botao-fechar-menu{
    display: block;
    right: -300px;
    transition: right 0.3s ease;
  }

  .botao-fechar-menu.open{
    right: 298px;
  }

  nav{
    position: fixed;
    top: 0px;
    right: -300px;
    height: 100%;
    width: 300px;
    background: #121417;
    box-sizing: border-box;
    padding: 25px;
    border-left: 2px solid var(--primary);
    transition: right 0.3s ease;
  }

  nav.open{
    right: 0px;
  }

  nav ul{
    flex-flow: column nowrap;
    justify-content: center;
    height: 100%;
  }

  nav ul li:nth-child(1n+1){
    margin-left: 0;
    width: 100%;
    text-align: center;
  }

  nav ul li:nth-child(1n+2){
    margin-top: 10px;
  }

  nav ul li .link{
    padding: 12px 0;
    display: block;
  }
}
</style>
