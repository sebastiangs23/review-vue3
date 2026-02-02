<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";

import { logOut } from "../utils/utils";
import { useSettingsStore } from "../../stores/settings";
import ShowCode from "../components/ShowCode.vue";
import { subModules } from "../utils/common";

const settings = useSettingsStore();
const router = useRouter();
const colorPalette = settings.colorButtons;
const { colorButtons } = storeToRefs(settings);

definePageMeta({
  layout: "modules",
});

const isActive = ref(false);

const logOutFn = () => {
  logOut();
  router.push("/");
};
</script>
<template>
  <div class="flex min-h-screen font-bold">
    <aside class="flex flex-col pr-6 w-60 bg-[var(--bg-color-secondary)]">
      <h2 class="font-bold text-(--color-base) text-2xl mt-6 mb-6 text-center">
        Admin Panel
      </h2>

      <nav class="font-(--font-base) flex flex-col gap-10 mt-6">
        <NuxtLink
          v-for="sub in subModules"
          :to="sub.to"
          active-class="btn__base_2 btn__shadow"
          class="text-(--color-text-primary) text-xl pl-4 inline-flex"
          :key="sub.route"
        >
          <component :is="sub.icon" class="w-5 h-5 shrink-0 mr-2" />
          <span>
            {{ sub.name }}
          </span>
        </NuxtLink>
      </nav>
    </aside>

    <section
      class="flex flex-col flex-1 p-6"
      :style="{
        backgroundColor: settings.background === 'gray' ? '#f3f4f6' : 'white',
      }"
    >
      <header
        class="flex items-center justify-between gap-4 px-4 py-3 bg-white rounded-[14px]"
      >
        <ShowCode />

        <button
          @click="logOutFn()"
          :style="{
            background: `linear-gradient(90deg, ${colorButtons}, #4fadbe)`,
            border: `none`,
            color: `white`,
            [border - radius]: `0.4rem`,
            padding: `0.5rem 1rem`,
            [font - weight]: 600,
            cursor: `pointer`,
          }"
          class="modules__logout"
        >
          Logout
        </button>
      </header>

      <main class="flex-1 p-[2rem]">
        <slot />
      </main>
    </section>
  </div>
</template>

<style scoped>
.modules__logout {
  background: linear-gradient(90deg, #59c080, #4fadbe);
  border: none;
  color: white;
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
}

.modules__logout:hover {
  opacity: 0.9;
}
</style>
