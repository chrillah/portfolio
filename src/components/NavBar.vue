<template>
  <nav class="nav-bar">
    <div class="button-container">
      <RouterLink to="/" class="logo-container">
        <img class="logo" src="/assets/img/logo.svg" alt="" />
      </RouterLink>

      <div class="mobile-btn-container">
        <button v-if="isClosed" @click="closeMenu" class="close-menu-btn">
          --
        </button>
        <button v-if="!isClosed" @click="closeMenu" class="close-menu-btn">
          X
        </button>
      </div>
    </div>
    <ul v-if="!isClosed" class="links-container">
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
  <RouterView class="margins" />
</template>
<script>
  export default {
    data() {
      return {
        isClosed: true
      }
    },
    methods: {
      closeMenu() {
        this.isClosed = !this.isClosed
      }
    }
  }
</script>
<style>
  .nav-bar {
    top: .3rem;
    left: 50%;
    transform: translate(-50%);
    width: 100%;
    /* margin: 0.3rem; */
    margin:0 auto;
    position: fixed;
    z-index: 100;
    border: var(--border);
  }

  .logo{
    padding: 0 .3rem;
    padding-top: .3rem;
    box-sizing: border-box;
    height: 30px;
    margin: 0;
  }
  .button-container {
    display: flex;
    justify-content: space-between;
  }

  .close-menu-btn {
    cursor: pointer;
    border-left: var(--border);
    padding: 0.6rem 0.8rem;
  }

  .links-container {
    display: grid;
    grid-template-columns: 1fr;
    min-height: 100svh;
  }

  .link-item {
    border-top: var(--border);
    text-align: center;
    padding: 3rem;
    background-color: var(--primary-bg);
  }
  .link {
    font-weight: 900;
    text-decoration: none;
    color: var(--primary-color);
  }
</style>
