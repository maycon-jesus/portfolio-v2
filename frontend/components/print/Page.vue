<template>
    <div class="page">
        <slot name="default"></slot>
    </div>
</template>

<style lang="scss" scoped>
.page {
    width: 210mm;
    min-height: 296.5mm;
    max-width: 100vw;
    print-color-adjust: exact;
    overflow: hidden;
}
</style>
