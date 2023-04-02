<template>
    <div
        class="skill"
        :class="{
            [props.size]: true,
            'text-body-1': props.size === 'medium',
            'text-body-2': props.size === 'small',
        }"
    >
        <slot name="default"></slot>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

const props = defineProps({
    size: {
        type: String as PropType<'small' | 'medium'>,
        default: 'medium',
    },
});
</script>

<style lang="scss" scoped>
.skill {
    padding: 1rem 2rem;
    border-radius: 999rem;
    background: var(--background2);

    &.small {
        padding: 0.75rem 1.5rem;
    }
}
</style>
