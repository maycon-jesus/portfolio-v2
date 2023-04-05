<template>
    <component
        :is="props.to ? 'NuxtLink' : 'button'"
        class="button text-button"
        :class="{
            'button-mobile': isMobile,
        }"
    >
        <slot name="default"></slot>
    </component>
</template>

<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router';
const { $viewport } = useNuxtApp();

const props = defineProps({
    to: {
        type: Object as PropType<RouteLocationRaw>,
    },
});

const isMobile = computed(() => $viewport.isLessThan('md'));
</script>

<style lang="scss" scoped>
.button {
    border: none;
    background: var(--accent);
    background: linear-gradient(to right, var(--accent), var(--secondary));
    color: var(--text-accent);
    padding: 1rem 2rem;
    border-radius: 999rem;
    cursor: pointer;

    &-mobile {
        padding: 0.75rem 1.5rem;
    }
}
</style>
