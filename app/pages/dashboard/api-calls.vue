<script setup>
import Loader from "~/components/Loader.vue";

definePageMeta({
  layout: "modules",
});

import { ref } from "vue";

const items = ref([]);
const loading = ref(false);
const error = ref(false);

const getItems = async () => {
  loading.value = true;
  error.value = false;

  try {
    const response = await $fetch("https://fakestoreapi.com/products");

    items.value = response;
  } catch (error) {
    console.log(error);
    error.value = true;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getItems();
});
</script>

<template>
  <Loader v-if="loading" />

  <h2 class="text-[2rem] weight-[700] mb-6 text-white">Store</h2>

  <section class="p-[1rem]" v-if="!loading && !error">
    <div class="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-6">
      <article
        v-for="item in items"
        :key="item.id"
        class="store-item flex flex-col bg-[var(--color-base)] rounded-4xl p-1.25"
      >
        <div class="h-52 bg-[#8cbc40] rounded-4xl mb-[1rem]">
          <div
            class="flex items-center justify-center h-45 bg-[#4e5f33] w-full px-6 rounded-4xl"
          >
            <img :src="item.image" :alt="item.title" class="h-40" />
          </div>
          <div class="flex items-center justify-center py-2">
            <span class="text-white font-semibold text-xs">
              {{ item?.category }}
            </span>
          </div>
        </div>

        <h3 class="text-white"> item name: {{ item.title }}</h3>
        <p class="text-blue">${{ item.price }}</p>
        <span> rating : {{item?.rating?.rate}} </span>

        <button class="store-item__button">Add to cart</button>
      </article>
    </div>
  </section>

  <p v-if="error" class="store-error">
    Failed to load products. Please try again.
  </p>
</template>

<style scoped>
.store-item {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.store-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
}


.store-item__price {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.store-item__button {
  margin-top: auto;
  background: #111;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
}

.store-item__button:hover {
  background: #333;
}
</style>
