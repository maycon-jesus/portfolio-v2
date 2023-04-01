<template>
    <div
        class="expand-transition-y"
        :style="{
            height: modelValue ? elementSize.height.value + 'px' : '0px',
        }"
    >
        <div ref="element">
            <slot name="default"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
const element = ref(null);
const elementSize = useElementSize(element);

const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true,
    },
});

const emits = defineEmits<{
    (e: 'update:modelValue', modelValue: Boolean): void;
}>();

const modelValue = ref(props.modelValue || false);

watch(
    () => props.modelValue,
    (nValue) => {
        modelValue.value = nValue;
    },
);

watch(
    () => modelValue.value,
    (nValue) => {
        emits('update:modelValue', nValue);
    },
);
</script>

<style lang="scss" scoped>
.expand-transition-y {
    transition: all 0.3s;
    overflow: hidden;
}
</style>
