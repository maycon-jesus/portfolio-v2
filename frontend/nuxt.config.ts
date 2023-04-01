import {join} from "path"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@vueuse/nuxt', 'nuxt-icon'],

  css: ['~/assets/css/reset.css', '~/assets/scss/typography.scss', '~/assets/scss/uistate.scss'],

  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap'
        }
      ]
    }
  },

  plugins: [
    '~/plugins/theme'
  ],

  components: {
    dirs: [
      {
        path: '~/components/custom',
        prefix: 'my'
      },
      {
        path: '~/components',
        pathPrefix: true
      },
    ]
  },

  imports: {
    dirs: [
      './composables/**'
    ]
  },
})
