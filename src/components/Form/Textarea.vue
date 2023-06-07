<script setup lang="ts">
const props = withDefaults(defineProps<{
  maxLength?: number
}>(), {
  maxLength: 5000,
})

const modelValue = defineModel<string>()
</script>

<template>
  <textarea
    v-model="modelValue"
    class="my-1 my-20px h-40 w-full flex resize-none items-center gap-2 border-1 border-[#B2BDD4] rounded-lg bg-transparent px-5 py-2.5 text-white shadow-none transition-box-shadow duration-300 focus:border-neutral-4 placeholder:leading-5.5 focus:shadow-[0_0_0_0.2rem_var(--un-shadow-color)] focus:shadow-neutral-3/50 focus-visible:outline-none focus:ring-transparent" :maxlength="maxLength"
  />
</template>
