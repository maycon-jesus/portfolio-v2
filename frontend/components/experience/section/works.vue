<template>
    <section :class="{ mobile: isMobile }">
        <SectionTitle title="Experiência" component="h2"></SectionTitle>

        <div class="content">
            <ExperienceWorkCard
                v-for="(work, index) in works"
                :key="index"
                :name="work.name"
                :role="work.role"
                :techs="work.techs"
                :logo-url="work.logoUrl"
                :org-url="work.orgUrl"
                :start-date="work.startDate"
                :end-date="work.endDate"
            />
        </div>
    </section>
</template>

<script setup>
import works from '~/assets/data/works.json';
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
