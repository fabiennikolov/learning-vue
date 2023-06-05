<script setup lang="ts">
const show = defineModel<boolean>('show', {
  required: true,
  default: false,
})
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <button
          class="modal-default-button b-1 rounded-2 px3
            bg-slate-2 hover:bg-gray-4 b-black mb3 ml60"
          @click="show = false"
        >
          X
        </button>
        <div class="text-3xl mb5 text-center">
          <slot name="header">
            Thank you for your message !
          </slot>
        </div>
        <br>
        <div class="modal-body mb3 text-center">
          <slot name="body">
            We will contact you as soon as possible !
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
  bg-black/50 w-full h-full
  transition-opacity-300 isolate;
}

.modal-container {
  --uno: w-75 mt75 mx-auto p3 py-3 rounded-2
    bg-white transition-all-300 ease;
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
