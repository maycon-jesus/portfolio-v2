<template>
    <section>
        <SectionTitle title='Experiência' component='h2'></SectionTitle>

        <div class='content'>
            <ExperienceWorkCard v-for='(work, index) in personalInfo.works' :key='index' :work='work' />
        </div>
    </section>
</template>

<script setup>
import { usePersonalInfoStore } from '~/states/personal-info';

const personalInfo = usePersonalInfoStore();
</script>

<style lang='scss' scoped>
@use "assets/scss/breakpoints" as breakpoints;

section {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 4rem 20px;

    @media (max-width: breakpoints.$xs-end) {
        & {
            padding: 2rem 20px;
        }
    }

    .content {
        display: flex;
        flex-flow: column nowrap;
        gap: 2rem;
        max-width: 800px;
    }
}
</style>
