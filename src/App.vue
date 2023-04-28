<script setup lang="ts">
import { RouterView } from 'vue-router'
import DefaultLayout from './layouts/DefaultLayout.vue'
</script>

<template>
  <DefaultLayout
    class="min-h-screen flex flex-col justify-between"
  >
    <RouterView />
  </DefaultLayout>
</template>

<style>

</style>
