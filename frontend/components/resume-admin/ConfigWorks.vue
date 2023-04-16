<template>
    <v-expansion-panel title="Experiência profissional">
        <v-expansion-panel-text>
            <v-container>
                <v-row
                    v-for="work in personalInfo.works"
                    :key="work.id"
                    align="center"
                >
                    <v-col cols="auto">
                        <v-checkbox
                            :model-value="!!personalInfoResume.works.find((w) => w.id === work.id)"
                            hide-details
                            :id="`checkbox-work-${work.id}`"
                            @update:model-value="updateWorkVisibility(work)($event)"
                        >
                        </v-checkbox>
                    </v-col>
                    <v-col cols="auto">
                        <label :for="`checkbox-work-${work.id}`">
                            <span class="d-block text-body-1"
                                >Empresa: {{ work.org.name }} - ({{ work.startDate }} - {{ work.endDate }})</span
                            >
                            <span class="d-block text-subtitle-1">Cargo: {{ work.role }}</span>
                        </label>
                    </v-col>
                </v-row>
            </v-container>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>

<script setup lang="ts">
import { usePersonalInfoStore } from '~/states/personal-info';
import { usePersonalInfoResumeStore } from '~/states/personal-info-resume';
import { IPersonalInfoWork } from '~/types/personalInfo';

const personalInfo = usePersonalInfoStore();
const personalInfoResume = usePersonalInfoResumeStore();

const updateWorkVisibility = (work: IPersonalInfoWork) => {
    return (visible: boolean) => {
        if (!visible) {
            personalInfoResume.removeWork(work.id);
        } else {
            personalInfoResume.addWork(work);
        }
    };
};
</script>
