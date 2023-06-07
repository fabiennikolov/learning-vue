<script setup lang="ts">
import type { Card } from '@/types'

defineProps<Card>()
const description = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
const title = ref('Here is some additional info about Product')
const route = useRoute()
const id = computed(() => route.params.id)
</script>

<template>
  <h1 class="mb3 text-center text-4xl font-500">
    {{ title }} {{ id }}
  </h1>
  <article class="grid mxa mt10 max-w-75 place-items-center b-1 b-slate3 rounded-3 bg-slate2 p3">
    <img :src="`https://via.placeholder.com/300x200.png?text=Product+${id}`" alt="Product 1">
    <h3 class="mt3 text-center">
      Product {{ id }}
    </h3>
    <p class="text-center">
      {{ description }}
    </p>
    <Button class="mt3">
      Add to Cart
    </Button>
  </article>
</template>
