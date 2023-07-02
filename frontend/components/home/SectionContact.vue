<template>
    <section id='contato'>
        <SectionTitle
            title='Contato'
            description='Vamos trabalhar juntos e criar lindos websites.'
        ></SectionTitle>
        <div class='content'>
            <div class='socials'>
                <HomeSectionContactCard
                    v-for='(contact, index) in contacts'
                    :key='index'
                    :name='contact.name'
                    :icon='contact.icon'
                    :url='contact.url'
                    :url-label='contact.urlLabel'
                />
            </div>
        </div>
    </section>
</template>

<script setup lang='ts'>
import contactsList from '~/assets/data/contacts.json';

const contacts = contactsList;
</script>

<style lang='scss' scoped>
@import 'assets/scss/breakpoints.scss';

section {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 4rem 20px;

    .content {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        margin-top: 7rem;
        max-width: 1248px;

        .socials {
            display: grid;
            margin: 0 auto 0 auto;
            grid-template-columns: repeat(3, 1fr);
            gap: 5rem;

            @media (min-width: $sm-start) and (max-width: $sm-end) {
                & {
                    grid-template-columns: repeat(2, 1fr);
                    gap: 2.5rem;
                }
            }

            @media (min-width: $md-start) and (max-width: $md-end) {
                & {
                    grid-template-columns: repeat(3, 1fr);
                    gap: 3.75rem;
                }
            }
        }
    }

    @media (max-width: $xs-end) {
        & {
            padding: 2rem 20px;

            .content {
                margin-top: 3.5rem;

                .socials {
                    grid-template-columns: 1fr;
                    gap: 2.5rem;
                }
            }
        }
    }
}
</style>
