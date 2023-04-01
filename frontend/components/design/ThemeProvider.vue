<template>
    <div :class="{
        [themeStore.currentTheme.cssClass]: true
    }">
        <slot name="default"></slot>
    </div>
</template>

<script setup>
import { useThemeStore } from '~~/states/theme.store'

const themeStore = useThemeStore()
</script>

<style lang="scss">
@import "~/assets/scss/themes.scss";
</style>
