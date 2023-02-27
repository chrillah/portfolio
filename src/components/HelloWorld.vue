<script>
  export default {
    // Kommer ifrån App.vue komponenten, där skriver man meddelandet som...
    props: {
      msg: String
    }
  }
</script>

<style>
  p {
    font-weight: bold;
  }
</style>

<template>
  <!-- ...visas här -->
  <p>{{ msg }}</p>
</template>
