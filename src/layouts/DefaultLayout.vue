<script setup lang="ts">
import router from '@/router';

router.getRoutes()
</script>

<template>
<div>
    <ul>
      <li v-for="route in router.getRoutes()" :key="route.name">
        <RouterLink :to="route.path" class="capitalize"> {{ route.name }} </RouterLink>
      </li>
    </ul>
    <main class="bg-red">
        <slot></slot>
    </main>
</div>
</template>

<style scoped>
.bg-red {
    background-color: red;
}
</style>