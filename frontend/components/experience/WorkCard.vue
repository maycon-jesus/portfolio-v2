<template>
    <MyIsBot>
        <template #false>
            <div class="work">
                <div class="logo">
                    <img v-if="props.work.org.logoUrl" :src="props.work.org.logoUrl" height="48" width="48" />
                </div>
                <div class="content">
                    <div>
                        <span>
                            <component
                                :is="work.org.url ? 'a' : 'span'"
                                :href="work.org.url ?? undefined"
                                :target="work.org.url ? '_blank' : undefined"
                                class="org-name text-body-1"
                            >
                                {{ work.org.name }}
                            </component>
                            <span class="text-body-2 time">({{ work.startDate }} - {{ work.endDate }})</span>
                        </span>
                    </div>
                    <div class="role">
                        <span class="text-body-2">{{ work.role }}</span>
                    </div>
                    <span class=""></span>
                    <div class="skills">
                        <span class="text-body-2"><strong>Tecnologias:</strong></span>
                        <span class="skill" v-for="(tech, index) in work.skills" :key="index">{{ tech }}</span>
                    </div>
                </div>
            </div>
        </template>
        <template #true>
            <div class="work-bot">
                <div v-if="work.meta.military">
                    <p>
                        Servi o {{ work.org.name }} como {{ work.role }} no período de {{ work.startDate }} à
                        {{ work.endDate }}.
                    </p>
                    <p v-if="work.description">{{ work.description }}</p>
                </div>
                <div v-else>
                    <p v-if="work.endDate == 'Agora'" class="text-body-1">
                        Trabalho {{ work.meta.orgNameGender === 'female' ? 'na' : 'no' }} {{ work.org.name }} como
                        {{ work.role }} desde {{ work.startDate }}.
                        <span v-if="work.skills.length > 0">Lá utilizo {{ work.skills.join(', ') }}.</span>
                    </p>
                    <p v-else class="text-body-1">
                        Trabalhei {{ work.meta.orgNameGender === 'female' ? 'na' : 'no' }} {{ work.org.name }} como
                        {{ work.role }} no período de {{ work.startDate }} à {{ work.endDate }}.
                        <span v-if="work.skills.length > 0">Lá utilizei {{ work.skills.join(', ') }}.</span>
                    </p>
                    <p v-if="work.description">{{ work.description }}</p>
                </div>
            </div>
        </template>
    </MyIsBot>
</template>

<script setup lang="ts">
import { IPersonalInfoWork } from '~/types/personalInfo';

const props = defineProps<{
    work: IPersonalInfoWork;
}>();
</script>

<style lang="scss" scoped>
.work {
    display: flex;
    flex-flow: row nowrap;
    transition: all 0.1s;

    &:hover {
        transform: scale(1.1);

        .logo img {
            transform: scale(1.2);
        }
    }

    .logo {
        flex-shrink: 0;
        padding: 1rem;
        border-radius: 999rem;
        background: var(--background2);
        box-sizing: border-box;
        width: 80px;
        height: 80px;

        img {
            transition: all 0.1s;
            object-fit: contain;
            object-position: center;
        }
    }

    .content {
        display: flex;
        flex-flow: column nowrap;
        padding: 10px;

        .org-name {
            text-decoration: none;
            color: var(--accent);
            font-weight: bold;
        }

        .time {
            margin-left: 5px;
        }

        .role {
            margin-top: 5px;
        }

        .skills {
            margin-top: 10px;
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            gap: 5px;

            .skill {
                border-radius: 999rem;
                background-color: var(--background2);
                padding: 4px 8px;
            }
        }
    }
}
</style>
