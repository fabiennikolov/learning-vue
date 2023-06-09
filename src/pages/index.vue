<script setup lang="ts">
const title = ref('Hi, I am Fab')
const description = ref('I am learning web development using Vue3. In my spare time I enjoy playing chess and building my own projects.')
const msg = ref('Here in this website im creating my first responsive website layout for different type of pages')
</script>

<template>
  <div mxa my-4 px-4 sm:mxa lg:max-w-200 sm:max-w-150>
    <div
      class="ma mb-3 b-2 b-slate-3 b-transparent rounded-3 rounded-4 bg-slate-2 p-4 shadow-lg space-y-6"
    >
      <h1 class="my-2 ml3 text-40px text-4xl font-500">
        {{ title }}
      </h1>
      <div class="grid ml3 gap-4 text-5 text-xl leading-10 tracking-wider">
        <p class="mt1rem">
          {{ description }}
          <br> I'm on <a
            class="transition-all-350 social-link"
            href="https://github.com/fabiennikolov" target="_blank"
          >GitHub</a>
          <a
            class="transition-all-350 social-link"
            href="https://www.instagram.com/fabch0/" target="_blank"
          > instagram</a><br>
          {{ msg }}
        </p>
      </div>
    </div>
    <div class="ma max-w-300 w-full b-3 b-slate-3 b-transparent rounded-3 rounded-4 bg-slate-2 text-center shadow-lg lg:mxa">
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
  </div>
</template>
