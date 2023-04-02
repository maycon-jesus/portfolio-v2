<template>
    <h2 class="title text-h3">{{ props.title }}</h2>
    <p v-if="props.description" class="text-h6 title-desc">
        {{ props.description }}
    </p>
</template>

<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: null,
    },
});
</script>

<style lang="scss" scoped>
.title {
    // background: linear-gradient(to right, var(--accent), var(--secondary));
    // background-clip: text;
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
    width: max-content;
    border-radius: 0 0 20px 20px;
    padding-inline: 20px;
    padding-block: 5px;
    background-size: 100vw auto;
    background-position: center center;
    text-transform: uppercase;
    font-weight: bold;
    position: relative;
    margin-bottom: 3.5rem;
}

.title::after {
    content: '';
    position: absolute;
    top: calc(100% + 1.5rem);
    left: 50%;
    transform: translateX(-50%);
    width: 3rem;
    height: 5px;
    border-radius: 999rem;
    background: linear-gradient(to right, var(--accent), var(--secondary));
}

.title-desc {
    margin: auto;
    max-width: 44rem;
    text-align: center;
    color: var(--text-medium-background);
}
</style>
