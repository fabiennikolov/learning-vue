<script setup lang="ts">
</script>

<template>
  <div class="pxa mxa lg:mxa">
    <div class="m10 my-2rem max-w-200 b-transparent rounded-4 shadow-xl drop-shadow mxa p3">
      <div class="rounded-8 bg-white p8">
        <h4 class="text-8 font-500">
          Shopping Cart
        </h4>
        <div class="mb-5 text-sm text-black/80">
          x items
        </div>
        <div>
          <router-link to="ecommerce" class="b-1 b-black rounded-2 p1 transition-all-500 hover:bg-gray-9 text-xs lg:text-4">
            &lt;= Back to shop
          </router-link>
        </div>
      </div>
      <div class="rounded-5 bg-#ddd p-6 color-#414141">
        <div>
          <h5 class="ml1 mt4">
            Summary
          </h5>
        </div>
        <hr class="my4">
        <div class="w100% b-1 b-black/50 rounded-2 p1 text-xs lg:text-4">
          <div>
            Total Price &euro; 137.00
          </div>
        </div>
        <button class="pxa mxa mt-5 inline-block w-100% text-xs justify-center b-black rounded-2 bg-black p1 text-3 font-300 lg:font-400 uppercase color-white hover:bg-gray-9">
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>
