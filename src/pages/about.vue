<template>
  <h2 style="text-align:center" mt25px text-4xl>
    About Me
  </h2>
  <div class="container space-y-6 p-4 m-5 grid-cols-3">
    <div class="ml15 mt15 w300px">
      <div class="border-4 p-4 sm:p-8">
        <div class="font-inter font-extrabold text-2xl text-black tracking-tight pl18px">
          VueJs Enthusiast
        </div>
        <div class="mt-1 font-medium text-sm text-lime">
          <div class="img">
            <img src="/src/components/icons/vue.png" alt="">
          </div>
          <a href="https://github.com/fabiennikolov/learning-vue" target="_blank">Learning web-dev</a>
        </div>
        <p class="mt-4 leading-7 text-slate-500">
          Learning new stuffs in VueJs
        </p>
        <p class="mt-4 leading-7 text-slate-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  showOnNavbar: true
</route>
