<script setup lang="ts">
import { computed } from 'vue'
import router from '@/router'

const navItems = computed(() => {
  return router.getRoutes().filter(route => route.meta.showOnNavbar)
})
</script>

<template>
  <div class="nav flex justify-center gap-8 bg-#555 text-start text-[#8abcbc]">
    <input id="nav-check" type="checkbox">
    <div class="nav-header">
      <div class="nav-title">
        <router-link to="/">
          <img src="@/assets/logos/logo.png" class="my3 inline-block max-w-15">
        </router-link>
      </div>
    </div>
    <div class="nav-btn">
      <label for="nav-check">
        <span />
        <span />
        <span />
      </label>
    </div>

    <div class="nav-links pt-3">
      <RouterLink
        v-for="route in navItems"
        :key="route.name"
        :to="route.path" class="uppercase"
      >
        {{ route.name }}
      </RouterLink>
      <router-link to="/cart" class="uppercase">
        Cart
      </router-link>
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

.nav {
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #666;
  position: relative;
  z-index: 1;
  font-size: small;
}

.nav > .nav-header {
  display: inline;
}

.nav > .nav-btn {
  display: none;
  margin-top: 1rem;
  justify-content:center;
}

.nav > .nav-links {
  display: inline;
  justify-content: center;
}

.nav > .nav-links > a {
  display: inline-block;
  padding: 1rem 1rem 5px 1rem;
  text-decoration: none;
  color: #8abcbc;
}

.nav > .nav-links > a:hover {
  --uno: lg:hover:scale-120 transition-all-500 hover:text-lime
}

.nav > #nav-check {
  display: none;
}

@media (max-width:600px) {
  .nav > .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .nav > .nav-btn > label {
    display: inline-block;
    width: 3rem;
    padding: 13px;
    padding-bottom: 5px;
    margin-right: 1rem;
  }
  .nav > .nav-btn > label:hover,.nav  #nav-check:checked ~ .nav-btn > label {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .nav > .nav-btn > label > span {
    display: block;
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
    top:4.5rem;
  }
  .nav > .nav-links > a {
    display: block;
  }
  .nav > #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }
  .nav > #nav-check:checked ~ .nav-links {
    height: calc(14rem);
    overflow-y: auto;
  }
}
</style>
