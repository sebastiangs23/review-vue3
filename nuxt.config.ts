import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  modules: ["@pinia/nuxt"],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    sourcemap: true,
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL
    }
  }
});
