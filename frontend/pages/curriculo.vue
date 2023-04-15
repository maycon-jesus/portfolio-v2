<template>
    <div class="page-wrapper">
        <ResumePage class="resume-page" :personal-info="personalInfoResume" />
    </div>
</template>

<script setup lang="ts">
import { usePersonalInfoStore } from '~/states/personal-info';
import { IPersonalInfo } from '~~/types/personalInfo';
const personalInfo = usePersonalInfoStore();

definePageMeta({
    layout: 'clean',
});

const personalInfoResume = computed<IPersonalInfo>(() => {
    return {
        name: personalInfo.name,
        role: personalInfo.role,
        dateOfBirth: personalInfo.dateOfBirth,
        nationality: personalInfo.nationality,
        address: personalInfo.address,
        aboutMe: personalInfo.aboutMe,
        contacts: personalInfo.contactsForPage('resume'),
        skills: personalInfo.skillsForPage('resume'),
        works: personalInfo.works,
        trainings: personalInfo.trainings,
        languages: personalInfo.languages,
    };
});
</script>

<style lang="scss" scoped>
.page-wrapper {
    background-color: #ffffff;
    background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);
    padding: 20px;
    .resume-page {
        margin: auto;
    }
}

@media print {
    .page-wrapper {
        padding: 0;
    }
}
</style>
