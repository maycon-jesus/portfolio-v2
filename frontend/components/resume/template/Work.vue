<template>
    <div class="work">
        <div class="left-items">
            <span class="org-name"
                ><strong>{{ props.work.org.name }}</strong></span
            >
            <span class="local">{{ props.work.local }}</span>
            <span class="date"
                >{{ props.work.startDate }} - {{ props.work.endDate }}</span
            >
        </div>
        <div class="divider"></div>
        <div class="right-items">
            <span class="role"
                ><strong>{{ props.work.role }}</strong></span
            >
            <span v-if="props.work.description" class="description">{{
                props.work.description
            }}</span>
            <div class="techs" v-if="props.work.skills.length > 0">
                <span
                    ><strong>Competências:</strong>
                    {{ props.work.skills.join(', ') }}.</span
                >
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IPersonalInfoWork } from '~/types/personalInfo';

const props = defineProps<{
    work: IPersonalInfoWork;
}>();
</script>

<style lang="scss" scoped>
.work {
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

    .org-name {
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

    .role {
        font-size: 14px;
    }

    .description,
    .techs {
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
