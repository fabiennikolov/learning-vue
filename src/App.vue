<template>
  <DefaultLayout
    class="min-h-screen flex flex-col justify-between"
  >
    <RouterView />
  </DefaultLayout>
</template>

<style>
::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background-color: #aaa; /* or add it to the track */
}
</style>
