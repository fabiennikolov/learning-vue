<script setup lang="ts">
const modelValue = defineModel<string>()
</script>

<template>
  <input
    v-model="modelValue"
    class="my-1 w-full truncate border-b-1 border-gray rounded-t-lg bg-transparent px-5 py-2 text-white outline-none transition-colors-300 focus:(bg-gray-7 ring-none)"
  >
</template>
