<template>
    <v-expansion-panel title="Competências / Skills">
        <v-expansion-panel-text>
            <v-container>
                <draggable
                    v-model="personalInfoResume.skills"
                    class="d-flex flex-wrap"
                >
                    <template #item="{ element: skill }">
                        <v-col cols="3">
                            <v-row class="flex-nowrap" align="center">
                                <v-col cols="auto">
                                    <v-checkbox
                                        v-model="skill.visibility"
                                        value="resume"
                                        hide-details
                                        :id="`checkbox-${skill.label}`"
                                    >
                                    </v-checkbox>
                                </v-col>
                                <v-col cols="auto">
                                    <label :for="`checkbox-${skill.label}`">
                                        <nuxt-icon
                                            :name="'logos/' + skill.icon"
                                            filled
                                            :style="{
                                                fontSize: '32px',
                                            }"
                                            class="mr-2"
                                        ></nuxt-icon>
                                        {{ skill.label }}
                                    </label>
                                </v-col>
                            </v-row>
                        </v-col>
                    </template>
                </draggable>
            </v-container>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>

<script setup>
import draggable from 'vuedraggable';
import { usePersonalInfoResumeStore } from '~/states/personal-info-resume';

const personalInfoResume = usePersonalInfoResumeStore();
</script>
