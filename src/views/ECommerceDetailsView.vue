<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = computed(() => route.params.id)
</script>

<template>
  <article>
    <img :src="`https://via.placeholder.com/300x200.png?text=Product+${id}`" alt="Product 1">
    <h3>Product {{ id }}</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, lectus eget convallis congue, sem
      purus accumsan tortor, eget malesuada arcu elit non elit. Nulla vel malesuada massa.
    </p>
    <p><strong>BGN19.99</strong></p>
    <button>Add to Cart</button>
  </article>
</template>
