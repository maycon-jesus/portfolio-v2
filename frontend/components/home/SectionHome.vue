<template>
    <section id="#home" :class="{ mobile: isMobile }">
        <div class="presentation">
            <h1
                :class="{
                    'text-h2': !isMobile,
                    'text-h3': isMobile,
                }"
            >
                Olá, me chamo <strong>Maycon Jesus</strong>
            </h1>
            <p class="text-h6">
                Sou um desenvolvedor front-end de Conselheiro Lafaiete, Minas
                Gerais. Já desenvolvi muitos tipos de front-end, desde
                aplicativos bancários até sistema de fidelidade para streamers.
            </p>
            <p class="text-h6">
                Sou apaixonado por interfaces de ponta, perfeitas em
                pixels(pixel-perfect), bonitas e UX intuitivamente implementado.
            </p>
        </div>
        <div class="image">
            <img src="/img/home/eu.png" alt="" />
        </div>
        <div v-if="!isMobile" class="icon-scroll"></div>
    </section>
</template>

<script setup lang="ts">
const { $theme } = useNuxtApp();

const isMobile = $theme.breakpoints.smAndDown;
</script>

<style lang="scss" scoped>
section {
    position: relative;
    min-height: calc(100vh - 74px);
    padding: 0 20px 100px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    box-sizing: border-box;

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

    &.mobile {
        flex-flow: column;

        p {
            width: 100%;
            max-width: unset;
        }

        .image {
            order: -1;
            margin-bottom: 24px;

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
