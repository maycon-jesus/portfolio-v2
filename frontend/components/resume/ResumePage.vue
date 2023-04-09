<template>
    <PrintPage class="resume-page">
        <div class="top-bar"></div>
        <div class="cols">
            <div class="col-1">
                <p>a</p>
                <p>a</p>
                <p>a</p>
                <p>a</p>
                <p>a</p>
                <p>a</p>
                <p>a</p>
            </div>
            <div class="col-2">
                <ResumeProfile
                    :contacts="props.personalInfo.contacts"
                    :address="props.personalInfo.address"
                    :role="props.personalInfo.role"
                />
            </div>
        </div>
    </PrintPage>
</template>

<script setup lang="ts">
import { IPersonalInfo } from '~~/types/personalInfo';

const props = defineProps<{
    personalInfo: IPersonalInfo;
}>();
</script>

<style lang="scss" scoped>
.resume-page {
    background-color: #fff;
    font-family: 'Nunito Sans', sans-serif;
}

.top-bar {
    height: 4px;
    background-color: #f5841a;
}

.cols {
    display: flex;
    flex-flow: row nowrap;

    .col-1 {
        width: 32%;
        background-color: #393e46;
    }

    .col-2 {
        width: 68%;
        padding: 50px 20px;
        box-sizing: border-box;
    }
}
</style>
