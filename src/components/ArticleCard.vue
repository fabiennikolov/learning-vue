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
    b="1 black" p-4 sm:p-8 max-w-75 w-full overflow-hidden space-y-6
  >
    <h4 class="font-inter font-extrabold text-(2xl center) leading-relaxed">
      {{ title }}
    </h4>
    <div flex="~ col" items-center gap-3>
      <div w-50 h-40>
        <img :src="image" object-contain mx-auto h-full>
      </div>
      <a
        inline-block mx-auto font-medium text-sm
        :href="link.redirect" target="_blank"
      >
        {{ link.label }}</a>
    </div>
    <p v-if="description" class="mt10px leading-7 text-center">
      {{ description }}
    </p>
  </div>
</template>
