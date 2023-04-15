<template>
    <div class="trainings">
        <ResumeTemplateSectionTitle>Formação</ResumeTemplateSectionTitle>
        <div class="trainings-list">
            <ResumeTemplateTraining
                v-for="(work, index) in props.trainings"
                :training="work"
                :key="index"
            ></ResumeTemplateTraining>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IPersonalInfoTraining } from '~/types/personalInfo';

const props = defineProps<{
    trainings: IPersonalInfoTraining[];
}>();
</script>

<style lang="scss" scoped>
.trainings {
    padding: 15px 0px;

    .trainings-list {
        margin-top: 20px;
        padding: 0 10px;
    }
}
</style>
