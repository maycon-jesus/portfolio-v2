<template>
    <div class="header-wrapper">
        <header>
            <nuxt-link to="/" :style="{ height: '38px' }">
                <img
                    v-if="menuMobile"
                    class="logo"
                    :src="logoUrl"
                    alt="Logo Maycon Jesus"
                    height="38"
                    width="25.44"
                />
                <img
                    v-else
                    class="logo"
                    :src="logoUrl"
                    alt="Logo Maycon Jesus"
                    height="38"
                    width="170.7"
                />
            </nuxt-link>

            <!-- Desktop -->
            <div class="links" v-if="!menuMobile">
                <TemplateHeaderMenuItem
                    v-for="(item, i) in links"
                    :to="item.to"
                    :key="i"
                    >{{ item.text }}</TemplateHeaderMenuItem
                >
            </div>
            <a
                v-if="!menuMobile"
                class="download-cv text-button"
                href="/curriculo.pdf"
            >
                Currículo
            </a>

            <!-- MOBILE -->
            <button
                v-if="menuMobile"
                class="menu-btn"
                @click="toggleDrawer"
                :aria-label="drawerIsOpen ? 'Fechar menu' : 'Abrir menu'"
            >
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
                        @click:link="drawerIsOpen = false"
                        >{{ item.text }}</TemplateHeaderMenuItem
                    >
                    <a
                        class="download-cv-mobile text-button"
                        href="/curriculo.pdf"
                    >
                        Currículo
                    </a>
                </div>
            </MyExpandTransitionY>
        </header>
    </div>
</template>

<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router';
const drawerIsOpen = ref(false);

const { $colorMode, $viewport } = useNuxtApp();
const menuMobile = computed(() => $viewport.isLessThan('md'));
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
    {
        text: 'Sobre mim',
        to: {
            name: 'sobre-mim',
        },
    },
    {
        text: 'Experiência',
        to: {
            name: 'experiencia',
        },
    },
    // {
    //     text: 'Projetos',
    //     to: {
    //         name: 'Projetos',
    //     },
    // },
    {
        text: 'Contato',
        to: {
            name: 'contato',
        },
    },
];

const toggleDrawer = () => (drawerIsOpen.value = !drawerIsOpen.value);
const logoUrl = computed(() => {
    if (menuMobile.value) return '/img/logos/maycon-jesus-small-dark.svg';
    return '/img/logos/maycon-jesus-large-dark.svg';
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
    text-decoration: none;

    &:hover {
        background-color: var(--accent--35-opacity);
        box-shadow: var(--accent--35-opacity) 0px 5px 15px;
        color: var(--text-accent--35-opacity);
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
    text-decoration: none;

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
