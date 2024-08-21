// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content'],

  routeRules: {
    '/': { prerender: true }
  },

  // global styles
  css: ["./assets/style/reset.scss", "./assets/style/type.scss", "./assets/style/util.scss"],

  // content
  content: {
    documentDriven: true,
    markdown: {
      anchorLinks: false,
    },
  },

  compatibilityDate: '2024-08-14'
})