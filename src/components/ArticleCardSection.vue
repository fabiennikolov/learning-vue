<script setup lang="ts">
import type { CardProps } from '@/types'

defineProps<{
  cards: CardProps[]
}>()
</script>

<template>
  <div class="grid mx-auto max-w-300 justify-center gap-6 p-4 lg:grid-cols-4 lt-lg:w-fit">
    <ArticleCard
      v-for="card in cards" :key="card.title"
      v-bind="card"
    />
  </div>
</template>
