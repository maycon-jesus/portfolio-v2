<template>
  <div class="title-area">
    <div class="title-content">
      <h2>{{ title }}</h2>
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
}

.bar{
  position: absolute;
  bottom: 0px;
  height: 7px;
  width: 65%;
  background: var(--primary);
}
</style>
