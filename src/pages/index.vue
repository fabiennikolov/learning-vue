<script setup lang="ts">
const title = ref('Hi, I am Fab')
const description = ref('I am learning web development using Vue3. In my spare time I enjoy playing chess and building my own projects.')
const msg = ref('Here in this website im creating my first responsive website layout for different type of pages')
</script>

<template>
  <div
    class="ma mb-3 max-w-300 w-full overflow-hidden b-3 b-slate-3 rounded-3 bg-slate-2 p-4 space-y-6 sm:p-8"
  >
    <h1 my-2 ml3 text-40px text-4xl font-500>
      {{ title }}
    </h1>
    <div grid ml3 gap-4 text-5 text-xl leading-10 tracking-wider>
      <p mt1rem>
        {{ description }}
        <br> I'm on <a
          class="social-link transition-all-350"
          href="https://github.com/fabiennikolov" target="_blank"
        >GitHub</a>
        <a
          class="social-link transition-all-350"
          href="https://www.instagram.com/fabch0/" target="_blank"
        > instagram</a><br>
        {{ msg }}
      </p>
    </div>
  </div>
  <div class="ma max-w-300 w-full b-3 b-slate-3 rounded-3 bg-slate-2 text-center">
    <div
      class="space-x-3"
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
