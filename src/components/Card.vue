<script setup lang="ts">
import type { Card } from '@/types'

defineProps<Card>()
</script>

<template>
  <div max-w-75 overflow-hidden b-2px rounded-2 bg-slate-3>
    <img :src="image" :alt="name" mb-5>
    <div class="px-5 py-7 space-y-6">
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
