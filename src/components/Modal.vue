<script setup lang="ts">
const title = ref('Thank you for your message !')
const description = ref('We will contact you as soon as possible !')

const show = defineModel<boolean>('show', {
  required: true,
  default: false,
})

const modal = ref<HTMLDivElement | null>(null)
onClickOutside(modal, () => show.value = false)
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div ref="modal" class="modal-container">
        <button
          class="modal-default-button mb3 ml60 b-1 b-black rounded-2 bg-slate-2 px3 hover:bg-gray-3"
          @click="show = false"
        >
          X
        </button>
        <div class="mb5 text-center text-3xl">
          <slot name="header">
            {{ title }}
          </slot>
        </div>
        <br>
        <div class="modal-body mb3 text-center">
          <slot name="body">
            {{ description }}
          </slot>
        </div>
        <FormButtonModal @click="show = false" />
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  --uno: fixed top-0 left-0
  bg-black/60 w-full h-full
  transition-opacity-300
  grid place-items-center;
}

.modal-container {
  --uno: w-75 p3 py-3 rounded-2
    bg-white transition-all-300 bg-blue1 ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
