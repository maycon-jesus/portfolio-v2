<template>
    <div class="layout-wrapper">
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

<style scoped lang="scss">
.layout-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    main {
        flex-grow: 1;
    }
}
</style>
