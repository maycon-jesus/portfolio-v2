<template>
    <div class="works">
        <ResumeTemplateSectionTitle
            >Experiência profissional</ResumeTemplateSectionTitle
        >
        <div class="works-list">
            <ResumeTemplateWork
                v-for="(work, index) in props.works"
                :work="work"
                :key="index"
            ></ResumeTemplateWork>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IPersonalInfoWork } from '~/types/personalInfo';

const props = defineProps<{
    works: IPersonalInfoWork[];
}>();
</script>

<style lang="scss" scoped>
.works {
    padding: 15px 0px;

    .works-list {
        margin-top: 20px;
        padding: 0 10px;
    }
}
</style>
