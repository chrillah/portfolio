<template>
  <nav class="nav-bar">
    <button class="logo-container">LOGO</button>
    <ul class="links-container">
      <li class="link-item"><RouterLink class="link" to="/">Hem</RouterLink></li>
      <li class="link-item"><RouterLink class="link" to="/about">Om</RouterLink></li>
      <li class="link-item"><RouterLink class="link" to="/work">Jobb</RouterLink></li>
    </ul>
  </nav>
  <RouterView />
</template>
<style>
.links-container{
  display: grid;
  grid-template-columns: 1fr;
}
.link-item{
  text-align: center;
  padding: 3rem;
  border: var(--border);
  color: var(--primary-color);
}
.link{
  text-decoration: none;
}
</style>
