import Toast, { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, { timeout: 2500, position: "top-right" });

  const toast = useToast();
  return {
    provide: {
      toast,
    },
  };
});
