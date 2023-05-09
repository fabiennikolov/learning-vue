<script setup lang="ts">
import { ref } from 'vue'
import ArticleCardSection from '@/components/ArticleCardSection.vue'

const cards = ref<ArticleCard[]>([
  {
    title: 'What is Front End Development?',
    link: {
      label: 'learn more...',
      redirect: 'https://www.crowdbotics.com/blog-tags/front-end-development',
    },
    image: 'src/components/icons/front.webp',
    description: 'Front end development refers to the work that software developers do that is directly visible to the user.',
  },
  {
    title: 'Python vs Rust: Which is Better?',
    link: {
      label: 'learn more...',
      redirect: 'https://www.crowdbotics.com/blog/python-vs-rust-which-is-better',
    },
    image: 'src/components/icons/Python-vs.-Rust.png',
    description: 'Python and Rust, for example—they have a lot in common when it comes to how APIs should function, but thats where many of the similarities end',

  },
  {
    title: 'HTML architect',
    link: {
      label: 'Visit my GitHub account',
      redirect: 'https://github.com/fabiennikolov',
    },
    image: 'src/components/icons/174854.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt sem eget ultricies eleifend. Nunc et dolor sed tellus luctus molestie. Fusce dapibus consequat risus ut fringilla.',

  },
  {
    title: 'CSS enjoyer',
    link: {
      label: 'Learning new stuff in CSS',
      redirect: 'https://unocss.dev/',
    },
    image: 'src/components/icons/csslogo1.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt sem eget ultricies eleifend. Nunc et dolor sed tellus luctus molestie. Fusce dapibus consequat risus ut fringilla.',

  },
])
</script>

<template>
  <h2 style="text-align:center" my5 text-5xl>
    Articles
  </h2>
  <p my1 text-center>
    These are some of the topics i'm interested in.
  </p>
  <ArticleCardSection :cards="cards" />
</template>

<route lang="yaml">
meta:
  showOnNavbar: true
</route>
