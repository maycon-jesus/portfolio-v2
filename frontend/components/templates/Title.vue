<template>
  <div class="title-area">
    <div class="title-content">
      <h2>{{ title }}</h2>
      <p v-show="description" class="description">
        {{ description }}
      </p>
      <div class="bar" aria-hidden="true" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>
.title-area{
  display: inline-block;
  width: 100%;
}

.title-content{
  position: relative;
  width: fit-content;
  padding-bottom: 12px;
  margin: 0 auto 50px auto;
}

h2{
  font-size: 40px;
  font-weight: bold;
  display: inline-block;
  width: 100%;
  text-align: center;
  margin-bottom: 4px;
}

p.description{
  margin: 4px 0;
  text-align: center;
  /* display: inline-block; */
  width: 100%;
}

.bar{
  position: absolute;
  bottom: 0px;
  height: 7px;
  width: 65%;
  background: var(--primary);
  left: 50%;
  transform: translateX(-50%);
}
</style>
