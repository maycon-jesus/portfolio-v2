<template>
    <div class="page-wrapper">
        <div class="pa-5 hide-on-print">
            <v-expansion-panels>
                <ResumeAdminConfigGeneral />
                <ResumeAdminConfigSkills />
                <ResumeAdminConfigWorks />
                <ResumeAdminConfigTrainings />

                <!-- Skills -->
            </v-expansion-panels>
        </div>
        <ResumePage
            class="resume-page"
            :personal-info="personalInfoResume"
        />
    </div>
</template>

<script setup lang="ts">
import { usePersonalInfoResumeStore } from '~/states/personal-info-resume';
import { IPersonalInfo } from '~~/types/personalInfo';
const personalInfo = usePersonalInfoResumeStore();

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
        contacts: personalInfo.contactsForResume,
        skills: personalInfo.skillsForResume,
        works: personalInfo.works,
        languages: personalInfo.languages,
        trainings: personalInfo.trainings,
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

    .hide-on-print {
        display: none;
    }
}
</style>
