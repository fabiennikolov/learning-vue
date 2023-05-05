<script setup lang="ts">
withDefaults(defineProps<{
  intent?: 'primary' | 'secondary'
}>(), {
  intent: 'primary',
})
</script>

<template>
  <button
    :class="[
      intent === 'primary'
        ? 'bg-slate4 text-blue-9 hover:bg-slate-3'
        : 'bg-gray-7 text-white hover:bg-gray-5',
    ]"
    class="px-5 py-4 rounded-2 transition-colors-300 shadow-[0px_4px_4px_#323232] b-2px text-center"
  >
    <slot />
  </button>
</template>
