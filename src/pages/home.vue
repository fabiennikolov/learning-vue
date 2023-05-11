<script setup lang="ts">
</script>

<template>
  <div class=" bg-slate1 b-2 rounded-3 w50% m-auto p12px hauto my5 ">
    <h1 text-40px my-2 ml3 text-5xl>
      Hi, I'm Fab
    </h1>
    <div text-xl grid gap-4 ml3>
      <p mt1rem>
        I'm learning web development using Vue3. In my spare time I enjoy DIY,
        gaming and building my own projects.
      </p>
      <p>
        I'm on <a class="hover:text-red5 hover:no-underline text-blue-7 underline" href="https://github.com/fabiennikolov" target="_blank">GitHub</a>
      </p>
    </div>
  </div>
  <div class=" bg-slate1 b-2 rounded-3 w50% m-auto p12px hauto my5">
    <div text-xl grid gap-4 ml3>
      <p mt1rem text-center>
        Here in this website im creating my first responsive website layout for different type of pages
      </p>
      <router-link to="/blog" text-25px uppercase bg-white display-inline-block p5px mb10px mt10px rounded-3 b-black b-2 hover:bg-slate-3 text-center>
        Blog page
      </router-link>
      <router-link to="/ecommerce" text-25px uppercase bg-white display-inline-block p5px mb10px mt10px rounded-3 b-black b-2 hover:bg-slate-3 text-center>
        E-commerce
      </router-link>
      <router-link to="/contacts" text-25px uppercase bg-white display-inline-block p5px mb10px mt10px rounded-3 b-black b-2 hover:bg-slate-3 text-center>
        Contacts page
      </router-link>
      <router-link to="/contacts1" text-25px uppercase bg-white display-inline-block p5px mb10px mt10px rounded-3 b-black b-2 hover:bg-slate-3 text-center>
        404 page
      </router-link>
      <router-link to="/about" text-25px uppercase bg-white display-inline-block p5px mb10px mt10px rounded-3 b-black b-2 hover:bg-slate-3 text-center>
        about page
      </router-link>
    </div>
  </div>
</template>
