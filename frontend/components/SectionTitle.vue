<template>
    <div>
        <component
            :is="props.component ?? 'h2'"
            class="title"
            :class="{
                'text-h3': !isMobile,
                'text-h4': isMobile,
            }"
        >
            {{ props.title }}
        </component>
        <p v-if="props.description" class="text-h6 title-desc">
            {{ props.description }}
        </p>
    </div>
</template>

<script setup lang="ts">
const { $viewport } = useNuxtApp();
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: null,
    },
    component: {
        type: String,
    },
});

const isMobile = computed(() => $viewport.isLessThan('md'));
</script>

<style lang="scss" scoped>
.title {
    // background: linear-gradient(to right, var(--accent), var(--secondary));
    // background-clip: text;
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
    width: fit-content;
    text-align: center;
    border-radius: 0 0 20px 20px;
    padding-inline: 20px;
    padding-block: 5px;
    background-size: 100vw auto;
    background-position: center center;
    text-transform: uppercase;
    font-weight: bold;
    position: relative;
    margin: auto;
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
    background: var(--secondary-accent-gradient);
    color: var(--text-secondary-accent-gradient);
}

.title-desc {
    max-width: 44rem;
    text-align: center;
    color: var(--text-medium-background);
    margin: auto;
}
</style>
