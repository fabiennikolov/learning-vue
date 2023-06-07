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
    b="2 gray"

    class="max-w-75 w-full overflow-hidden rounded-3 bg-slate-6 p-4 space-y-6 sm:p-8"
  >
    <h4 class="font-inter text-(center 2xl) font-extrabold leading-relaxed transition-all-300 hover:scale-110">
      {{ title }}
    </h4>
    <div flex="~ col" class="items-center gap-3">
      <div class="h-40 w-50">
        <img :src="image" class="mx-auto h-full object-contain">
      </div>
      <a
        class="mx-auto inline-block text-sm font-medium transition-all-300 hover:scale-110"
        :href="link.redirect" target="_blank"
      >
        {{ link.label }}</a>
    </div>
    <p v-if="description" class="mt10px text-center leading-7 text-white">
      {{ description }}
    </p>
  </div>
</template>
