<script setup lang="ts"></script>

<template>
  <div class="pxa">
    <div class="m10 my-2rem max-w-200 b-transparent rounded-4 shadow-2xl lg:mxa">
      <div class="rounded-8 bg-white p8">
        <h4 class="text-8 font-500">
          Shopping Cart
        </h4>
        <div class="mb-5 text-sm text-black/80">
          x items
        </div>
        <div>
          <router-link to="ecommerce" class="b-1 b-black rounded-2 p1 transition-all-500 hover:bg-gray-3">
            &leftarrow; Back to shop
          </router-link>
        </div>
      </div>
      <div class="col-md-4 summary rounded-5 bg-#ddd p-6 color-#414141">
        <div>
          <h5 class="ml1 mt4">
            Summary
          </h5>
        </div>
        <hr class="my4">
        <div class="w50 b-1 b-black/50 rounded-2 p1">
          <div>
            Total Price &euro; 137.00
          </div>
        </div>
        <button class="mxa mt-5 inline-block w-50% justify-center b-black rounded-2 bg-black p2 text-3 font-400 color-white lg:w-27% md:w-27% hover:bg-gray-9">
          CHECKOUT
        </button>
      </div>
    </div>
  </div>
</template>
