<template>
    <div
        class="skill-bar"
        :style="{
            '--progress-color': props.progressColor,
        }"
    >
        <div
            class="level1"
            :class="{
                active: props.xpLevel >= 1,
            }"
        ></div>
        <div
            class="level2"
            :class="{
                active: props.xpLevel >= 2,
            }"
        ></div>
        <div
            class="level3"
            :class="{
                active: props.xpLevel >= 3,
            }"
        ></div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    xpLevel: number;
    progressColor: string;
}>();
</script>

<style scoped lang="scss">
.skill-bar {
    height: 10px;
    width: 200px;
    display: flex;

    .level1 {
        width: 30%;
        height: 100%;
        clip-path: polygon(0 0, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
        border-top-left-radius: 999rem;
        border-bottom-left-radius: 999rem;
        background-color: var(--background2);
    }

    .level2 {
        width: 40%;
        height: 100%;
        clip-path: polygon(8px 0, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
        background-color: var(--background2);
    }

    .level3 {
        width: 30%;
        height: 100%;
        clip-path: polygon(8px 0, 100% 0%, 100% 100%, 0% 100%);
        background-color: var(--background2);
        border-top-right-radius: 999rem;
        border-bottom-right-radius: 999rem;
    }

    .level1,
    .level2,
    .level3 {
        &.active {
            background-color: #fff;
            background-color: var(--progress-color);
        }
    }
}
</style>
