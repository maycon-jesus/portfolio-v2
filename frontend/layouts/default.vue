<template>
    <div>
        <TemplateHeader />
        <main>
            <slot />
        </main>
        <footer>ccc</footer>
    </div>
</template>

<script setup>
import { useUiStateStore } from '~~/states/uistate.store';

const { body } = useUiStateStore();

useHead({
    bodyAttrs: {
        class: {
            'hide-scroll': body.hideScroll,
        },
    },
});
</script>
