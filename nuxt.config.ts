// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://rsms.me/inter/inter.css',
        },
      ],
      titleTemplate: '%s | SGDS Starter SAAS',
    },
  },
  components: {
    global: true,
    dirs: [{ path: '~/components', pathPrefix: false }],
  },
  typescript: {
    typeCheck: true,
  },
})
