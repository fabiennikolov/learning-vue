<script setup lang="ts">
import { computed, ref } from 'vue'
import router from '@/router'

const footermsg = ref('2023 My Website. All rights reserved.')

const navItems = computed(() => {
  return router.getRoutes().filter(route => route.meta.showOnNavbar)
})
</script>

<template>
  <div class="sticky overflow-hidden">
    <nav>
      <router-link to="/">
        <img src="@/assets/logos/logo.png" class="my2 inline-block max-w-15">
      </router-link>

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
      <div class="my2 ml100 inline-block max-w-10">
        <router-link to="/cart">
          <img src="src/assets/logos/cart.png" class="">
        </router-link>
      </div>
    </nav>
    <main>
      <slot />
    </main>
    <footer>
      <p>&copy; {{ footermsg }}</p>
      <router-link to="/">
        Home
      </router-link>

      <RouterLink
        v-for="route in navItems"
        :key="route.name"
        :to="route.path" class="capitalize"
      >
        {{ route.name }}
      </RouterLink>
    </footer>
  </div>
</template>

<style>
header {
  background-color: #333;
  color: white;
  text-align: center;
}
nav {
  background-color: #444;
  color: white;
  padding: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
}

nav a {
  --uno:  text-[#8abcbc] hover:text-lime;
  transition-property: text-decoration-color, color;
  transition-duration: 500ms;
  transition-timing-function: ease;
  text-decoration: none;
  display: block;
  text-align: center;
}

nav a:hover {
  --uno: hover:scale-120 transition-all-500

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
  text-align: center;
  padding: 5rem;
  background-color: #444;
  padding: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  --uno:  text-[#8abcbc]
}
footer a:hover {
  --uno: hover:scale-120 transition-all-500 text-lime
}
img {
  transition: transform 0.3s ease;
}
img:hover {
  transform: scale(1.1);
}
</style>
