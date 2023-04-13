<template>
    <div class="skills">
        <ResumeTemplateSectionTitle>Competências / Skills</ResumeTemplateSectionTitle>
        <div class="skills-list">
            <ResumeSkillCard v-for="(skill,index) in props.skills" :skill="skill" :key="index"></ResumeSkillCard>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IPersonalInfoSkill } from '~/types/personalInfo';

const props = defineProps<{
    skills: IPersonalInfoSkill[]
}>()
</script>

<style lang="scss" scoped>

.skills{
    padding: 30px 0;
}
.skills-list{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 15px;
    margin-top: 15px;
}
</style>