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
    b="4 slate"

    max-w-75 w-full overflow-hidden rounded-3 bg-slate-6 p-4 space-y-6 sm:p-8
  >
    <h4 class="font-inter text-(center 2xl) font-extrabold leading-relaxed">
      {{ title }}
    </h4>
    <div flex="~ col" items-center gap-3>
      <div h-40 w-50>
        <img :src="image" mx-auto h-full object-contain>
      </div>
      <a
        mx-auto inline-block text-sm font-medium
        :href="link.redirect" target="_blank"
      >
        {{ link.label }}</a>
    </div>
    <p v-if="description" class="mt10px text-center leading-7 text-white">
      {{ description }}
    </p>
  </div>
</template>
