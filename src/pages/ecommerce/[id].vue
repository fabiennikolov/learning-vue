<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const description = ref('Lorem ipsum asdajlwijalwijfalisjf')

const route = useRoute()
const id = computed(() => route.params.id)
</script>

<template>
  <article>
    <img :src="`https://via.placeholder.com/300x200.png?text=Product+${id}`" alt="Product 1">
    <h3>Product {{ id }}</h3>
    <p>
      {{ description }}
    </p>
    <button>Add to Cart</button>
  </article>
</template>
