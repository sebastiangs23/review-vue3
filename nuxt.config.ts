import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: [
    "vue-toastification/dist/index.css",
    "@/assets/css/main.css",
  ],
  modules: ["@pinia/nuxt","pinia-plugin-persistedstate/nuxt" ,"@nuxt/icon"],
  vite: { plugins: [tailwindcss()] },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});