import { defineStore } from 'pinia'

export const useCubicCounter = defineStore('cubic-counter', () => {
  const count = useStorage('cubuc-counter', 0)

  const cubicCount = computed(() => count.value ** 3)

  function increment() {
    count.value!++
  }
  function decrement() {
    count.value!--
  }

  return { count, cubicCount, increment, decrement }
})
