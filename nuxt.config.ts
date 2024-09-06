// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@vesp/nuxt-fontawesome'],
  css: ['@picocss/pico/css/pico.min.css'],
  devServer: {
    port: 3853,
  },
  pages: true,
});
