<script setup lang="ts">
const title = ref('Hi, I am Fab')
const description = ref('I am learning web development using Vue3. In my spare time I enjoy playing chess and building my own projects.')
const msg = ref('Here in this website im creating my first responsive website layout for different type of pages')
</script>

<template>
  <div
    class="p-4 sm:p-8 max-w-300 w-full
    overflow-hidden bg-slate-2
    space-y-6 ma mb-3 rounded-3 b-3 b-slate-3"
  >
    <h1 text-40px my-2 ml3 text-5xl font-500>
      {{ title }}
    </h1>
    <div text-xl grid gap-4 ml3 leading-10 text-5 tracking-wider>
      <p mt1rem>
        {{ description }}
        <br> I'm on <a
          class="hover:text-red5 hover:no-underline text-blue-7"
          href="https://github.com/fabiennikolov" target="_blank"
        >GitHub</a>
        <a
          class="hover:text-red5 hover:no-underline text-blue-7"
          href="https://www.instagram.com/fabch0/" target="_blank"
        > instagram</a><br>
        {{ msg }}
      </p>
    </div>
  </div>
  <div class="bg-slate-2 text-center max-w-300 ma w-full rounded-3 b-3 b-slate-3">
    <div
      class=" space-x-3"
    >
      <router-link
        to="/blog" class="home-link"
      >
        Blog page
      </router-link>
      <router-link
        to="/ecommerce" class="home-link"
      >
        E-commerce
      </router-link>
      <router-link
        to="/contacts" class="home-link"
      >
        Contacts page
      </router-link>
      <router-link
        to="/contacts1" class="home-link"
      >
        404 page
      </router-link>
      <router-link
        to="/about" class="home-link"
      >
        about page
      </router-link>
    </div>
  </div>
</template>
