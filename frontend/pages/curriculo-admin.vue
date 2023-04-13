<template>
    <div class="page-wrapper">
        <div class="pa-5">
            <v-expansion-panels>
                <v-expansion-panel
                    title="Informações gerais"
                >
                <v-expansion-panel-text>
                    <v-container >
                        <v-row>
                            <v-col cols="12">
                                <v-text-field label="Cargo" v-model="personalInfoCustom.role"></v-text-field>
                                <v-row>
                                    <v-col cols="12">
                                        <p class="text-subtitle-2">Moradia</p>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="6">
                                        <v-text-field label="Cidade" v-model="personalInfoCustom.address.city"></v-text-field>
                                    </v-col>
                                    <v-col cols="6">
                                <v-text-field label="Estado" v-model="personalInfoCustom.address.state"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
        <ResumePage class="resume-page" :personal-info="personalInfoResume" />
    </div>
</template>

<script setup lang="ts">
import { usePersonalInfoStore } from '~/states/personal-info';
import { IPersonalInfo } from '~~/types/personalInfo';
const personalInfo = usePersonalInfoStore();
const personalInfoCustom = ref(personalInfo);

definePageMeta({
    layout: 'clean',
});

const personalInfoResume = computed<IPersonalInfo>(() => {
    return {
        name: personalInfo.name,
        role: personalInfoCustom.value.role,
        address: personalInfo.address,
        aboutMe: personalInfo.aboutMe,
        contacts: personalInfo.contactsForPage('resume'),
        skills: personalInfo.skillsForPage('resume'),
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
