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
      <router-link to="/home">
        <img src="/src/components/icons/logo.png" inline-block max-w-15 my1 alt="">
      </router-link>
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

nav > *:not(:first-child) {
  margin-left: 1rem;
}

nav a {
  --uno: text-[#8abcbc] hover:text-lime underline;
  transition-property: text-decoration-color, color;
  transition-duration: 500ms;
  transition-timing-function: ease;
  text-decoration: none;
}

nav a:hover {
  color: greenyellow;
  text-decoration-color: greenyellow;
  text-decoration: underline;
}
 section {
  margin: 20px;
  padding: 10px;

}
.container {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 1rem;
  min-width: auto;
}

article {
  border: 1px solid #ddd;
  padding: 10px;
  max-width: 25rem;
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 5rem;
}
img {
  transition: transform 0.3s ease;
}
img:hover {
  transform: scale(1.1);
}
</style>
