<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const description = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')

const route = useRoute()
const id = computed(() => route.params.id)
</script>

<template>
  <h1 class="text-center mb3 text-4xl ">
    Here is some additional info about Product {{ id }}
  </h1>
  <article class="max-w-75 ml15">
    <img :src="`https://via.placeholder.com/300x200.png?text=Product+${id}`" alt="Product 1">
    <h3 class="mt3 text-center">
      Product {{ id }}
    </h3>
    <p>
      {{ description }}
    </p>
    <button class="px-3 py-2 rounded-2 transition-colors-300 shadow-[0px_4px_4px_#323232] b-1px hover:bg-slate-2 mt3">
      Add to Cart
    </button>
  </article>
</template>
