<template>
    <div class="training">
        <div class="left-items">
            <span class="school-name"
                ><strong>{{ props.training.school.name }}</strong></span
            >
            <span class="local">{{ props.training.local }}</span>
            <span class="date"
                >{{ props.training.startDate }} -
                {{ props.training.endDate }}</span
            >
        </div>
        <div class="divider"></div>
        <div class="right-items">
            <span class="title"
                ><strong>{{ props.training.title }}</strong></span
            >
            <span v-if="props.training.description" class="description">{{
                props.training.description
            }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IPersonalInfoTraining } from '~/types/personalInfo';

const props = defineProps<{
    training: IPersonalInfoTraining;
}>();
</script>

<style lang="scss" scoped>
.training {
    display: grid;
    grid-template-columns: 150px auto;
    position: relative;
}
.left-items {
    display: flex;
    flex-flow: column nowrap;
    font-size: 13px;
    padding: 0px 20px 25px 0px;
    color: #636466;

    .school-name {
        color: #242424;
        font-size: 14px;
    }

    .local,
    .date {
        margin-top: 2px;
    }
}

.right-items {
    display: flex;
    flex-flow: column nowrap;
    font-size: 13px;
    padding-bottom: 25px;
    padding-left: 20px;

    .title {
        font-size: 14px;
    }

    .description {
        margin-top: 10px;
        color: #636466;
    }
}

.divider {
    position: absolute;
    left: 150px;
    width: 1px;
    height: 100%;
    background-color: #242424;

    &::before {
        position: absolute;
        content: '';
        top: 0;
        left: 100%;
        transform: translateX(-50%);
        border-radius: 999rem;
        height: 13px;
        width: 13px;
        background-color: #242424;
    }
}
</style>
