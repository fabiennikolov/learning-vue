<script setup lang="ts">
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
          class="modal-default-button mb2 ml60 b-1 b-black rounded-2 bg-slate-2 px3 hover:bg-gray-3"
          @click="show = false"
        >
          X
        </button>
        <div class="mb2 text-center text-3xl">
          <slot name="header">
            <p>Thank you for your message !</p>
          </slot>
        </div>
        <br>
        <div class="modal-body text-center">
          <slot name="body">
            <p>We will contact you as soon as possible !</p>
          </slot>
        </div>
        <div class="mb5">
          <label class="ml7 text-center">
            <p class="mb2 font-500">Subscribe to our newsletter</p>
            <input type="text" placeholder="email" class="input input-bordered input-xs ml1 b-1 b-black rounded-2 px2" @keyup.enter="show = false">
          </label>
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
  z-index: 2;
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
