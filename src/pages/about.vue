<script setup lang="ts">
import { ref } from 'vue'
import AboutCardSection from '@/components/AboutCardSection.vue'

const cards = ref<AccountCard[]>([
  {
    title: 'Vue3 Enthusiast',
    link: {
      label: 'Practising Vue3',
      redirect: 'https://vuejs.org/',
    },
    image: '/src/components/icons/vue.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt sem eget ultricies eleifend. Nunc et dolor sed tellus luctus molestie. Fusce dapibus consequat risus ut fringilla.',
    class: 'text-lime',
  },
  {
    title: 'TypeScript lover',
    link: {
      label: 'Learning new stuff in TS',
      redirect: 'https://www.typescriptlang.org/',
    },
    image: 'src/components/icons/Typescript_logo_2020.svg.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt sem eget ultricies eleifend. Nunc et dolor sed tellus luctus molestie. Fusce dapibus consequat risus ut fringilla.',
    class: 'text-blue',
  },
  {
    title: 'HTML architect',
    link: {
      label: 'Visit my GitHub account',
      redirect: 'https://github.com/fabiennikolov',
    },
    image: 'src/components/icons/174854.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt sem eget ultricies eleifend. Nunc et dolor sed tellus luctus molestie. Fusce dapibus consequat risus ut fringilla.',
    class: 'text-orange-6',
  },
  {
    title: 'CSS enjoyer',
    link: {
      label: 'Learning new stuff in CSS',
      redirect: 'https://unocss.dev/',
    },
    image: 'src/components/icons/csslogo1.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt sem eget ultricies eleifend. Nunc et dolor sed tellus luctus molestie. Fusce dapibus consequat risus ut fringilla.',
    class: 'text-blue',
  },
])
</script>

<template>
  <h2 style="text-align:center" mt25px text-4xl>
    About Me
  </h2>
  <AboutCardSection :cards="cards" />
  <!-- <div class="mx-auto p-4 grid gap-4 lg:grid-cols-3 lt-lg:w-fit justify-items-center">
    <AboutCard

      text-lime
    />
    <AboutCard
      title="HTML learner"
      :link="{
        label: 'Visit my GitHub account',
        redirect: 'https://github.com/fabiennikolov/learning-vue',
      }"
      image="/src/components/icons/174854.png"
      description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      text-orange-6
    />
    <AboutCard
      title="CSS enjoyer"
      :link="{
        label: 'Learning unocss',
        redirect: 'https://unocss.dev/',
      }"
      image="/src/components/icons/csslogo1.png"
      description="Learning new stuffs in CSS. Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      text-blue
    />
  </div> -->
</template>

<route lang="yaml">
meta:
  showOnNavbar: true
</route>
