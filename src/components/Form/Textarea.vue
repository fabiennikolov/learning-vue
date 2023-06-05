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
    class="my-20px h-40 py-2.5 px-5 my-1 w-full flex items-center gap-2 border-1
      border-[#B2BDD4] rounded-lg text-white
      shadow-none bg-transparent transition-box-shadow duration-300 focus:ring-transparent
      focus-visible:outline-none focus:shadow-neutral-3/50
      focus:border-neutral-4 focus:shadow-[0_0_0_0.2rem_var(--un-shadow-color)] resize-none
      placeholder:leading-5.5" :maxlength="maxLength"
  />
</template>
