<template>
    <v-expansion-panel title="Informações gerais">
        <v-expansion-panel-text>
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <v-text-field
                            label="Cargo"
                            :model-value="personalInfoResume.role"
                            @update:model-value="personalInfoResume.setRole"
                        ></v-text-field>
                        <v-row>
                            <v-col cols="12">
                                <p class="text-subtitle-2">Moradia</p>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6">
                                <v-text-field
                                    label="Cidade"
                                    :model-value="
                                        personalInfoResume.address.city
                                    "
                                    @update:model-value="
                                        personalInfoResume.setAddressCity
                                    "
                                ></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field
                                    label="Estado"
                                    :model-value="
                                        personalInfoResume.address.state
                                    "
                                    @update:model-value="
                                        personalInfoResume.setAddressState
                                    "
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-textarea
                                    :model-value="personalInfoResume.aboutMe"
                                    @update:model-value="
                                        personalInfoResume.setAboutMe
                                    "
                                    label="Sobre mim"
                                ></v-textarea>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>

<script setup lang="ts">
import { usePersonalInfoResumeStore } from '~/states/personal-info-resume';

const personalInfoResume = usePersonalInfoResumeStore();
</script>
