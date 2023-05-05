<script setup lang="ts">
import { ref } from 'vue'
import Card from '@/components/Card.vue'

const products = ref<ProductCardData[]>([
  { name: 'Product 1', image: 'Product+1', price: 13.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque risus aliquet sagittis iaculis.' },
  { name: 'Product 2', image: 'Product+2', price: 20.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque risus aliquet sagittis iaculis.' },
  { name: 'Product 3', image: 'Product+3', price: 110.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque risus aliquet sagittis iaculis.' },
  { name: 'Product 4', image: 'Product+4', price: 54.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque risus aliquet sagittis iaculis.' },
])
</script>

<template>
  <section flex items-center gap-4 flex-wrap justify-center>
    <Card
      v-for="product in products" :key="product.name"
      v-bind="product" :image="`https://via.placeholder.com/600x400?text=${product.image}`"
      :to="`/ecommerce/${product.name.split(' ')[1]}`"
    />
  </section>
</template>

<route lang="yaml">
meta:
  showOnNavbar: true
</route>
