<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  image: string
  link: {
    label: string
    redirect: string
  }
}>()
</script>

<template>
  <div
    b="1 black" class="max-w-75 w-full overflow-hidden b-black rounded-3 bg-slate-1 p-4 space-y-6 sm:p-8"
  >
    <h4 class="text-(center 2xl) font-(extrabold) leading-relaxed">
      {{ title }}
    </h4>
    <div flex="~ col" class="items-center gap-3">
      <div class="h-40 w-50">
        <img :src="image" class="mx-auto h-full object-contain">
      </div>
      <a
        class="mx-auto inline-block b-1 b-black/70 rounded-2 bg-blue-3/60 px1 py1 text-sm font-medium transition-all-500 hover:scale-120"
        :href="link.redirect" target="_blank"
      >
        {{ link.label }}</a>
    </div>
    <p v-if="description" class="mt10px text-center leading-7">
      {{ description }}
    </p>
  </div>
</template>
