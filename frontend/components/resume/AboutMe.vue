<template>
    <div class="comp-about-me">
        <div class="image">
            <nuxt-img src="/img/home/eu-h250.png" width="150"></nuxt-img>
        </div>
        <p class="title">Sobre mim</p>
        <p class="text">{{ props.text }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    text: string;
}>();
</script>

<style lang="scss" scoped>
.comp-about-me {
    padding: 17px 0 13px 0;
}

.title {
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
}

.text {
    margin-top: 13px;
    font-size: 12px;
    letter-spacing: 0.5px;
}

.image {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
}
</style>
