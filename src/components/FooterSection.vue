<template>
  <div class="footer-wrapper">
    <div class="footer-container">
      <div class="footer-links-container">
        <h6 class="footer-header">Relevant links</h6>
        <div class="link-logos-container">
          <a target="_blank" href="http://studentiths.se/JSUFEU-STHLM/ChristopherRntjs/index.html" class="logo-link-item">
            <img
              src="/assets/img/portfolio_rickandmortyapi-logo.png"
              alt="Rick and Morty API-logotype"
            />
          </a>
          <a target="_blank" href="http://studentiths.se/JSUFEU-STHLM/ChristopherR/" class="logo-link-item">
            <img
              src="/assets/img/portfolio_techware-logo.png"
              alt="Techware-logotype"
          /></a>
          <a target="_blank" href="https://www.instagram.com/become_overcast/" class="logo-link-item">
            <img
              src="/assets/img/portfolio_instagram-logo.png"
              alt="Instagram-logotype"
          /></a>
          <a target="_blank" href="https://github.com/chrillah" class="logo-link-item">
            <img
              src="/assets/img/portfolio_github-logo.png"
              alt="Github-logotype"
          /></a>
          <a target="_blank" href="https://www.linkedin.com/in/christopher-r%C3%B6nnberg/" class="logo-link-item">
            <img
              src="/assets/img/portfolio_linkedin-logo.png"
              alt="Linkedin-logotype"
          /></a>
        </div>
      </div>
      <div class="contact-container">
        <h6 class="footer-header">Contact</h6>
        <div class="contact-items-container">
          <div class="contact-item">
            <a href="tel:+46 736 70 32 19" class="contact-logo-container">
              <img
                src="/assets/img/portfolio_phone-logo.png"
                alt="A phone-logotype"
              />
            </a>
            <div class="info-item">
              <a href="tel:+46 736 70 32 19">+46 736 70 32 19</a>
            </div>
          </div>
          <div class="contact-item">
            <a href="mailto:christopher.ronnberg@hotmail.com" class="contact-logo-container">
              <img
                src="/assets/img/portfolio_email-logo.png"
                alt="An email-logotype"
              />
            </a>
            <div class="info-item">
              <a href="mailto:christopher.ronnberg@hotmail.com">christopher.ronnberg@hotmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.footer-wrapper{
  border-top: 1px solid var(--primary-bg);
  background-color: var(--primary-color);
}

.footer-container{
  margin: 0 .5rem;
  /* padding-top: 2rem; */
  display: grid;
}

@media (min-width: 600px) {
  .footer-container{
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
  }

  .footer-links-container{
    border-right: 1px solid var(--primary-bg);
  }
}

.footer-header{
  padding-top: 2rem;
  font-family: 'Raleway', sans-serif;
  margin: 0.6rem;
  color: var(--primary-bg);
}

.link-logos-container{
  /* margin: 0 auto; */
  /* max-width: 240px; */
  margin: 2rem;
  gap: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.logo-link-item{
  max-width: 50px;
}

.contact-items-container{
  margin: 2rem;
  display: grid;
  grid-template-rows: 1fr 1fr;
  /* grid-template-columns: 1fr 1fr; */
}

@media (min-width: 1200px){
    .contact-items-container{
    grid-template-columns: 1fr 1fr;
  }
}

.contact-item{
  display: grid;
  grid-template-columns: 60px auto;
}

.contact-logo-container{
  max-width: 50px;
}

.info-item{
  position: relative;
}
.info-item a{
  position: absolute;
  top: 30%;
  color: var(--primary-bg);
  font-size: .7rem;
}

</style>
