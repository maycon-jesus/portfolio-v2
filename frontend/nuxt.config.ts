import VitePluginVuetify from 'vite-plugin-vuetify';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,

    modules: [
        '@pinia/nuxt',
        '@vueuse/nuxt',
        'nuxt-icon',
        'nuxt-icons',
        'nuxt-viewport',
        'nuxt-delay-hydration',
        '@nuxt/image-edge',
        '@nuxtjs/color-mode',
    ],

    css: [
        '~/assets/css/reset.css',
        '~/assets/scss/themes.scss',
        '~/assets/scss/typography.scss',
        '~/assets/scss/uistate.scss',

        // Primevue
        // '@mdi/font/css/materialdesignicons.css',
        'vuetify/styles',
    ],

    app: {
        head: {
            titleTemplate: '%s - Maycon Jesus',
            htmlAttrs: {
                lang: 'pt-br',
            },
            meta: [
                {
                    name: 'robots',
                    content: 'all',
                },
                {
                    name: 'description',
                    content:
                        'Me chamo Maycon Jesus, sou um desenvolvedor front-end, que controi aplicações visando o sucesso do produto como um todo.',
                },
                {
                    property: 'og:type',
                    content: 'website',
                },
                {
                    property: 'og:url',
                    content: 'https://mayconjesus.dev',
                },
                {
                    property: 'og:title',
                    content: 'Maycon Jesus',
                },
                {
                    property: 'og:description',
                    content:
                        'Me chamo Maycon Jesus, sou um desenvolvedor front-end, que controi aplicações visando o sucesso do produto como um todo.',
                },
                {
                    property: 'og:image',
                    content: 'https://mayconjesus.dev/img/home/eu.png',
                },
                {
                    property: 'og:image:type',
                    content: 'image/png',
                },
                {
                    property: 'og:image:width',
                    content: '253',
                },
                {
                    property: 'og:image:height',
                    content: '250',
                },
                {
                    property: 'og:image:alt',
                    content: 'Minha foto de perfil em preto e branco com um fundo gradiente vermelho e laranja.',
                },
                {
                    name: 'apple-mobile-web-app-title',
                    content: 'Maycon Jesus',
                },
                {
                    name: 'application-name',
                    content: 'Maycon Jesus',
                },
                {
                    name: 'msapplication-TileColor',
                    content: '#222831',
                },
                {
                    name: 'theme-color',
                    content: '#F5841A',
                },
            ],

            link: [
                // Favicon
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: '/apple-touch-icon.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: '/favicon-32x32.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    href: '/favicon-16x16.png',
                },
                {
                    rel: 'manifest',
                    href: '/site.webmanifest',
                },
                {
                    rel: 'mask-icon',
                    href: '/safari-pinned-tab.svg',
                    color: '#F5841A',
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.gstatic.com',
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.googleapis.com',
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap",
                    media: "print",
                    onload: "this.onload=null;this.removeAttribute('media');"
                }
            ],

            // script: [
            //     {
            //         src: '//code.tidio.co/7i8ttqso1dw0edjcezyvr4l5fdidp3ly.js',
            //         defer: true,
            //     },
            // ],
        },
    },

    plugins: ['~/plugins/vuetify'],

    components: {
        dirs: [
            {
                path: '~/components/custom',
                prefix: 'my',
            },
            {
                path: '~/components',
                pathPrefix: true,
            },
        ],
    },

    imports: {
        dirs: ['./composables/**'],
    },

    viewport: {
        breakpoints: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1248,
            xl: 1888,
        },
        defaultBreakpoints: {
            desktop: 'md',
            tablet: 'sm',
            mobile: 'xs',
        },
        fallbackBreakpoint: 'lg',
    },

    delayHydration: {
        mode: 'init',
    },

    image: {},

    colorMode: {
        preference: 'dark',
        fallback: 'dark',
        classPrefix: 'theme-',
        classSuffix: '',
    },

    devtools: {
        enabled: false,
    },

    experimental: {
        viewTransition: true,
    },

    vite: {
        plugins: [
            VitePluginVuetify({
                autoImport: true,
            }),
        ],
    },

    build: {
        transpile: ['vuetify'],
    },
});
