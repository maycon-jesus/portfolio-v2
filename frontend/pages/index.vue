<template>
    <HomeSectionHome></HomeSectionHome>
</template>

<script setup>
import ExpandTransitionY from '~~/components/custom/ExpandTransitionY.vue';

const a = ref(false);

const teste = () => (a.value = !a.value);
</script>
