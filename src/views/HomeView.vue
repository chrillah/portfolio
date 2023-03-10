<template>
  <HeroSection />
    <!-- <div
      style="background-image: url('/assets/img/waste_of_space.png');"
      class="hero-container"
    ></div> -->
</template>
<script>
import HeroSection from '../components/HeroSection.vue'
  export default {
    components:{
      HeroSection
    }
  }
</script>

<style>
.hero-container{
  height: 100svh;
  background-position: center;
  background-size: cover;
}
</style>
