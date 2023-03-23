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
        width="30"
      >
        <rect class="line top" width="80" height="3" x="10" y="35" />
        <rect class="line bottom" width="80" height="3" x="10" y="65" />
      </svg>
    </button>
  </nav>
  <div :style="{ display: display }" class="menu-container">
    <ul class="links-container">
      <li class="link-item" @click="closeMenu">
        <RouterLink class="link-item-container" to="/frontend"
          ><div class="black-arrow"></div><p class="link-text">Frontend</p></RouterLink
        >
      </li>
      <li class="link-item" @click="closeMenu">
        <RouterLink class="link-item-container" to="/ux"
          ><div class="black-arrow"></div><p class="link-text">UX</p></RouterLink
        >
      </li>
      <li class="link-item" @click="closeMenu">
        <RouterLink class="link-item-container" to="/graphic-design"
          ><div class="black-arrow"></div><p class="link-text">Graphic Design</p></RouterLink
        >
      </li>
    </ul>
  </div>
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
        menu: 'nav-bar invert-color',
        display: 'none'
        // menu: "nav-bar invert-color",
        // isClosed: true,
        // displays: 'none'
      }
    },
    methods: {
      expand() {
        if (this.expanded === false && this.display === 'none') {
          this.expanded = true
          this.display = 'block'
        } else {
          this.expanded = false
          this.display = 'none'
        }
      },
      closeMenu() {
        this.expanded = false
        this.display = 'none'
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
<style scoped>
  nav,
  svg {
    margin: 0;
    padding: 0;
  }
  .nav-bar {
    position: fixed;
    z-index: 100;
    right: 0;
  }

  .nav-button {
    --button: var(--primary-color, #000000);

    border: 1px solid var(--button);
  }

  .nav-button .line {
    transition: y 100ms ease-in 100ms, rotate 100ms ease-in, opacity 0ms 100ms;
    transform-origin: center;
  }

  .nav-button[aria-expanded='true'] .line {
    transition: y 100ms ease-in, rotate 100ms ease-in 100ms, opacity 0ms 100ms;
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

  .invert-color {
    filter: invert(1);
    mix-blend-mode: difference;
  }
  .menu-container {
    width: 100%;
    background-color: var(--primary-bg);
    position: fixed;
    z-index: 99;
    min-height: 100svh;
    transition: width 200ms ease-in;
  }
  .links-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
.link-item-container{
  display: inline-block;
}
  .black-arrow{
      /* margin: .3rem; */
  padding: 1rem;
  display: block;
  background-image: url('/assets/img/portfolio_vertical-black-arrow.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  /* height: 46px;
  width: 50px; */
  width: 5px;
  }
  .link-item p {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    text-decoration: none;
    color: var(--primary-color);
    font-size: 2rem;
  }
</style>
