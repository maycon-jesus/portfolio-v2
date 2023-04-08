<template>
    <section id="sobre-mim" :class="{ mobile: isMobile }">
        <SectionTitle
            title="Sobre mim"
            description="Aqui você encontrará mais informações sobre mim, o que faço e minhas habilidades atuais em termos de programação e tecnologia."
        ></SectionTitle>
        <div class="content">
            <div class="my-info">
                <h3
                    class="subtitle"
                    :class="{ 'text-h4': !isMobile, 'text-h5': isMobile }"
                >
                    Me conheça!
                </h3>
                <p class="text-body-1">
                    Sou um <strong>desenvolvedor front-end</strong> que controi
                    aplicações visando o sucesso do produto como um todo. Já
                    desenvolvi muitos tipos de front-end, desde aplicativos
                    bancários até sistema de fidelidade para streamers. Dê uma
                    olhada na seção de Projetos.
                </p>
                <p class="text-body-1">
                    Também gosto de compartilhar conteúdo relacionado ao que
                    aprendi ao longo dos anos em
                    <strong>Desenvolvimento para Web</strong> para que possa
                    ajudar outras pessoas da Comunidade Dev. Sinta-se à vontade
                    para se inscrever no meu canal do Youtube, onde posto
                    conteúdo útil relacionado à desenvolvimento e programação
                    web.
                </p>
                <p class="text-body-1">
                    Estou aberto a oportunidades de trabalho onde possa
                    contribuir, aprender e crescer. Se você tiver uma boa
                    oportunidade que corresponda às minhas habilidades e
                    experiência, não hesite em entrar em contato comigo. Estou
                    aberto a oportunidades de trabalho onde possa contribuir,
                    aprender e crescer. Se você tiver uma boa oportunidade que
                    corresponda às minhas habilidades e experiência, não hesite
                    em entrar em contato comigo.
                </p>
                <div class="actions-bar">
                    <MyButton :to="{ name: 'index', hash: '#contato' }"
                        >Contato</MyButton
                    >
                </div>
            </div>
            <div class="skills">
                <h3
                    class="subtitle"
                    :class="{ 'text-h4': !isMobile, 'text-h5': isMobile }"
                >
                    Minhas habilidades
                </h3>
                <div class="skills-list">
                    <HomeSectionAboutMeSkillChip
                        :size="isMobile ? 'small' : 'medium'"
                        v-for="(skill, index) in skills"
                        :key="index"
                        >{{ skill }}</HomeSectionAboutMeSkillChip
                    >
                </div>
                <div class="actions-bar">
                    <MyButton :to="{ name: 'experiencia' }">Veja mais</MyButton>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import skills from '~/assets/data/home-skills.json';

const { $viewport } = useNuxtApp();
const isMobile = computed(() => $viewport.isLessThan('md'));
</script>

<style lang="scss" scoped>
section {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 8rem 20px;

    .subtitle {
        font-weight: bold;
        margin-bottom: 25px;
    }

    .content {
        display: flex;
        flex-flow: row nowrap;
        margin-top: 9rem;
        max-width: 1248px;
        gap: 6rem;

        & > * {
            width: 50%;
        }
    }

    .my-info {
        p {
            color: var(--text-medium-background);
        }

        p:nth-child(n + 1) {
            margin-top: 15px;
        }

        .actions-bar {
            margin-top: 1rem;
        }
    }

    .skills {
        .skills-list {
            display: flex;
            flex-flow: row wrap;
            gap: 1rem;
        }

        .actions-bar {
            margin-top: 1rem;
        }
    }

    &.mobile {
        padding: 4rem 20px;
        .content {
            flex-flow: column nowrap;
            align-items: center;
            margin-top: 4.5rem;
            gap: 3rem;

            & > * {
                width: 100%;
            }
        }

        .skills .skills-list {
            gap: 0.5rem;
        }
    }
}
</style>
