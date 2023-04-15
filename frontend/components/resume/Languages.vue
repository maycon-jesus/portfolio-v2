<template>
    <div class="comp-languages">
        <p class="title">Idiomas</p>
        <div>
            <div
                class="item"
                v-for="(language, index) in props.languages"
                :key="index"
            >
                <span class="item-title">{{ language.name }}</span>
                <span class="item-content">{{ language.level }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IPersonalInfoLanguage } from '~/types/personalInfo';

const props = defineProps<{
    languages: IPersonalInfoLanguage[];
}>();
</script>

<style lang="scss" scoped>
.comp-languages {
    padding: 17px 0 13px 0;
}

.title {
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
}

.item {
    display: flex;
    flex-flow: column nowrap;
    margin-top: 20px;
}

.item-title {
    font-size: 13px;
    font-weight: bold;
}

.item-content {
    font-size: 12px;
    letter-spacing: 0.5px;
    margin-top: 3px;
}
</style>
