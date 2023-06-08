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

const loading = ref(false)
async function submit() {
  loading.value = true
  const res = await axios.post('https://jsonplaceholder.typicode.com/posts', form)
  loading.value = false
}
</script>

<template>
  <h2 class="my5 text-center text-4xl font-500">
    {{ title }}
  </h2>

  <p class="my1 text-center text-2xl">
    {{ msg }}
  </p>

  <form @submit.prevent="submit">
    <div px-2 lg:px-6 md:px-5>
      <div class="mxa my-2rem max-w-200 border-[#B2BDD4] rounded-2 bg-gray-8 p-5 text-white">
        <FormInput id="Name" v-model="form.name" placeholder="Full name" />
        <FormInput id="Email" v-model="form.email" type="email" placeholder="Email" />
        <FormInput id="Number" v-model="form.number" placeholder="Number" />
        <FormTextarea id="comment" v-model="form.comment" placeholder="Comment..." />

        <button
          id="show-modal" class="relative mt10 w-full b-1 b-gray rounded-full bg-gray-7 px-5 py-4 text-center font-500 text-white transition-colors-250 after:absolute after:z-0 hover:bg-slate-5 after:transition-all-250 hover:after:opacity-65" type="submit"
          @click="showModal = true"
        >
          Send
        </button>
        <div class="mt3 flex place-content-evenly gap-4">
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

  <Teleport to="body">
    <Modal v-model:show="showModal" />
  </Teleport>
</template>

<route lang="yaml">
meta:
  showOnNavbar: true
</route>
