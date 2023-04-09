<template>
    <div class="comp-about-me">
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
}

.text {
    margin-top: 13px;
    font-size: 12px;
    letter-spacing: 0.5px;
}
</style>
