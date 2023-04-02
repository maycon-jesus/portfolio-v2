<template>
    <component
        :is="props.to ? 'NuxtLink' : 'button'"
        class="button text-button"
    >
        <slot name="default"></slot>
    </component>
</template>

<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router';

const props = defineProps({
    to: {
        type: Object as PropType<RouteLocationRaw>,
    },
});
</script>

<style lang="scss" scoped>
.button {
    border: none;
    background: var(--accent);
    color: var(--text-accent);
    padding: 1rem 2rem;
    border-radius: 999rem;
    cursor: pointer;
}
</style>
