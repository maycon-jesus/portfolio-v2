<template>
    <PrintPage class="resume-page">
        <div class="top-bar"></div>
        <div class="cols">
            <div class="col-1">
                <ResumeAboutMe :text="props.personalInfo.aboutMe" />
                <hr />
            </div>
            <div class="col-2">
                <ResumeProfile
                    :contacts="props.personalInfo.contacts"
                    :address="props.personalInfo.address"
                    :role="props.personalInfo.role"
                />
                <ResumeSkills :skills="props.personalInfo.skills"/>
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
    display: flex;
    flex-flow: column nowrap;
}

.top-bar {
    height: 4px;
    background-color: #f5841a;
}

.cols {
    display: flex;
    flex-flow: row nowrap;
    flex-grow: 1;

    .col-1 {
        width: 32%;
        box-sizing: border-box;
        background-color: #393e46;
        color: #fff;
        padding: 23px 27px;
    }

    .col-2 {
        width: 68%;
        padding: 50px 20px;
        box-sizing: border-box;
    }
}
</style>
