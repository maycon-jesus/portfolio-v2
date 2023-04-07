<template>
    <div class="contact">
        <div class="icon-wrapper">
            <Icon size="40" :name="props.icon"></Icon>
        </div>
        <span class="text-button contact-name">{{ name }}</span>
        <a class="text-body-1 contact-link" :href="props.url" target="_blank">{{
            props.urlLabel || props.url
        }}</a>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    urlLabel: {
        type: String,
        required: false,
    },
});
</script>

<style scoped lang="scss">
.contact {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    transition: all 0.3s;

    .icon-wrapper {
        padding: 1rem;
        border-radius: 999rem;
        background: var(--background2);
        color: var(--text-background2);
    }

    .contact-name {
        margin-top: 1rem;
        color: var(--accent);
    }

    .contact-link {
        margin-top: 1rem;
        color: inherit;
        text-decoration: none;

        &::after {
            content: '';
            display: block;
            height: 2px;
            width: 85%;
            border-radius: 999rem;
            background: var(--secondary);
            margin: 7px auto 0 auto;
        }
    }

    &:hover {
        transform: scale(1.1);
    }
}
</style>
