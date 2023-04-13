<template>
    <div class="skill">
        <div class="icon-wrapper"><nuxt-icon :name="'logos/'+props.skill.icon" filled></nuxt-icon></div>
        <p class="skill-name">{{props.skill.label}}</p>
    </div>
</template>

<script setup lang="ts">
import { IPersonalInfoSkill } from '~/types/personalInfo';

const props = defineProps<{
    skill: IPersonalInfoSkill
}>()
</script>

<style lang="scss" scoped>
.skill{
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 100%;

    .icon-wrapper{
        font-size: 24px;
    }

    .skill-name{
        font-size: 12px;
        text-align: center;
        margin-top: 3px;
    }
}
</style>