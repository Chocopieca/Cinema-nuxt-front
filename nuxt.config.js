export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Cinema-nuxt-front',
    title: 'Cinema-nuxt-front',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com', },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossOrigin: true },
      { ref: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '@/assets/scss/styles.scss', lang: 'scss' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@plugins/services',
    { src: '@plugins/axios.js' },
    { src: '@plugins/injectedComponents.js' },
    { src: '@plugins/baseScripts.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    'nuxt-compress'
  ],

  'nuxt-compress': {
    gzip: {
      threshold: 4096,
    },
    brotli: {
      threshold: 4096,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-breakpoints',
    'nuxt-ssr-cache',
  ],

  cache: {
    useHostPrefix: false,
    pages: [
      '/',
    ],
    store: {
      type: 'memory',
      max: 100,
      ttl: 60,
    },
  },


  breakpoints: {
    // default options
    tablet: 600,
    desktop: 960,
    widescreen: 1264,
    fullhd: 1904,
    options: {
      polyfill: true,
      throttle: 200
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.MOVIE_API_URL,
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['./assets/variables.scss'],
    treeShake: true,
    optionsPath: './plugins/vuetify.options.js',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  router: {
    base: '/Cinema-nuxt-front/',
  },

  loading: {
    color: '#c18a2c',
    height: '5px',
  },
}
