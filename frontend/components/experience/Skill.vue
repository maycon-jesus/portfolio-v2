<template>
    <div
        class="skill"
        :style="{
            '--progress-color': props.progressColor,
            '--label-color': props.progressColor,
        }"
    >
        <component
            class="icon"
            :is="props.docsUrl ? 'a' : 'div'"
            :href="props.docsUrl"
            :target="props.docsUrl ? '_blank' : undefined"
            :aria-label="`Abrir site oficial do(a) ${props.label}`"
        >
            <div class="icon-wrapper">
                <nuxt-icon :name="'logos/' + props.icon" filled />
            </div>
        </component>
        <div class="content">
            <span class="skill-name text-button">{{ props.label }}</span>
            <div class="skill-bar">
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
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    docsUrl: {
        type: String,
    },
    progressColor: {
        type: String,
        required: true,
    },
    xpLevel: {
        type: Number,
        required: true,
    },
});
</script>

<style lang="scss" scoped>
.skill {
    display: flex;
    flex-flow: row nowrap;
    transition: all 0.1s;
    // filter: saturate(0);

    &:hover .icon-wrapper {
        transform: scale(1.2);
    }

    &:hover {
        transform: scale(1.05);

        .skill-name {
            color: var(--label-color);
        }

        .skill-bar .active {
            background-color: var(--progress-color);
        }
    }
}

.icon {
    font-size: 32px;
    padding: 1rem;
    border-radius: 999rem;
    background: var(--background2);
    width: 64px;
    height: 64px;
    box-sizing: border-box;
    .icon-wrapper {
        transition: all 0.1s;
    }
}

.content {
    padding: 10px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    gap: 10px;
}

.skill-name {
    color: #fff;
    color: var(--label-color);
    font-weight: bold;
    line-height: normal;
}

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
