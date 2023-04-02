<template>
    <section>
        <div class="line"></div>
        <h1
            class="title"
            :class="{
                'text-h2': !isMobile,
                'text-h3': isMobile,
            }"
        >
            Sobre mim
        </h1>
    </section>
</template>

<script setup lang="ts">
const { $theme } = useNuxtApp();

const isMobile = $theme.breakpoints.smAndDown;
</script>

<style lang="scss" scoped>
section {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
}
.title {
    background: linear-gradient(to right, var(--accent), var(--secondary));
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
}

.line {
    height: 5px;
    width: 100%;
    background: linear-gradient(to right, var(--accent), var(--secondary));
}
</style>
