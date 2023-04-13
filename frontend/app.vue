<template>
    <NuxtLayout>
        <NuxtPage></NuxtPage>
    </NuxtLayout>
</template>

<style>
::view-transition-old(root) {
    animation: none;
    opacity: 0;
}
::view-transition-new(root) {
    animation: none;
    opacity: 1;
}
</style>