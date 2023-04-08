<template>
    <div class="work">
        <div class="logo">
            <img
                v-if="props.logoUrl"
                :src="props.logoUrl"
                height="48"
                width="48"
            />
        </div>
        <div class="content">
            <div>
                <span>
                    <component
                        :is="props.orgUrl ? 'a' : 'span'"
                        :href="props.orgUrl ?? undefined"
                        :target="props.orgUrl ? '_blank' : undefined"
                        class="org-name text-body-1"
                    >
                        {{ props.name }}
                    </component>
                    <span class="text-body-2 time"
                        >({{ props.startDate }} - {{ props.endDate }})</span
                    >
                </span>
            </div>
            <div class="role">
                <span class="text-body-2">{{ props.role }}</span>
            </div>
            <span class=""></span>
            <div class="skills">
                <span class="text-body-2"><strong>Tecnologias:</strong></span>
                <span
                    class="skill"
                    v-for="(tech, index) in props.techs"
                    :key="index"
                    >{{ tech }}</span
                >
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    name: string;
    role: string;
    techs: string[];
    logoUrl?: string;
    orgUrl?: string;
    startDate: string;
    endDate: string;
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
