<script setup lang="ts">
const modelValue = defineModel<string>()
</script>

<template>
  <input
    v-model="modelValue"
    class="px-5 text-white my-1 py-2 bg-transparent
        border-b-1 border-slate-1 outline-none
        focus:(ring-none bg-gray-7) transition-colors-300
        rounded-t-lg w-full truncate"
  >
</template>
