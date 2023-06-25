<template>
    <section id="home" :class="{ mobile: isMobile }">
        <div
            class="presentation"
            :class="{
                mobile: isMobile,
            }"
        >
            <h2
                :class="{
                    'text-h2': !isMobile,
                    'text-h3': isMobile,
                }"
            >
                Olá, me chamo <strong>Maycon Jesus</strong>
            </h2>
            <p class="text-h6">
                Sou um desenvolvedor front-end de Conselheiro Lafaiete, Minas
                Gerais que controi aplicações visando o sucesso do produto como
                um todo. Já desenvolvi muitos tipos de front-end, desde
                aplicativos bancários até sistema de fidelidade para streamers.
            </p>
            <p class="text-h6">
                Sou apaixonado por interfaces de ponta, perfeitas em
                pixels(pixel-perfect), bonitas e UX intuitivamente implementado.
            </p>
            <div class="action-bar">
                <MyButton
                    icon="mdi:github"
                    :href="githubContact?.url"
                    target="_blank"
                    >GitHub</MyButton
                >
                <MyButton :to="{ name: 'contato' }"
                    >Contato</MyButton
                >
                <MyButton disabled>Projetos</MyButton>
            </div>
        </div>
        <div class="image">
            <NuxtImg
                v-if="isMobile"
                src="/img/home/eu-h200.webp"
                format="webp"
                alt="Minha foto de perfil em preto e branco com um fundo gradiente vermelho e laranja."
                height="200"
                width="202"
                preload
            ></NuxtImg>
            <NuxtImg
                v-else
                src="/img/home/eu-h250.webp"
                format="webp"
                alt="Minha foto de perfil em preto e branco com um fundo gradiente vermelho e laranja."
                height="250"
                width="253"
                preload
            ></NuxtImg>
        </div>
        <div v-if="!isMobile" class="icon-scroll"></div>
    </section>
</template>

<script setup lang="ts">
import contacts from '~/assets/data/contacts.json';
const { $viewport } = useNuxtApp();
const githubContact = contacts.find((c) => c.id === 'github');

const isMobile = computed(() => $viewport.isLessThan('md'));

useHead({
  link: [
    {
      key: 'load-home-bg',
      rel: "preload",
      href: "/img/home/bg2.jpg",
      as: "image"
    }
  ]
})
</script>

<style lang="scss" scoped>
section {
    position: relative;
    min-height: calc(100vh - 74px);
    padding: 12rem 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    box-sizing: border-box;
    background-color: var(--background);
    background-image: url("/img/home/bg2.jpg");
    //background-size: 1200px;
    background-blend-mode: color-dodge;
    background-repeat: repeat;

    h1 {
        text-align: center;
        margin-bottom: 24px;
    }

    p {
        max-width: 768px;

        &:nth-child(n + 1) {
            margin-top: 15px;
        }
    }

    .image {
        margin-left: 25px;

        img {
            height: 250px;
        }
    }

    .action-bar {
        display: flex;
        flex-flow: row wrap;
        margin-top: 1rem;
        gap: 1rem;
    }

    &.mobile {
        flex-flow: column;
        padding: 6rem 20px;
        background-size: 100vw;

        p {
            width: 100%;
            max-width: unset;
        }

        .image {
            order: -1;
            margin-bottom: 24px;
            margin-left: 0px;
            margin-top: 15px;

            img {
                height: 200px;
            }
        }
    }
}

.icon-scroll,
.icon-scroll:before {
    position: absolute;
    left: 50%;
}

.icon-scroll {
    width: 40px;
    height: 70px;
    margin-left: -20px;
    margin-top: -35px;
    box-shadow: inset 0 0 0 1px #fff;
    border-radius: 25px;
    bottom: 15px;
}

.icon-scroll:before {
    content: '';
    width: 8px;
    height: 8px;
    background: #fff;
    margin-left: -4px;
    top: 8px;
    border-radius: 4px;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: scroll;
}

@keyframes scroll {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: translateY(46px);
    }
}
</style>
