<template>
  <div>
    <div class="divider donotcross">
      <h2>
        Página em contrução
      </h2>
      <p>Você pode falar comigo através das redes sociais abaixo!</p>
    </div>
    <Index />
  </div>
</template>

<script>
import Index from './index.vue'
export default {
  components: { Index }
}
</script>

<style scoped lang="scss">
h2{
  text-transform: uppercase;
  font-weight: bold;
  font-size: 30px;
}

.divider p{
  font-size: 20px;
}

.divider {
  display: flex;
  flex-flow: column nowrap;

  &:before,
  &:after {
    content: "";
    flex: 1;
  }
}

.donotcross {
  overflow: hidden;
  align-items: center;
  background: hsl(50, 100%, 50%);
  color: black;
  line-height: 2em;
  padding: 25px;
}
</style>
