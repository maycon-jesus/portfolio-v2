<template>
    <section id="contato" :class="{ mobile: isMobile, sm: isSm, md: isMd }">
        <HomeSectionTitle
            title="Contato"
            description="Vamos trabalhar juntos e criar lindos websites."
        ></HomeSectionTitle>
        <div class="content">
            <div class="socials">
                <HomeSectionContactCard
                    v-for="(contact, index) in contacts"
                    :key="index"
                    :name="contact.name"
                    :icon="contact.icon"
                    :url="contact.url"
                    :url-label="contact.urlLabel"
                />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import contactsList from '~/assets/data/contacts.json';
const contacts = contactsList;
const { $viewport } = useNuxtApp();

const isMobile = computed(() => $viewport.isLessThan('sm'));
const isSm = computed(() => $viewport.match('sm'));
const isMd = computed(() => $viewport.match('md'));
</script>

<style lang="scss" scoped>
section {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 8rem 20px;

    .content {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        margin-top: 7rem;
        max-width: 1248px;

        .socials {
            display: grid;
            margin: 0 auto 0 auto;
            grid-template-columns: repeat(4, 1fr);
            gap: 6rem;
        }
    }

    &.mobile {
        padding: 4rem 20px;
        .content {
            margin-top: 3.5rem;

            .socials {
                grid-template-columns: 1fr;
                gap: 3rem;
            }
        }
    }

    &.sm .socials {
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
    }

    &.md .socials {
        grid-template-columns: repeat(3, 1fr);
        gap: 4.5rem;
    }
}
</style>
