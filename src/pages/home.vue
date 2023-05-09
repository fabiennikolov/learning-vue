<script setup lang="ts">
</script>

<template mx-auto max-w-300 p-4 grid gap-6 lg:grid-cols-4 lt-lg:w-fit justify-items-center>
  <section flex flex-col items-center justify-center gap-2>
    <h2>Welcome to my website</h2>
    <p>This is a sample website layout using HTML and CSS.</p>
    <div class="container">
      <article>
        <h3>Article 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, lectus eget convallis congue,
          sem
          purus accumsan tortor, eget malesuada arcu elit non elit. Nulla vel malesuada massa.
        </p>
      </article>
      <article>
        <h3>Article 2</h3>
        <p>
          Phasellus eget mi lacus. Maecenas sed nibh tortor. Integer consequat lacus nec metus dignissim, ut
          mollis
          nisl auctor. Nullam vel augue id velit dictum semper.
        </p>
      </article>
      <article>
        <h3>Article 3</h3>
        <p>
          Phasellus eget mi lacus. Maecenas sed nibh tortor. Integer consequat lacus nec metus dignissim, ut
          mollis
          nisl auctor. Nullam vel augue id velit dictum semper.
        </p>
      </article>
      <article>
        <h3>Article 4</h3>
        <p>
          Phasellus eget mi lacus. Maecenas sed nibh tortor. Integer consequat lacus nec metus dignissim, ut
          mollis
          nisl auctor. Nullam vel augue id velit dictum semper.
        </p>
      </article>
      <article>
        <h3>Article 5</h3>
        <p>
          Phasellus eget mi lacus. Maecenas sed nibh tortor. Integer consequat lacus nec metus dignissim, ut
          mollis
          nisl auctor. Nullam vel augue id velit dictum semper.
        </p>
      </article>
      <article>
        <h3>Article 6</h3>
        <p>
          Phasellus eget mi lacus. Maecenas sed nibh tortor. Integer consequat lacus nec metus dignissim, ut
          mollis
          nisl auctor. Nullam vel augue id velit dictum semper.
        </p>
      </article>
    </div>
  </section>
</template>

<style scoped>
article {
  --at-apply: pl-6 b-l-(1 slate-3);
}
</style>

<route lang="yaml">
meta:
  showOnNavbar: true
</route>
