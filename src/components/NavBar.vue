<template>
  <nav :class="menu">
    <button
      @click="expand"
      class="nav-button"
      aria-controls="primary-navigation"
      :aria-expanded="expanded.toString()"
    >
      <svg
        fill="var(--button)"
        class="hamburger"
        viewBox="0 0 100 100"
        width="40"
      >
        <rect class="line top" width="80" height="3" x="10" y="35" />
        <rect class="line bottom" width="80" height="3" x="10" y="65" />
      </svg>
    </button>
  </nav>
  <!-- <nav :class="menu">
    <div class="button-container">
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
  </nav> -->
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
        expanded: false,
        menu: "nav-bar invert-color",
        // menu: "nav-bar invert-color",
        // isClosed: true,
        // displays: 'none'
      }
    },
    methods: {
      expand() {
        if(this.expanded === false){
          this.expanded = true;
        } else{
          this.expanded = false;
        }
    }
      // expand() {
      //   this.isOpen = true
      // }
      // openMenu() {
      //   this.displays = 'grid'
      //   this.isClosed = false
      //   this.menu = "nav-bar nav-back-ground"
      // },
      // closeMenu() {
      //   this.displays = 'none'
      //   this.isClosed = true
      //   this.menu = "nav-bar invert-color"
      // }
    }
  }
</script>
<style>
  nav,
  svg {
    margin: 0;
    padding: 0;
  }
  .nav-bar {
    position: fixed;
    z-index: 100;
    /* top: 0.3rem; */
    right: 0;

    /* margin: 0 auto;
    position: fixed;
    z-index: 100;
    right: 0; */
  }

  .nav-button {
    position: relative;
    left: 0;
    --button: var(--primary-color, #000000);

    border: 1px solid var(--button);
  }

  .nav-button .line {
    transition: y 200ms ease-in 200ms, rotate 200ms ease-in, opacity 0ms 200ms;
    transform-origin: center;
  }

  .nav-button[aria-expanded='true'] .line {
    transition: y 200ms ease-in, rotate 200ms ease-in 200ms, opacity 0ms 200ms;
  }

  .nav-button[aria-expanded='true'] :is(.top, .bottom) {
    y: 50;
  }

  .nav-button[aria-expanded='true'] .top {
    rotate: 45deg;
  }

  .nav-button[aria-expanded='true'] .middle {
    opacity: 0;
  }

  .nav-button[aria-expanded='true'] .bottom {
    rotate: -45deg;
  }

  .nav-back-ground {
    /* width: 100%;
    background-color: var(--primary-bg); */
  }

  .invert-color {
    filter: invert(1);
    mix-blend-mode: difference;
  }

  .logo {
    /* display: none;
    padding: 0 0.3rem;
    padding-top: 0.3rem;
    box-sizing: border-box;
    height: 30px;
    margin: 0; */
  }

  .button-container {
    /* color: #000000;
    filter: invert(1);
    mix-blend-mode: difference; */
    /* display: flex;
    justify-content: space-between; */
  }

  .close-menu-btn {
    /* display: flex;
    justify-content: space-between; */
    /* border-left: var(--border); */

    /* cursor: pointer;
    border: 1px solid;
    padding: 0.6rem 0.8rem; */
  }

  .links-container {
    /* grid-template-columns: 1fr;
    min-height: 100svh; */
  }

  .link-item {
    /* position: relative;
    top: 0px;
    animation-name: open;
    animation-duration: 0.1s;
    border-top: var(--border);
    text-align: center;
    background-color: var(--primary-bg); */
  }

  /* @keyframes open {
    from {
      background-color: var(--primary-bg);
      top: -300px;
    }

    to {
      background-color: #ffffff;
      top: 0;
    }
  } */

  .link {
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 900;
    text-decoration: none;
    color: var(--primary-color); */
  }

  @media (min-width: 769px) {
    /* .mobile-btn-container{
      display: none;
    } */

    /* .links-container {
      display: grid;
    } */
  }
</style>
