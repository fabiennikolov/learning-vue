<script setup lang="ts">
import { ref } from 'vue'
import AboutCardSection from '@/components/AboutCardSection.vue'

const title = ref('About me')
const description = ref('These are some of the technologies i am interested in.')

const cards = ref<AccountCard[]>([
  {
    title: 'Vue3 Enthusiast',
    link: {
      label: 'Practising Vue3',
      redirect: 'https://vuejs.org/',
    },
    image: 'src/assets/vue-logo.svg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt sem eget ultricies eleifend. Nunc et dolor sed tellus luctus molestie. Fusce dapibus consequat risus ut fringilla.',
    class: 'text-lime',
  },
  {
    title: 'TypeScript lover',
    link: {
      label: 'Learning new stuff in TS',
      redirect: 'https://www.typescriptlang.org/',
    },
    image: 'src/assets/logos/typescript-logo.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt sem eget ultricies eleifend. Nunc et dolor sed tellus luctus molestie. Fusce dapibus consequat risus ut fringilla.',
    class: 'text-blue',
  },
  {
    title: 'HTML architect',
    link: {
      label: 'Visit my GitHub account',
      redirect: 'https://github.com/fabiennikolov',
    },
    image: 'src/assets/logos/html-logo.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt sem eget ultricies eleifend. Nunc et dolor sed tellus luctus molestie. Fusce dapibus consequat risus ut fringilla.',
    class: 'text-orange-6',
  },
  {
    title: 'CSS enjoyer',
    link: {
      label: 'Learning new stuff in CSS',
      redirect: 'https://unocss.dev/',
    },
    image: 'src/assets/logos/css-logo.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt sem eget ultricies eleifend. Nunc et dolor sed tellus luctus molestie. Fusce dapibus consequat risus ut fringilla.',
    class: 'text-blue',
  },
])
</script>

<template>
  <h2 style="text-align:center" my5 text-5xl>
    {{ title }}
  </h2>
  <p my1 text-center text-2xl>
    {{ description }}
  </p>
  <AboutCardSection :cards="cards" />
</template>

<route lang="yaml">
meta:
  showOnNavbar: true
</route>
