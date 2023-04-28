<template>
  <input type="text" ml-10 mr-3 p-1 placeholder="Type your name">
  <input type="text" p-1 mr-3 placeholder="Type your email">
  <input type="tel" p-1 mr-3 placeholder="Type your phone number">
  <button px-5 py-4 rounded-2 transition-colors-300 bg-gray ml-2 text-white hover:bg-slate-3>
    Send
  </button>
</template>

<route lang="yaml">
meta:
  showOnNavbar: true
  </route>
