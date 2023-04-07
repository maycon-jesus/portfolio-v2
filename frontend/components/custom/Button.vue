<template>
    <component
        :is="rootComponent"
        :to="props.disabled ? undefined : props.to"
        :href="props.disabled ? undefined : props.href"
        :target="props.disabled ? undefined : props.target"
        class="button text-button"
        :class="{
            'button-mobile': isMobile,
            'button-with-icon': !!props.icon,
        }"
        :disabled="props.disabled"
    >
        <span class="text"
            ><Icon
                class="icon"
                v-if="props.icon"
                :name="props.icon"
                size="28"
                aria-hidden="true"
            ></Icon
            ><slot name="default"></slot
        ></span>
    </component>
</template>

<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router';
const { $viewport } = useNuxtApp();
const NuxtLink = resolveComponent('NuxtLink');

const props = defineProps({
    to: {
        type: Object as PropType<RouteLocationRaw>,
    },
    href: {
        type: String,
    },
    target: {
        type: String,
    },
    icon: {
        type: String,
        default: false,
    },
    disabled: {
        type: Boolean,
    },
});

const rootComponent = computed(() => {
    if (props.disabled) return 'button';
    if (props.to) return NuxtLink;
    if (props.href) return 'a';
    return 'button';
});
const isMobile = computed(() => $viewport.isLessThan('md'));
</script>

<style lang="scss" scoped>
.button {
    display: inline-block;
    border: none;
    background: var(--secondary-accent-gradient);
    color: var(--text-secondary-accent-gradient);
    border-radius: 999rem;
    cursor: pointer;
    transition: all 0.1s;
    text-decoration: none;
    padding: 16px 2rem;

    &-mobile {
        padding: 0.75rem 1.5rem;
    }

    &:hover:not([disabled]) {
        transform: scale(1.1);
    }

    &[disabled] {
        // cursor: lo;
        filter: saturate(0);
    }

    .icon {
        margin-right: 0.5rem;
    }

    .text {
        display: flex;
        align-items: center;
    }
}

.button-with-icon {
    padding: 9px 2rem;

    &.button-mobile {
        height: 38px;
        padding: 0 1.5rem;
    }
}
</style>
