<template>
    <section :class="{ mobile: isMobile }">
        <SectionTitle title="Experiência" component="h2"></SectionTitle>

        <div class="content">
            <ExperienceWorkCard v-for="(work, index) in personalInfo.works" :key="index" :work="work" />
        </div>
    </section>
</template>

<script setup>
import { usePersonalInfoStore } from '~/states/personal-info';

const personalInfo = usePersonalInfoStore();
const { $viewport } = useNuxtApp();
const isMobile = computed(() => $viewport.isLessThan('sm'));
</script>

<style lang="scss" scoped>
section {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 4rem 20px;

    &.mobile {
        padding: 2rem 20px;
    }

    .content {
        display: flex;
        flex-flow: column nowrap;
        gap: 2rem;
        max-width: 800px;
    }
}
</style>
