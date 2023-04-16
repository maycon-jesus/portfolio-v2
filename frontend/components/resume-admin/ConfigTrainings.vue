<template>
    <v-expansion-panel title="Formação">
        <v-expansion-panel-text>
            <v-container>
                <v-row
                    v-for="training in personalInfo.trainings"
                    :key="training.id"
                    align="center"
                >
                    <v-col cols="auto">
                        <v-checkbox
                            :model-value="!!personalInfoResume.trainings.find((t) => t.id === training.id)"
                            hide-details
                            :id="`checkbox-work-${training.id}`"
                            @update:model-value="updateTrainingVisibility(training, $event)"
                        >
                        </v-checkbox>
                    </v-col>
                    <v-col cols="auto">
                        <label :for="`checkbox-work-${training.id}`">
                            <span class="d-block text-body-1"
                                >Escola: {{ training.school.name }} - ({{ training.startDate }} -
                                {{ training.endDate }})</span
                            >
                            <span class="d-block text-subtitle-1">Titulo: {{ training.title }}</span>
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
import { IPersonalInfoTraining, IPersonalInfoWork } from '~/types/personalInfo';

const personalInfo = usePersonalInfoStore();
const personalInfoResume = usePersonalInfoResumeStore();

const updateTrainingVisibility = (training: IPersonalInfoTraining, visible: boolean) => {
    if (!visible) {
        personalInfoResume.removeTraining(training.id);
    } else {
        personalInfoResume.addTraining(training);
    }
};
</script>
