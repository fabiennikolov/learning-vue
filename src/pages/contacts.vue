<script setup lang="ts">
import { ref } from 'vue'
import Modal from '../components/Modal.vue'

const showModal = ref(false)

const title = ref('Contacts')
const msg = ref('Let me know if you have any questions.')
</script>

<template>
  <div class="home">
    <button id="show-modal" @click="showModal = true">
      Show Modal
    </button>

    <Teleport to="body">
      <Modal :show="showModal" @close="showModal = false">
        <template>
          <h3>Heading text</h3>
        </template>
      </Modal>
    </Teleport>
  </div>
  <h2 text-center my5 text-5xl class="">
    {{ title }}
  </h2>
  <p text-center my1 text-2xl>
    {{ msg }}
  </p>
  <div px-2 md:px-5 lg:px-6>
    <form class="border-[#B2BDD4] bg-gray-8 max-w-200 text-white p-5 rounded-2 my-2rem mxa">
      <input
        id="Name" placeholder="Full name" class="px-5 text-white my-1 py-1 bg-transparent
      border-none focus:ring-none focus-visible:outline-none w-full truncate"
      >
      <hr>
      <input
        id="Email" placeholder="Email" class="px-5 text-white my-1 my-1 py-1 bg-transparent
      border-none focus:ring-none focus-visible:outline-none w-full truncate"
      >
      <hr>
      <input
        id="number" placeholder="Number" class="px-5 my-1 py-1 border-[#B2BDD4] rounded-lg
       text-white py-1 p-none bg-transparent focus:ring-none focus-visible:outline-none w-full
       truncate"
      >
      <hr>
      <div>
        <textarea
          id="comment" class="my-20px h-40 py-2.5 px-5 my-1 w-full flex items-center gap-2 border-1
           border-[#B2BDD4] rounded-lg text-white
         shadow-none bg-transparent transition-box-shadow duration-300 focus:ring-transparent
          focus-visible:outline-none focus:shadow-neutral-3/50
          focus:border-neutral-4 focus:shadow-[0_0_0_0.2rem_var(--un-shadow-color)] resize-none
          placeholder:leading-5.5" placeholder="Comment..." maxlength="5000"
        />
      </div>
      <button
        class="hover:bg-slate-5 mt10 rounded-full text-black px-5 py-4 w-full relative transition-colors-250
       bg-gray-7 text-white font-500 overflow-hidden hover:after:opacity-65 after:z-0 after:block
        after:absolute after:absolute-stretch after:transition-all-250
        after:bg-image-[var(--dark-gradient)]" type="submit"
      >
        <div class="w-full h-full relative z-1">
          <span class="visible">Send</span><div
            class="hidden absolute absolute-stretch items-center
          justify-center"
          />
        </div>
      </button>
      <div class="flex gap-4 mt3 place-content-evenly">
        <a
          class="rounded-3 py.5 px.6 hover:bg-slate-5 bg-slate6 text-gray"
          href="https://github.com/fabiennikolov" target="_blank"
        >GitHub</a>
        <a
          class="rounded-3 py.5 px.6 hover:bg-slate-5 bg-slate6 text-gray"
          href="https://www.instagram.com/fabch0/" target="_blank"
        > instagram</a>
        <a href="tel:0897474851" class="rounded-3 b-2 py.5 px.6 hover:bg-slate-5">
          <i>0897474851</i></a>
      </div>
    </form>
  </div>
</template>

<route lang="yaml">
meta:
  showOnNavbar: true
  </route>
