<template>
  <form class="border-[#B2BDD4] bg-gray-8 text-white p-5 rounded-2 max-w-200 mx-auto my-2rem">
    <h1 m-b2rem pl20px>
      Contact Form
    </h1>
    <input id="Name" placeholder="full name" class="pl20px mb2rem py-1 p-none bg-transparent border-none focus:ring-none focus-visible:outline-none w-full truncate">
    <input id="Email" placeholder="e-mail" class="pl20px mb2rem py-1 p-none bg-transparent border-none focus:ring-none focus-visible:outline-none w-full truncate">
    <input id="number" placeholder="number" class="pl20px border-[#B2BDD4] rounded-lg text-white py-1 p-none bg-transparent focus:ring-none focus-visible:outline-none w-full truncate">
    <div>
      <textarea id="comment" class="mt2rem h-40 py-2.5 px-5 my-1 w-full flex items-center gap-2 border-1 border-[#B2BDD4] rounded-lg text-white shadow-none bg-transparent transition-box-shadow duration-300 focus:ring-transparent focus-visible:outline-none focus:shadow-neutral-3/50 focus:border-neutral-4 focus:shadow-[0_0_0_0.2rem_var(--un-shadow-color)] resize-none placeholder:leading-5.5" placeholder="Comment..." maxlength="5000" />
    </div>
    <button class="mt10 rounded-full text-black px-5 py-4 w-full relative transition-colors-250 bg-gray-7 text-white font-500 overflow-hidden hover:after:opacity-65 after:z-0 after:block after:absolute after:absolute-stretch after:transition-all-250 after:bg-image-[var(--dark-gradient)]" type="submit">
      <div class="w-full h-full relative z-1">
        <span class="visible">Send</span><div class="hidden absolute absolute-stretch items-center justify-center" />
      </div>
    </button>
  </form>
</template>

<route lang="yaml">
meta:
  showOnNavbar: true
  </route>
