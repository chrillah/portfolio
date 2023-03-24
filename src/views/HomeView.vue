<template>
  <HeroSection />
  <AboutMeSection />
  <EducationSection />
  <WorkExperience />
  <!-- <div
      style="background-image: url('/assets/img/waste_of_space.png');"
      class="hero-container"
    ></div> -->
</template>
<script>
  import HeroSection from '../components/HeroSection.vue'
  import AboutMeSection from '../components/AboutMeSection.vue'
  import EducationSection from '../components/EducationSection.vue';
  import WorkExperience from '../components/WorkExperience.vue';
  export default {
    components: {
      HeroSection,
      AboutMeSection,
      EducationSection,
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
