<script setup lang="ts">
import { RouterView } from 'vue-router'
import DefaultLayout from './layouts/DefaultLayout.vue'
</script>

<template>
  <DefaultLayout class="body-extend min-h-screen flex flex-col justify-between">
    <RouterView />
  </DefaultLayout>
</template>

<style>

</style>

<style scoped>
.body-extend {
  /* min-height: 100vh; */
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: space-between; */
}
</style>
