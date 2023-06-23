<script setup lang="ts">
import type { CardProps } from '@/types'

defineProps<{
  cards: CardProps[]
}>()
</script>

<template>
  <div class="mx-auto  max-w-300 p-4 grid gap-6 lg:grid-cols-4 lt-lg:w-fit justify-items-center">
    <AboutCard
      v-for="card in cards" :key="card.title"
      v-bind="card"
    />
  </div>
</template>
