<template>
    <slot name="true" v-if="isBot"></slot>
    <slot name="false" v-else></slot>
</template>

<script setup lang="ts">
const isBot = ref(false);
const botRegex = /bot|googlebot|crawler|spider|robot|crawling|Lighthouse/i;

const { 'user-agent': userAgentHead } = useRequestHeaders(['user-agent']);
if (userAgentHead) {
    if (botRegex.test(userAgentHead)) {
        isBot.value = true;
    } else {
        isBot.value = false;
    }
} else {
    if (botRegex.test(navigator.userAgent)) {
        isBot.value = true;
    } else {
        isBot.value = false;
    }
}
</script>
