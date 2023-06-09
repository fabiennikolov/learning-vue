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
        ? 'bg-slate4 text-white hover:bg-slate-5'
        : 'bg-gray-7 text-white hover:bg-gray-5',
    ]"
    class="b-transparent rounded-2 px-3 py-2 text-center shadow-[0px_4px_4px_#323232] shadow-md drop-shadow-sm transition-colors-300"
  >
    <slot />
  </button>
</template>
