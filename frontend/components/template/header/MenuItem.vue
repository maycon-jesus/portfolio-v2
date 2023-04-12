<template>
    <nuxt-link
        class="link text-button"
        :class="{
            'link-active': active,
        }"
        :to="$props.to"
        :exact-active-class="props.activeByHash ? undefined : 'link-active'"
        @click="emits('click:link')"
    >
        <span><div class="bg"></div><slot name="default"></slot></span>
    </nuxt-link>
</template>

<script lang="ts" setup>
import { RouteLocationRaw, RouteLocationNamedRaw } from 'vue-router';
const route = useRoute();

const props = withDefaults(
    defineProps<{
        to: RouteLocationRaw;
        activeByHash: boolean;
    }>(),
    {
        activeByHash: false,
    },
);

const emits = defineEmits<{
    (e: 'click:link'): void;
}>();

const active = ref(false);

const updateActive = () => {
    if (props.activeByHash && props.to && typeof props.to === 'object') {
        const propsTo = props.to as RouteLocationNamedRaw;
        let isActive = true;
        const propsRouteHash = props.to.hash || '';
        if (propsRouteHash != route.hash) isActive = false;
        if (propsTo.name != route.name) isActive = false;
        active.value = isActive;
    }
};

onMounted(() => {
    updateActive();
});
watch(route, () => {
    updateActive();
});
</script>

<style lang="scss" scoped>
.link {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    padding: 0px 12px;
    border-radius: 999rem;
    color: inherit;
    text-decoration: none;
    transition: all 0.1s;
    height: 38px;

    .bg{
        width: 0;
    }

    &-active,
    &:hover {
        .bg{
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            z-index: -1;
            background: var(--accent);
            color: var(--text-accent);
            border-radius: 999rem;
        }
    }
}
</style>