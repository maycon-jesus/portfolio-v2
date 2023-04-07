<template>
    <component
        :is="props.to ? NuxtLink : 'button'"
        :to="props.to"
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
const NuxtLink = resolveComponent('NuxtLink')

const props = defineProps({
    to: {
        type: Object as PropType<RouteLocationRaw>,
        },
    });

const isMobile = computed(() => $viewport.isLessThan('md'));
</script>

<style lang="scss" scoped>
.button {
    display: inline-block;
    border: none;
    background: var(--secondary-accent-gradient);
    color: var(--text-secondary-accent-gradient);
    padding: 1rem 2rem;
    border-radius: 999rem;
    cursor: pointer;
    transition: all .1s;
    text-decoration: none;

    &-mobile {
        padding: 0.75rem 1.5rem;
    }

    &:hover{
        transform: scale(1.1);
    }
}
</style>
