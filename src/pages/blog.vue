<script setup lang="ts">
import { ref } from 'vue'
import ArticleCardSection from '@/components/ArticleCardSection.vue'

const title = ref('Articles that might be helpful')
const description = ref('Theese are some of the topics i am interested in.')

const cards = ref<ArticleCard[]>([
  {
    title: 'What is Front End Development?',
    link: {
      label: 'learn more...',
      redirect: 'https://www.crowdbotics.com/blog-tags/front-end-development',
    },
    image: 'src/components/icons/UXUIfeaturedimage-2.png',
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
    title: 'AI & Machine Learning',
    link: {
      label: 'learn more...',
      redirect: 'https://www.crowdbotics.com/blog/chatbots-in-the-workplace-pros-cons-and-best-practices',
    },
    image: 'src/components/icons/AI---ML.png',
    description: 'Whether you love them or hate them, chatbots are becoming more commonplace across many different industries. But should you implement this software at your organization?',

  },
  {
    title: 'What is App Usability Testing?',
    link: {
      label: 'learn more...',
      redirect: 'https://www.crowdbotics.com/blog/a-guide-to-mobile-app-usability-testing-methods-tools-and-best-practices',
    },
    image: 'src/components/icons/UX-UI-2.png',
    description: 'Usability testing is a powerful tool you can use to evaluate the functionality of your mobile application and helps you ensure that users are able to navigate your app efficiently and effectively.',
  },
])
</script>

<template>
  <h2 style="text-align:center" my5 text-4xl>
    {{ title }}
  </h2>
  <p my1 text-center text-6>
    {{ description }}
  </p>
  <ArticleCardSection :cards="cards" />
</template>

<route lang="yaml">
meta:
  showOnNavbar: true
</route>
