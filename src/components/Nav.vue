<script setup lang="ts">
import { ref } from 'vue'

const navCheckbox = ref<HTMLInputElement | null>(null)

const navItems = computed(() => {
  return useRouter().getRoutes().filter(route => route.meta!.showOnNavbar)
})

function closeNav() {
  if (navCheckbox.value)
    navCheckbox.value.checked = false
}
</script>

<template>
  <div class="flex justify-center gap-8 bg-#555 text-start text-[#8abcbc] text-12px lg:text-1rem">
    <div class="nav flex justify-center gap-8 bg-#555 text-start text-[#8abcbc] text-12px lg:text-1rem">
      <input id="nav-check" ref="navCheckbox" type="checkbox">
      <div class="nav-header">
        <div class="nav-title">
          <router-link to="/">
            <img src="@/assets/logos/logo.png" class="my3 inline-block max-w-15">
          </router-link>
        </div>
      </div>
      <div class="nav-btn mt3 right-0 top-0 justify-center lg:display-none mr2">
        <label for="nav-check">
          <span />
          <span />
          <span />
        </label>
      </div>
      <div class="nav-links ma inline justify-center z-2">
        <RouterLink
          v-for="route in navItems"
          :key="route.name"
          :to="route.path" class="uppercase"
          @click="closeNav"
        >
          {{ route.name }}
        </RouterLink>
        <router-link to="/cart" class="uppercase">
          Cart
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

.nav > .nav-links > a {
  display: inline-block;
  padding: 1rem;
  text-decoration: none;
  color: #8abcbc;
}

a:hover {
  --uno: transition-all-500 hover:text-white bg-gray-3/10 lg:bg-transparent
}

.nav > #nav-check {
  display: none;
}

@media (max-width:600px) {
  .nav > .nav-btn {
    display: inline-block;
    position: absolute;

  }
  .nav > .nav-btn > label {
    display: inline-block;
    padding: 1rem;
    padding-bottom: 5px;
  }
  .nav > .nav-btn > label:hover,.nav  #nav-check:checked ~ .nav-btn > label {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .nav > .nav-btn > label > span {
    display: flex;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
  .nav > .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: #555;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top:4.55rem;
  }
  .nav > .nav-links > a {
    display: block;
  }
  .nav > #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }
  .nav > #nav-check:checked ~ .nav-links {
    height: calc(16rem);
    overflow-y: auto;
  }
}
</style>
