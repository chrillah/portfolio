<template>
  <div class="about-wrapper">
    <div class="about-container">
      <div class="top-container">
        <div class="hi-item">
          <h1 class="big-header">HI!</h1>
        </div>
        <div class="gradient-conainer" />
        <!-- <div class="name-container">
      <h3 class="name-header">My name is <span>Christopher</span></h3>
    </div> -->
      </div>

      <div class="bottom-container">
        <div class="presentation-items">
          <p class="presentation-text">
            By combining my knowledge of UX, graphic design, and frontend
            development, I can create innovative and user-friendly digital
            products that not only look great but also function well for users.
          </p>
          <p class="presentation-text">
            I am described as reliable, resourceful, and easy-going, where my
            natural calmness rubs off and creates a focused working environment.
          </p>
          <p class="presentation-text">
            Stepping out of my comfort zone and jumping into the unknown drives
            me.
          </p>
        </div>
        <div class="skills-container">
          <div class="skills-items">
            <p class="skills-header">Some of my skills</p>
            <ul class="skills">
              <li>Adobe CC</li>
              <li>Figma</li>
              <li>Prototype production</li>
              <li>Web development</li>
              <li>Graphic design</li>
              <li>UX</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .about-wrapper {
    /* padding-top: 2rem; */
    background-color: var(--secondary-color);
    --bg-color: var(--primary-bg);
    /* border-bottom: 1px solid var(--primary-color); */
  }
  .about-container {
    /* display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; */
  }

  .top-container {
    border: 1px solid var(--primary-color);
    border-top: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* width: 100%; */
    /* position: relative; */
  }

  .hi-item {
    background-color: var(--bg-color);
    /* max-width: 200px;
    padding: 0.3rem; */
    /* border: 1px solid var(--primary-color); */
    border-right: 1px solid var(--primary-color);
  }
  .big-header {
    text-align: center;
    font-family: 'Raleway', sans-serif;
    font-size: 9rem;
    padding: 0;
    margin: 0;
  }

  /* @media (min-width: 600px) {
    .hi-item{
      max-width: 300px;
    }
    .big-header{
      font-size: 12rem;
    }
  } */

  .name-container {
    /* position: relative;
    bottom: 2rem;
    left: 2rem; */
    /* max-height: 120px; */
    background-color: var(--bg-color);
    /* max-width: 200px; */
    padding: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 1px solid var(--primary-color); */
  }
  .name-header {
    text-align: center;
    padding: 0;
    margin: 0;
    font-size: 1.8rem;
    font-family: 'Raleway', sans-serif;
  }
  .name-header span {
    font-family: 'Playfair Display', serif;
    font-style: italic;
  }

  /* @media (min-width: 600px) {
    .name-container{
      left: 8rem;
      max-width: 300px;
    }
    .name-header {
      font-size: 3rem;
    }
  } */
  .bottom-container{
    display: grid;
    grid-template-columns: 2fr 1fr;
    border: 1px solid var(--primary-color);
    border-top: none;
  }
  .presentation-items {
    background-color: var(--bg-color);
    border-right: 1px solid var(--primary-color);
    padding: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .presentation-text {
    max-width: 500px;
    line-height: 1rem;
    font-family: 'Raleway', sans-serif;
    margin: 0.3rem;
    font-size: 0.9rem;
    padding-bottom: 1rem;
  }
  .skills-container {
    background-color: var(--bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0.3rem;
    font-family: 'Raleway', sans-serif;
    /* border: 1px solid var(--primary-color); */
  }
  .skills-header {
    margin: 0.3rem;
    font-weight: 900;
  }

  .skills {
    padding: 0.3rem 0;
  }
  .skills li {
    font-size: 0.8rem;
    font-weight: 700;
    margin: 0.3rem;
    padding: 0.3rem 0;
  }
</style>
