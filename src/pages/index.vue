<script setup lang="ts">
interface ItemLink {
  to: string
  label: string
}

const followLinks: ItemLink[] = [
  { label: 'Ecommerce', to: '/ecommerce' },
  { label: 'Blog page', to: '/blog' },
  { label: 'Contacts', to: '/contacts' },
  { label: 'About', to: '/about' },
  { label: 'Cart', to: '/cart' },
  { label: 'Login', to: '/auth/login' },
]
</script>

<template>
  <div class="px-8 lg:px-4 py-8 lg:py-4">
    <div class="mx-auto max-w-200 flex flex-col items-center">
      <div
        class="px-4 mb-3 b-2 b-slate-3 b-transparent rounded-3 rounded-4 bg-slate-2 p-4 shadow-lg space-y-6"
      >
        <h1 class="my-2 text-40px text-4xl font-500">
          Hi, I am Fab
        </h1>
        <div class="grid gap-4 text-5 text-xl leading-10 tracking-normal">
          <p class="">
            I am learning web development using Vue3. In my spare time I enjoy playing chess and building my own projects.
            <br> I'm on <br><a
              class="p1 home-link"
              href="https://github.com/fabiennikolov" target="_blank"
            >GitHub</a>
            <a
              class="ml2 p1 home-link"
              href="https://www.instagram.com/fabch0/" target="_blank"
            > instagram</a><br>
            Here in this website im creating my first responsive website layout for different type of pages
          </p>
        </div>
      </div>
      <div class="ma max-w-300 w-full b-3 b-slate-3 b-transparent rounded-3 rounded-4 bg-slate-2 px-4 py-2 text-center shadow-lg lg:mxa">
        <div
          class="space-x-2"
        >
          <RouterLink
            v-for="link in followLinks" :key="link.label"
            :to="link.to" class="home-link"
          >
            {{ link.label }}
          </RouterLink>
          <!-- <router-link
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
          </router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>
