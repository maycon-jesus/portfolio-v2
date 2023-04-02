// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  modules: ['@pinia/nuxt', '@vueuse/nuxt', 'nuxt-icon', '@nuxtjs/plausible', 'nuxt-viewport'],

  css: ['~/assets/css/reset.css', '~/assets/scss/typography.scss', '~/assets/scss/uistate.scss'],

  app: {
    head: {
      titleTemplate: '%s - Maycon Jesus',
      meta: [
        {
          name: 'description',
          content: 'Me chamo Maycon Jesus, sou um desenvolvedor front-end, que controi aplicações visando o sucesso do produto como um todo.'
        },
        {
          name: 'og:type',
          content: 'website'
        },
        {
          name: 'og:url',
          content: 'https://mayconjesus.dev'
        },
        {
          name: 'og:title',
          content: 'Maycon Jesus'
        },
        {
          name: 'og:description',
          content: 'Me chamo Maycon Jesus, sou um desenvolvedor front-end, que controi aplicações visando o sucesso do produto como um todo.'
        },
        {
          name: 'og:image',
          content: 'https://mayconjesus.dev/img/home/eu.png'
        },
        {
          name: 'og:image:type',
          content: 'image/png'
        },
        {
          name: 'og:image:width',
          content: '253'
        },
        {
          name: 'og:image:height',
          content: '250'
        },
        {
          name: 'og:image:alt',
          content: 'Minha foto de perfil em preto e branco com um fundo gradiente vermelho e laranja.'
        },
        {
          name: 'apple-mobile-web-app-title',
          content: 'Maycon Jesus',
        },
        {
          name: 'application-name',
          content: 'Maycon Jesus'
        },
        {
          name: 'msapplication-TileColor',
          content: '#121417'
        },
        {
          name: 'theme-color',
          content: '#DC2F2F'
        }
      ],
      
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
        },

        // Favicon
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png'
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest'
        },
        {
          rel: 'mask-icon',
          href: '/safari-pinned-tab.svg',
          color: '#1b263b'
        },
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

  plausible: {
    domain: 'teste.mayconjesus.dev',
    apiHost: 'https://analytics.mayconjesus.dev'
  },

  viewport: {
    breakpoints: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1248,
      xl: 1888
    },
    defaultBreakpoints: {
      desktop: 'lg',
      tablet: 'md',
      mobile: 'sm'
    },
    fallbackBreakpoint: 'lg'
  },

  devtools: {
    enable: false
  },
})
