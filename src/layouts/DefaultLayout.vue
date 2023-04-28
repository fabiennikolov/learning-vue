<script setup lang="ts">
import { computed } from 'vue'
import router from '@/router'

const navItems = computed(() => {
  return router.getRoutes().filter(route => route.meta.showOnNavbar)
})
</script>

<template>
  <div>
    <header>
      <h1>My Website</h1>
      <nav>
        <RouterLink
          v-for="route in navItems" :key="route.name"
          :to="route.path" class="capitalize"
        >
          {{ route.name }}
        </RouterLink>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <p>&copy; 2023 My Website. All rights reserved.</p>
    </footer>
  </div>
</template>

<style>
header {
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
}

nav {
  background-color: #444;
  color: white;
  padding: 10px;
  text-align: center;
  /* display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem; */
}

nav > *:not(:first-child) {
  margin-left: 1rem;
}

nav a {
  --uno: text-[#8abcbc] hover:text-lime underline;
  transition-property: text-decoration-color, color;
  transition-duration: 500ms;
  transition-timing-function: ease;
}

nav a:hover {
  /* color: greenyellow; */
  text-decoration-color: greenyellow;
}
/* section {
  margin: 20px;
  padding: 10px;

} */

/* article {
  border: 1px solid #ddd;
  margin: 10px;
  padding: 10px;
} */

footer {
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
}
</style>
