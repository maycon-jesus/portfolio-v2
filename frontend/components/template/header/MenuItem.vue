<template>
    <nuxt-link
        class="link text-button"
        :to="$props.to"
        exact-active-class="link-active"
        @click="emits('click:link')"
    >
        <span><div class="bg"></div><slot name="default"></slot></span>
    </nuxt-link>
</template>

<script lang="ts" setup>
import { RouteLocationRaw, RouteLocationNamedRaw } from 'vue-router';
defineProps<{
        to: RouteLocationRaw;
    }>()

const emits = defineEmits<{
    (e: 'click:link'): void;
}>();
</script>

<style lang="scss" scoped>
.link {
    position: relative;
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
    line-height: normal;

    .bg{
        width: 0;
    }

    &-active,
    &:hover {
        .bg{
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            z-index: -1;
            background: var(--accent);
            color: var(--text-accent);
            border-radius: 999rem;
        }
    }
}
</style>