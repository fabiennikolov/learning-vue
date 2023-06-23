<script setup lang="ts">
// const navItems = computed(() => {
//   {}
// })
</script>

<template>
  <div min-h-screen flex flex-col justify-between>
    <header>
      <Nav />
    </header>
    <main>
      <RouterView />
    </main>
    <footer class="flex flex-wrap justify-center gap-4 bg-#444 p8 text-center text-12px lg:text-1rem text-[#8abcbc]">
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
