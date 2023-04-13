<template>
    <div class="profile">
        <div class="info">
            <h1 class="title">Maycon<br />Jesus Pinto</h1>
            <h2 class="role">{{ props.role }}</h2>
        </div>
        <div class="socials">
            <a
                v-if="props.address"
                class="social"
                :href="props.address.url"
                target="_blank"
            >
                <div class="icon-wrapper">
                    <Icon name="material-symbols:location-on-outline"></Icon>
                </div>
                <div class="content">
                    {{ props.address.city }}, {{ props.address.state }}
                </div>
            </a>
            <component
                class="social"
                v-for="(contact, index) in props.contacts"
                :is="contact.url ? 'a' : 'div'"
                :key="index"
                :href="contact.url"
                :target="contact.url ? '_blank' : undefined"
            >
                <div class="icon-wrapper">
                    <Icon :name="contact.icon"></Icon>
                </div>
                <div class="content">
                    {{ contact.labelVariants?.resume || contact.label }}
                </div>
            </component>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    IPersonalInfoAddress,
    IPersonalInfoContact,
} from '~~/types/personalInfo';

const props = withDefaults(
    defineProps<{
        contacts?: IPersonalInfoContact[];
        address?: IPersonalInfoAddress;
        role: string;
    }>(),
    {
        contacts: () => [],
    },
);
</script>

<style lang="scss" scoped>
.profile {
    display: flex;
    flex-flow: row nowrap;

    .info {
        flex-grow: 1;

        .title {
            font-weight: bold;
            font-size: 31px;
            line-height: 31px;
        }

        .role {
            font-size: 14px;
            letter-spacing: 0.5px;
        }
    }

    .socials {
        display: flex;
        flex-flow: column nowrap;
        gap: 5px;

        .social {
            display: flex;
            flex-flow: row nowrap;
            gap: 5px;
            align-items: center;
            text-decoration: none;
            color: rgb(118, 119, 122);

            .icon-wrapper {
                background: #393e46;
                color: white;
                font-size: 13px;
                height: 21px;
                width: 21px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 999rem;
            }

            .content {
                font-size: 12px;
                letter-spacing: 0.5px;
                width: 150px;
            }
        }
    }
}
</style>
