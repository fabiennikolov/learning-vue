<template>
  <div
    relative min-h-10 min-w-10 overflow-hidden bg-gray-2
    class="gradient-overlay"
  />
</template>

<style>
@keyframes appear-left {
  0% { transform: translateX(-120%); }
  100% { transform: translateX(120%); }
}

.gradient-overlay::before {
  content: '';
  animation: appear-left 1.75s ease-out infinite;
  --uno: absolute inset-0 z-1 from-transparent via-white/40 to-transparent bg-gradient-to-r;
}
</style>
