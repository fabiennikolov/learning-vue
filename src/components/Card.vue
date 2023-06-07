<script setup lang="ts">
import type { Card } from '@/types'

defineProps<Card>()
</script>

<template>
  <div class="max-w-75 overflow-hidden b-2px b-black/25 rounded-2 bg-slate-3">
    <img :src="image" :alt="name" mb-5>
    <div class="px-5 py-7 space-y-6">
      <h3>{{ name }}</h3>
      <p>
        {{ description }}
      </p>
      <div flex flex-col items-center justify-center gap-2>
        <strong>BGN {{ price }}</strong>
        <Button>
          Add to Cart
        </Button>
        <RouterLink v-if="to" :to="to" class="border-1 b-black/40 rounded-2 bg-slate2 px2 text-black/90 transition-all-200 hover:scale-105 hover:bg-gray hover:text-white">
          Show details
        </RouterLink>
      </div>
    </div>
  </div>
</template>
