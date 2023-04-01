<template>
    <div>
        <slot name="activator"></slot>
        <Teleport to="body">
            <div
                class="drawer"
                :class="{
                    'drawer-open': drawerStateOpen === 'open',
                    'drawer-closed': drawerStateOpen === 'closed',
                }"
            >
                <div class="drawer-background" @click="closeModal"></div>
                <div class="drawer-content drawer-content-right">
                    <slot name="default"></slot>
                </div>
            </div>
        </Teleport>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    modelValue: Boolean,
});

const emits = defineEmits<{
    (e: 'update:modelValue', modelValue: Boolean): void;
}>();

const modelValue = ref(props.modelValue || false);
const drawerStateOpen = ref<null | 'open' | 'closed'>(null);

if (modelValue.value) {
    drawerStateOpen.value = 'open';
}

watch(
    () => props.modelValue,
    () => {
        modelValue.value = props.modelValue;
    },
);

watch(
    () => modelValue.value,
    () => {
        drawerStateOpen.value = modelValue.value ? 'open' : 'closed';
        emits('update:modelValue', modelValue.value);
    },
);

const closeModal = () => {
    modelValue.value = false;
};
</script>

<style lang="scss" scoped>
.drawer {
    @keyframes showBackground {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes hideBackground {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    $animationDuration: 0.3s;
    position: fixed;
    height: 100%;
    width: 100%;
    visibility: hidden;
    z-index: 1000;

    .drawer-background {
        background-color: rgba(0, 0, 0, 0.2);
        position: fixed;
        height: 100%;
        width: 100%;
    }

    .drawer-content {
        position: fixed;
        height: 100%;
        transition: all $animationDuration;

        &.drawer-content-right {
            right: -100%;
        }

        &.drawer-content-left {
            left: -100%;
        }
    }

    &.drawer-open {
        visibility: visible;

        .drawer-background {
            animation: showBackground $animationDuration forwards;
        }

        .drawer-content {
            &.drawer-content-right {
                right: 0px;
            }

            &.drawer-content-left {
                left: 0px;
            }
        }
    }

    &.drawer-closed {
        transition: visibility 0s $animationDuration;
        visibility: hidden;

        .drawer-background {
            animation: hideBackground $animationDuration forwards;
        }
    }
}
</style>
