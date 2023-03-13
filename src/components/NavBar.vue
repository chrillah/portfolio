<template>
  <nav :class="menu">
    <div class="button-container">
      <RouterLink @click="closeMenu" to="/" class="logo-container">
        <img class="logo" src="/assets/img/logo.svg" alt="" />
      </RouterLink>

      <div class="mobile-btn-container">
        <button v-if="isClosed" @click="openMenu" class="close-menu-btn">
          --
        </button>
        <button v-if="!isClosed" @click="closeMenu" class="close-menu-btn">
          X
        </button>
      </div>
    </div>
    <ul :style="{ display: displays }" class="links-container">
      <li class="link-item">
        <RouterLink @click="closeMenu" class="link" to="/">Hem</RouterLink>
      </li>
      <li class="link-item">
        <RouterLink @click="closeMenu" class="link" to="/about">Om</RouterLink>
      </li>
      <li class="link-item">
        <RouterLink @click="closeMenu" class="link" to="/work">Jobb</RouterLink>
      </li>
    </ul>
  </nav>
  <RouterView />
  <FooterSection />
</template>
<script>
  import FooterSection from './FooterSection.vue'
  export default {
    components: {
      FooterSection
    },
    data() {
      return {
        menu: "nav-bar invert-color",
        isClosed: true,
        displays: 'none'
      }
    },
    methods: {
      openMenu() {
        this.displays = 'grid'
        this.isClosed = false
        this.menu = "nav-bar nav-back-ground"
      },
      closeMenu() {
        this.displays = 'none'
        this.isClosed = true
        this.menu = "nav-bar invert-color"
      }
    }
  }
</script>
<style>
  .nav-bar {

    /* top: 0.3rem; */
    /* left: 50%;
    transform: translate(-50%); */
    width: 100%;
    margin: 0 auto;
    position: fixed;
    z-index: 100;
  }

  .nav-back-ground{
    background-color: var(--primary-bg);
  }

  .invert-color{
    filter: invert(1);
    mix-blend-mode: difference;
  }

  .logo {
    display: none;
    padding: 0 0.3rem;
    padding-top: 0.3rem;
    box-sizing: border-box;
    height: 30px;
    margin: 0;
  }
  .button-container {
    /* color: #000000;
    filter: invert(1);
    mix-blend-mode: difference; */
    display: flex;
    justify-content: space-between;
  }

  .close-menu-btn {
    cursor: pointer;
    /* border-left: var(--border); */
    border: 1px solid;
    padding: 0.6rem 0.8rem;
  }

  .links-container {
    grid-template-columns: 1fr;
    min-height: 100svh;
  }

  .link-item {
    position: relative;
    top: 0px;
    animation-name: open;
    animation-duration: 0.1s;
    border-top: var(--border);
    text-align: center;
    background-color: var(--primary-bg);
  }

  @keyframes open {
    from {
      background-color: var(--primary-bg);
      top: -300px;
    }

    to {
      background-color: #ffffff;
      top: 0;
    }
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 900;
    text-decoration: none;
    color: var(--primary-color);
  }

  @media (min-width: 769px) {
    /* .mobile-btn-container{
      display: none;
    } */
    .links-container {
      display: grid;
    }
  }
</style>
