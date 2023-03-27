<template>
  <div class="about-wrapper">
    <div class="about-container">
      <div class="top-container">
        <div class="intro-container">
          <h1 class="intro-title">About me</h1>
        </div>
        <div class="middle-container">
          <div class="symbols-container">
            <div class="outer-circle">
              <div class="inner-circle" />
            </div>
          </div>
          <div class="presentation-items">
            <p class="presentation-text">
              By combining my knowledge of UX, graphic design, and frontend
              development, I can create innovative and user-friendly digital
              products that not only look great but also function well for
              users.
            </p>
            <p class="presentation-text">
              I am described as reliable, resourceful, and easy-going, where my
              natural calmness rubs off and creates a focused working
              environment.
            </p>
            <p class="presentation-text">
              Stepping out of my comfort zone and jumping into the unknown
              drives me.
            </p>
          </div>
        </div>
      </div>
      <div class="bottom-container">
        <div class="symbols-container">
          <div class="gradient-container"></div>
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
    background-color: var(--third-bg);
    --bg-color: var(--primary-bg);
  }
  .about-container {
  }

  .top-container {
    border: 1px solid var(--primary-color);
    border-top: none;
    display: grid;
    grid-template-rows: auto 2fr;
  }

  .intro-container {
    background-color: var(--bg-color);
    border-right: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 768px) {
    .top-container {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: none;
    }
    .intro-container {
    border-right: 1px solid var(--primary-color);
  }
  }

  /* .intro-title {
    font-family: 'Raleway', sans-serif;
    font-size: 6rem;
    padding: 0;
    padding: 3rem;
    margin: 0;
  } */

  /* @media (min-width: 600px) {
    .hi-item{
      max-width: 300px;
    }
    .big-header{
      font-size: 12rem;
    }
  } */

  .middle-container {
    display: grid;
    grid-template-rows: 1fr 1fr;
    border-top: none;
  }
  @media (min-width: 768px) {
    .middle-container {
    grid-template-rows: 1fr 1fr;
  }
  }
  .presentation-items {
    background-color: var(--bg-color);
    border-top: 1px solid var(--primary-color);
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

  .symbols-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .outer-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-bg);
    width: 100%;
    height: 110px;
    border-radius: 100%;
    overflow: hidden;
    animation: blink 18s infinite;
  }

  @keyframes blink {
    0% {
      height: 110px;
    }
    5% {
      height: 0px;
    }
    15% {
      height: 110px;
    }
    20% {
      height: 0px;
    }
    25% {
      height: 130px;
    }
    50% {
      height: 0px;
    }
    100% {
      height: 110px;
    }
  }

  .inner-circle {
    background-color: var(--primary-color);
    border-radius: 100%;
    width: 100px;
    height: 100px;
  }
  .name-container {
    background-color: var(--bg-color);
    padding: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
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
  .bottom-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid var(--primary-color);
    border-top: none;
  }

  @media(min-width: 768px){
    .bottom-container {
    grid-template-columns: 2fr 1fr;
  }
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
