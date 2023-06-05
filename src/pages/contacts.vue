<script setup lang="ts">
const showModal = ref(false)

const title = ref('Contacts')
const msg = ref('Let me know if you have any questions.')

const form = reactive({
  name: '',
  email: '',
  number: '',
  comment: '',
})

const modal = ref<HTMLElement | null>(null)

onClickOutside(modal, () => {
  showModal.value = false
})

const loading = ref(false)
async function submit() {
  loading.value = true
  const res = await axios.post('https://jsonplaceholder.typicode.com/posts', form)
  loading.value = false
}
</script>

<template>
  <h2 text-center my5 text-5xl>
    {{ title }}
  </h2>

  <p text-center my1 text-2xl>
    {{ msg }}
  </p>

  <form @submit.prevent="submit">
    <div px-2 md:px-5 lg:px-6>
      <div class="border-[#B2BDD4] bg-gray-8 max-w-200 text-white p-5 rounded-2 my-2rem mxa">
        <FormInput id="Name" v-model="form.name" placeholder="Full name" />
        <FormInput id="Email" v-model="form.email" type="email" placeholder="Email" />
        <FormInput id="Number" v-model="form.number" placeholder="Number" />
        <FormTextarea id="comment" v-model="form.comment" placeholder="Comment..." />

        <button
          id="show-modal" class="hover:bg-slate-5 mt10 rounded-full text-black px-5 py-4 w-full relative
        transition-colors-250 bg-gray-7 text-white font-500 hover:after:opacity-65
        after:z-0 after:absolute after:transition-all-250 text-center" type="submit"
          @click="showModal = true"
        >
          Send
        </button>
        <div class="flex gap-4 mt3 place-content-evenly">
          <a
            class="form-link"
            href="https://github.com/fabiennikolov" target="_blank"
          >GitHub</a>
          <a
            class="form-link"
            href="https://www.instagram.com/fabch0/" target="_blank"
          > instagram</a>
          <a href="tel:0897474851" class="form-link">
            <i>0897474851</i></a>
        </div>
      </div>
    </div>
  </form>

  <Teleport ref="modal" to="body">
    <Modal v-model:show="showModal" />
  </Teleport>
</template>

<route lang="yaml">
meta:
  showOnNavbar: true
</route>
