<template>
    <h2><slot name="default"></slot></h2>
</template>

<style lang="scss" scoped>
h2{
    background: var(--secondary-accent-gradient);
    color: var(--text-secondary-accent-gradient);
    clip-path: polygon(7px 0, 100% 0%, calc(100% - 7px) 100%, 0% 100%);
    width: fit-content;
    padding: 5px 10px;
    font-size: 14px;
    font-weight: bold;
}
</style>