<template>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>pagina</div>
    <div>
        <ExpandTransitionY :model-value="a">
            <div>aaaaa</div>
            <div>aaaaa</div>
            <div>aaaaa</div>
            <div>aaaaa</div>
            <div>aaaaa</div>
            <div>aaaaa</div>
        </ExpandTransitionY>
    </div>
    <div @click="teste">
        <p>XS: {{ $theme.breakpoints.xsOnly }}</p>
        <p>SM: {{ $theme.breakpoints.smOnly }}</p>
        <p>MD: {{ $theme.breakpoints.mdOnly }}</p>
        <p>LG: {{ $theme.breakpoints.lgOnly }}</p>
        <p>XL: {{ $theme.breakpoints.xlOnly }}</p>
    </div>
</template>

<script setup>
import ExpandTransitionY from '~~/components/custom/ExpandTransitionY.vue';

const a = ref(false);

const teste = () => (a.value = !a.value);
</script>
