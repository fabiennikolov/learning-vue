<script setup lang="ts">
import Button from '@/components/Button.vue'

defineProps<{
  name: string
  description?: string
  image: string
  price: number
  to?: string
}>()
</script>

<template>
  <div max-w-100 rounded-2 overflow-hidden bg-slate-3>
    <img :src="image" :alt="name" mb-5>
    <div class="space-y-6 px-5 py-7">
      <h3>{{ name }}</h3>
      <p>
        {{ description }}
      </p>
      <div flex flex-col items-center justify-center gap-2>
        <strong>BGN {{ price }}</strong>
        <Button>Add to Cart</Button>
        <RouterLink v-if="to" :to="to" hover:text-blue hover:underline>
          Show details
        </RouterLink>
      </div>
    </div>
  </div>
</template>
