<template>
    <div class="header-wrapper">
        <header>
            <img class="logo" :src="logoUrl" />

            <!-- Desktop -->
            <div class="links" v-if="!menuMobile">
                <TemplateHeaderMenuItem
                    v-for="(item, i) in links"
                    :to="item.to"
                    :key="i"
                    >{{ item.text }}</TemplateHeaderMenuItem
                >
            </div>
            <button v-if="!menuMobile" class="download-cv text-button">
                Download CV
            </button>

            <!-- MOBILE -->
            <button v-if="menuMobile" class="menu-btn" @click="toggleDrawer">
                <Icon
                    :name="
                        drawerIsOpen
                            ? 'solar:close-circle-bold-duotone'
                            : 'solar:menu-dots-circle-bold-duotone'
                    "
                ></Icon>
            </button>
            <MyExpandTransitionY
                class="menu-mobile"
                v-if="menuMobile"
                v-model="drawerIsOpen"
                :class="{
                    'menu-mobile-open': drawerIsOpen,
                }"
            >
                <div class="links-mobile">
                    <TemplateHeaderMenuItem
                        v-for="(item, i) in links"
                        :to="item.to"
                        :key="i"
                        >{{ item.text }}</TemplateHeaderMenuItem
                    >
                    <button class="download-cv-mobile text-button">
                        Baixar CV
                    </button>
                </div>
            </MyExpandTransitionY>
        </header>
    </div>
</template>

<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router';
const drawerIsOpen = ref(false);

const { $theme } = useNuxtApp();
const menuMobile = $theme.breakpoints.smAndDown;
const links: {
    text: string;
    to: RouteLocationRaw;
}[] = [
    {
        text: 'Inicio',
        to: {
            name: 'index',
        },
    },
    // {
    //     text: 'Skills',
    //     to: {
    //         name: 'Skills',
    //     },
    // },
    // {
    //     text: 'Projetos',
    //     to: {
    //         name: 'Projetos',
    //     },
    // },
    // {
    //     text: 'Contato',
    //     to: {
    //         name: 'Contato',
    //     },
    // },
];

const toggleDrawer = () => (drawerIsOpen.value = !drawerIsOpen.value);
const logoUrl = computed(() => {
    if ($theme.current.dark) {
        if (menuMobile.value) return '/img/logos/maycon-jesus-small-dark.svg';
        return '/img/logos/maycon-jesus-large-dark.svg';
    } else {
        if (menuMobile.value) return '/img/logos/maycon-jesus-small-light.svg';
        return '/img/logos/maycon-jesus-large-light.svg';
    }
});
</script>

<style lang="scss" scoped>
@import '~/assets/scss/themes.scss';

.header-wrapper {
    height: calc(58px + 16px);
}

header {
    $spacingX: 15px;

    position: fixed;
    background-color: var(--background2--80-opacity);
    backdrop-filter: blur(5px);
    left: $spacingX;
    top: 8px;
    width: calc(100% - $spacingX * 2);
    border-radius: 29px;
    padding: 10px;
    min-height: 58px;
    box-sizing: border-box;
    color: var(--text-background2);
    overflow: hidden;
    display: flex;
    flex-flow: row wrap;
    z-index: 1000;
}

.logo {
    margin-left: 15px;
    height: 38px;
}

.links {
    // Spacing
    margin-left: auto;
    margin-right: 5px;
    align-self: center;

    // Grid
    display: flex;
    flex-flow: row nowrap;
    gap: 5px;
}

.download-cv {
    border-radius: 999rem;
    border: 1px solid var(--accent);
    background-color: transparent;
    color: var(--accent);
    transition: all 0.1s;
    padding-inline: 15px;

    &:hover {
        background-color: var(--accent--35-opacity);
        box-shadow: var(--accent--35-opacity) 0px 5px 15px;
        color: var(--text-accent);
    }
}

.download-cv-mobile {
    border-radius: 999rem;
    border: 1px solid var(--accent);
    background-color: transparent;
    color: var(--accent);
    transition: all 0.1s;
    padding-inline: 15px;
    height: 38px;
    width: 100%;

    &:hover {
        background-color: var(--accent--35-opacity);
        box-shadow: var(--accent--35-opacity) 0px 5px 15px;
        color: var(--text-accent);
    }
}

.menu-btn {
    margin-left: auto;
    background-color: transparent;
    color: var(--text-background2);
    padding: 0;
    border: none;
    font-size: 38px;
    display: flex;
    align-items: center;
    color: var(--text-background2);
}

.menu-mobile {
    flex-basis: 100%;

    &-open {
        margin-top: 10px;
    }

    .links-mobile {
        display: flex;
        flex-flow: column;
        gap: 5px;
    }
}
</style>
