<template>
    <div class="skills-group" :class="{ mobile: isMobile, tablet: isTablet }">
        <h2 class="text-h5">
            <!-- <div aria-hidden="true" class="title-bar"></div> -->
            {{ props.title }}
        </h2>
        <div class="skills-list">
            <ExperienceSkill
                v-for="(skill, index) in props.skills"
                :key="index"
                :label="skill.label"
                :icon="skill.icon"
                :docs-url="skill.docsUrl"
                :progress-color="skill.colors.progress"
                :label-color="skill.colors.progress"
                :xp-level="skill.xpLevel"
            ></ExperienceSkill>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string;
    skills: {
        label: string;
        icon: string;
        xpLevel: number;
        docsUrl: string;
        colors: {
            progress: string;
            label: string;
        };
    }[];
}>();
const { $viewport } = useNuxtApp();
const isMobile = computed(() => $viewport.isLessThan('md'));
const isTablet = computed(() => $viewport.match('md'));
</script>

<style lang="scss" scoped>
h2 {
    background: var(--secondary-accent-gradient);
    color: var(--text-secondary-accent-gradient);
    clip-path: polygon(15px 0, 100% 0%, calc(100% - 15px) 100%, 0% 100%);
    width: fit-content;
    padding: 5px 20px;
}
.skills-group {
    // background: var(--background2);
    border-radius: 25px;
}

.skills-list {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 284px);
    gap: 1rem;
    padding: 25px;
}

.mobile {
    .skills-list {
        grid-template-columns: repeat(1, 284px);
        width: 284px;
    }
}

.tablet {
    .skills-list {
        grid-template-columns: repeat(2, 284px);
    }
}
</style>
