<template>
    <div class="comp-personal-data">
        <p class="title">Dados pessoais</p>
        <div>
            <div class="item">
                <span class="item-title">Data de nascimento</span>
                <span class="item-content">{{ props.dateOfBirth }}</span>
            </div>
            <div class="item">
                <span class="item-title">Nacionalidade</span>
                <span class="item-content">{{ props.nationality }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    dateOfBirth: string;
    nationality: string;
}>();
</script>

<style lang="scss" scoped>
.comp-personal-data {
    padding: 17px 0 13px 0;
}

.title {
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
}

.item {
    display: flex;
    flex-flow: column nowrap;
    margin-top: 20px;
}

.item-title {
    font-size: 13px;
    font-weight: bold;
}

.item-content {
    font-size: 12px;
    letter-spacing: 0.5px;
    margin-top: 3px;
}
</style>
