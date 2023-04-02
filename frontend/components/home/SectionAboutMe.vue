<template>
    <section :class="{ mobile: isMobile }">
        <HomeSectionTitle
            title="Sobre mim"
            description="Aqui você encontrará mais informações sobre mim, o que faço e minhas habilidades atuais em termos de programação e tecnologia."
        ></HomeSectionTitle>
        <div class="content">
            <div class="my-info">
                <h3 class="subtitle text-h4">Me conheça!</h3>
                <p class="text-body-1">
                    Sou um <strong>desenvolvedor front-end</strong> que controi
                    aplicações visando o sucesso do produto como um todo. Já
                    desenvolvi muitos tipos de front-end, desde aplicativos
                    bancários até sistema de fidelidade para streamers. De uma
                    olhada na seção de Projetos
                </p>
            </div>
            <div class="skills">
                <h3 class="subtitle text-h4">Minhas habilidades</h3>
                <div class="skills-list">
                    <HomeSectionAboutMeSkillChip
                        v-for="(skill, index) in skills"
                        :key="index"
                        >{{ skill }}</HomeSectionAboutMeSkillChip
                    >
                </div>
                <div class="actions-bar">
                    <MyButton>Veja mais</MyButton>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import skills from '~/assets/data/home-skills.json';
const { $theme } = useNuxtApp();

const isMobile = $theme.breakpoints.smAndDown;
</script>

<style lang="scss" scoped>
section {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 12rem 20px;

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
        padding: 6rem 20px;
        .content {
            flex-flow: column nowrap;
            align-items: center;
            margin-top: 4.5rem;

            & > * {
                width: 100%;
            }
        }
    }
}
</style>
