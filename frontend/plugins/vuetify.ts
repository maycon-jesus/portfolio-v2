// import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import { md3 } from 'vuetify/blueprints/md3';

export default defineNuxtPlugin((nuxt) => {
    const vuetify = createVuetify({
        ssr: true,
        blueprint: md3,
        icons: {
            aliases,
            sets: {
                mdi,
            },
            defaultSet: 'mdi',
        },
    });
    nuxt.vueApp.use(vuetify);
});
