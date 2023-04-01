<template>
    <nuxt-link
        class="link text-button"
        :to="$props.to"
        exact-active-class="link-active"
    >
        <span><slot name="default"></slot></span>
    </nuxt-link>
</template>

<script lang="ts" setup>
import { RouteLocationRaw } from 'vue-router';

const props = defineProps({
    to: {
        type: Object as PropType<RouteLocationRaw>,
        required: false,
    },
});
</script>

<style lang="scss" scoped>
.link {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    padding: 0px 12px;
    border-radius: 999rem;
    color: inherit;
    text-decoration: none;
    transition: all 0.1s;
    height: 38px;

    &:hover {
        background-color: var(--secondary);
        color: var(--text-secondary);
    }

    &-active {
        background-color: var(--accent);
        color: var(--text-accent);
    }
}
</style>
