<script setup lang="ts">
import { ref } from 'vue'
import type { ActiveToast } from 'vue-toast-notification'
import { useToast } from 'vue-toast-notification'
import type { Card } from '@/types'
import 'vue-toast-notification/dist/theme-sugar.css'

defineProps<Card>()

const toastInstance = ref<ActiveToast>()

const $toast = useToast()

function showToast() {
  toastInstance.value = $toast.success('Item added to cart!', {
    position: 'top-right',
  })
}
</script>

<template>
  <div class="max-w-75 overflow-hidden b-2px b-black/25 rounded-2 bg-slate-3">
    <img :src="image" :alt="name" class="mb-5">
    <div class="px-5 py-7 space-y-6">
      <h3>{{ name }}</h3>
      <p>
        {{ description }}
      </p>
      <div class="flex flex-col items-center justify-center gap-2">
        <strong>BGN {{ price }}</strong>
        <Button @click="showToast">
          Add to Cart
        </Button>
        <RouterLink v-if="to" instance :to="to" class="border-1 b-black/40 rounded-2 bg-slate2 px2 text-black/90 transition-all-200 hover:scale-105 hover:border-white hover:bg-gray hover:text-white">
          Show details
        </RouterLink>
      </div>
    </div>
  </div>
</template>
