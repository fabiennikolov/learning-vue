<script setup lang="ts">
import type { Card as CardData } from '@/types'

const title = ref('This is a sample ecommerce page')

const products = ref<CardData[]>([
  { name: 'Product 1', image: 'Product+1', price: 13.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque risus aliquet sagittis iaculis.' },
  { name: 'Product 2', image: 'Product+2', price: 20.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque risus aliquet sagittis iaculis.' },
  { name: 'Product 3', image: 'Product+3', price: 110.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque risus aliquet sagittis iaculis.' },
  { name: 'Product 4', image: 'Product+4', price: 54.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque risus aliquet sagittis iaculis.' },
])
</script>

<template>
  <h1 class="my5 text-center text-4xl font-500">
    {{ title }}
  </h1>
  <section class="m8 flex flex-wrap items-center justify-center gap-4 text-center">
    <Card
      v-for="product in products"
      :key="product.name" class="b-transparent shadow-md drop-shadow-xl"
      v-bind="product" :image="`https://via.placeholder.com/600x400?text=${product.image}`"
      :to="`/ecommerce/${product.name.split(' ')[1]}`"
    />
  </section>
</template>

<route lang="yaml">
meta:
  showOnNavbar: true
</route>
