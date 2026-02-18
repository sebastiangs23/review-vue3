<script setup lang="ts">
import { computed } from "vue"
import { ShoppingCartIcon } from "@heroicons/vue/24/outline"
import { useSettingsStore } from "../../stores/settings";

const settings = useSettingsStore()

const count = computed(() => settings.cartCount)

const emit = defineEmits<{
  (e: "click"): void
}>()
</script>

<template>
  <button
    type="button"
    class="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition"
    @click="emit('click')"
    aria-label="Cart"
  >
    <ShoppingCartIcon class="h-5 w-5" />

    <!-- Badge -->
    <span
      v-if="count > 0"
      class="absolute -right-1.5 -top-1.5 grid h-5 min-w-[20px] place-items-center rounded-full bg-[var(--color-base)] px-1 text-[11px] font-bold text-black shadow-sm"
    >
      {{ count > 99 ? "99+" : count }}
    </span>
  </button>
</template>
