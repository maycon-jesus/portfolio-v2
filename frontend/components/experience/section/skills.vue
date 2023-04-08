<template>
    <section :class="{ mobile: isMobile }">
        <SectionTitle title="Tecnologias que uso" component="h1"></SectionTitle>

        <p class="text-h6 subtitle">
            Abaixo estão algumas das tecnologias que ja trabalhei, mas não me
            limito à apenas essas.<br />Para saber sobre alguma em específico
            entre em contato comigo!
        </p>

        <div class="content">
            <div class="legend">
                <p class="text-h6 title">Legenda:</p>
                <div class="legend-item">
                    <ExperienceSkillProgressBar
                        progress-color="var(--secondary)"
                        :xp-level="1"
                    ></ExperienceSkillProgressBar>
                    <span class="text-body-2"
                        ><strong>Júnior:</strong> Preciso de um pouco de
                        ajuda</span
                    >
                </div>
                <hr />
                <div class="legend-item">
                    <ExperienceSkillProgressBar
                        progress-color="var(--secondary)"
                        :xp-level="2"
                    ></ExperienceSkillProgressBar>
                    <span class="text-body-2"
                        ><strong>Pleno:</strong> Utilizo muito bem com quase
                        nenhuma ajuda</span
                    >
                </div>
                <hr />
                <div class="legend-item">
                    <ExperienceSkillProgressBar
                        progress-color="var(--secondary)"
                        :xp-level="3"
                    ></ExperienceSkillProgressBar>
                    <span class="text-body-2"
                        ><strong>Sênior:</strong> Entendo como quase tudo
                        funciona</span
                    >
                </div>
            </div>
            <div class="skills-groups">
                <ExperienceSkillsGroup
                    title="Aplicações front-end"
                    :skills="skills.clientSide"
                />
                <ExperienceSkillsGroup
                    class="mt-2rem"
                    title="Aplicações back-end"
                    :skills="skills.serverSide"
                />
                <ExperienceSkillsGroup
                    class="mt-2rem"
                    title="Testes unitários e E2E"
                    :skills="skills.tests"
                />
                <ExperienceSkillsGroup
                    class="mt-2rem"
                    title="Outros"
                    :skills="skills.others"
                />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import skills from '~/assets/data/skills.json';
const { $viewport } = useNuxtApp();
const isMobile = computed(() => $viewport.isLessThan('sm'));
</script>

<style lang="scss" scoped>
section {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 4rem 20px;

    &.mobile {
        padding: 2rem 20px;
    }

    .content {
        max-width: 1248px;
        width: 100%;
    }

    .subtitle {
        text-align: center;
    }

    .skills-groups {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }
}

.legend {
    background: var(--background2);
    border-radius: 25px;
    width: fit-content;
    padding: 25px;
    margin: auto;
    margin-bottom: 3rem;
    margin-top: 6rem;

    .title {
        margin-bottom: 1rem;
    }
}

.mobile {
    .legend {
        margin-top: 4rem;
    }
    .legend-item {
        flex-flow: column-reverse;
        justify-content: center;
        align-items: normal;
        gap: 10px;
    }
}

.legend-item {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    padding: 5px 0;
    gap: 10px;
}

.mt-2rem {
    margin-top: 2rem;
}
</style>
