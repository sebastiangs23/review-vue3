<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useCurrentUser } from "../../composables/currentUser";

import {
  UsersIcon,
  ShoppingBagIcon,
  Cog6ToothIcon,
} from "@heroicons/vue/24/outline";

definePageMeta({
  layout: "modules",
});

onMounted(() => {
  useCurrentUser();
});
</script>

<template>
  <section class="home">
    <header class="home__header">
      <h2 class="home__title">Dashboard Overview</h2>
      <p class="home__subtitle">
        Welcome back, Administrator. Here’s a summary of your system activity
        (for the moment just static data).
      </p>
    </header>

    <div v-once class="home__grid">
      <article class="home__card">
        <div class="home__card-header">
          <UsersIcon class="home__icon" />
          <span class="home__card-title">Users</span>
        </div>
        <p class="home__card-value">128 active</p>
      </article>

      <article class="home__card">
        <div class="home__card-header">
          <ShoppingBagIcon class="home__icon" />
          <span class="home__card-title">Store</span>
        </div>
        <p class="home__card-value">↑ 15% growth sales</p>
      </article>

      <article class="home__card">
        <div class="home__card-header">
          <Cog6ToothIcon class="home__icon" />
          <span class="home__card-title">Settings</span>
        </div>
        <p class="home__card-value">Configuration</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.home {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.home__header {
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 1rem;
}

.home__title {
  font-size: 1.8rem;
  font-weight: 700;
  background: var(--main-color);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.home__subtitle {
  color: #6b7280;
  margin-top: 0.25rem;
}

/* --- Grid Cards --- */
.home__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.home__card {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  text-align: left;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.home__card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
}

.home__card-value {
  font-weight: 600;
  font-size: 1.3rem;
  color: #111827;
}

/* Card header with icon */
.home__card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

/* Icon */
.home__icon {
  width: 22px;
  height: 22px;
  color: #64748b;
  flex-shrink: 0;
}

.home__card-title {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.25px;
  color: #64748b;
  text-transform: uppercase;
}

.home__card:nth-child(1) .home__icon {
  color: #2563eb;
}

.home__card:nth-child(2) .home__icon {
  color: #16a34a;
}

.home__card:nth-child(3) .home__icon {
  color: #9333ea;
}
</style>
