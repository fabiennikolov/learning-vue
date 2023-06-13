<script setup lang="ts">
import { computed } from 'vue'
import router from '@/router'

const navItems = computed(() => {
  return router.getRoutes().filter(route => route.meta.showOnNavbar)
})
</script>

<template>
  <div>
    <Nav />
    <main>
      <slot />
    </main>
    <footer class="flex flex-wrap justify-center gap-4 bg-#444 p8 text-center text-12px text-[#8abcbc]">
      <router-link to="/" class="uppercase">
        Home
      </router-link>

      <RouterLink
        v-for="route in navItems"
        :key="route.name"
        :to="route.path" class="uppercase"
      >
        {{ route.name }}
      </RouterLink>
      <div class="footermsg">
        <p>&copy; 2023 My Website. All rights reserved. </p>
      </div>
    </footer>
  </div>
</template>

<style>
footer a:hover {
  --uno: hover:scale-120 transition-all-500 text-white
}
img {
  transition: transform 0.3s ease;
}
img:hover {
  transform: scale(1.1);
}
</style>
