<script setup lang="ts">
import { defineModel } from 'vue'

const show = defineModel<boolean>('show', {
  required: true,
  default: false,
})
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="text-emerald-5">
          <slot name="header">
            default header
          </slot>
        </div>

        <div class="modal-body">
          <slot name="body">
            default body
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            default footer
            <button
              class="modal-default-button"
              @click="show = false"
            >
              OK
            </button>
          </slot>
        </div>
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
  --uno: w-75 mx-auto px-8 py-6 rounded-2
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
