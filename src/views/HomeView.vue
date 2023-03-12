<template>
  <HeroSection />
  <AboutMe />
  <WorkExperience />
  <!-- <div
      style="background-image: url('/assets/img/waste_of_space.png');"
      class="hero-container"
    ></div> -->
</template>
<script>
  import HeroSection from '../components/HeroSection.vue'
  import AboutMe from '../components/AboutMe.vue'
  import WorkExperience from '../components/WorkExperience.vue';
  export default {
    components: {
      HeroSection,
      AboutMe,
      WorkExperience
    }
  }
</script>

<style>
  .hero-container {
    height: 100svh;
    background-position: center;
    background-size: cover;
  }
</style>
