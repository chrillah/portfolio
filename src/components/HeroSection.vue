<template>
  <div class="hero-wrapper">
    <!-- <h1 class="hero-header">web</h1> -->
    <div class="hero-grid-container">
      <div class="grid-letter">
        <div class="p-box-1" />
        <div class="p-box-2" />
      </div>
      <div class="grid-letter">
        <div class="o-box" />
      </div>
      <div class="grid-letter">
        <div class="r-box-1" />
        <div class="r-box-2" />
        <div class="r-box-3" />
      </div>
      <div class="grid-letter">
        <div class="t-box-1" />
        <div class="t-box-2" />
      </div>
      <div class="grid-letter">
        <div class="f-box-1" />
        <div class="f-box-2" />
      </div>
      <div class="grid-letter">
        <div class="o-box" />
      </div>
      <div class="grid-letter">
        <div class="l-box" />
      </div>
      <div class="grid-letter">
        <div class="i-box-1" />
        <div class="i-box-2" />
      </div>
      <div class="grid-letter">
        <div class="o-box" />
      </div>
    </div>
    <!-- <h1 class="intro-header">portfolio</h1> -->
  </div>
</template>

<script></script>
<style>
  .hero-wrapper {
    /* position: relative; */
    background-color: var(--primary-color);
    /* display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; */
    /* margin-top: 1rem; */
  }

  .hero-header{
    padding: 0;
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-weight: 900;
    font-size: 40vw;
    text-align: center;
  }
  .hero-grid-container {
    margin: 0 auto;
    max-width: 700px;
    border: 12px solid var(--primary-color);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }


  @media (min-width:768px) {
    .hero-grid-container{
      padding: 8rem 0;
      grid-template-columns: repeat(9, 1fr);
    grid-template-rows: none;
    }
  }

  .intro-header{
    display: none;
    font-size: 4rem;
    position: absolute;
    top: 10rem;
    left: 3rem;
    color: var(--secondary-color);
    font-family: 'Playfair Display', serif;
    font-style: italic;
  }

  @media (min-width:375px) {
    .intro-header{
      font-size: 5rem;
    }
  }

  @media (min-width:768px) {
    .intro-header{
      top: 20rem;
      left: 10rem;
    }
  }

  .grid-letter {
    background-color: var(--primary-bg);
    box-sizing: border-box;
    min-height: 100px;
    position: relative;
    /* border: 10px solid var(--primary-color); */
    animation: changing-border-width 8s infinite;
  }

  @keyframes changing-border-width{
    0%{    border: 0px solid var(--primary-bg);}
    25%{    border: 1px solid var(--primary-color);}
    50%{    border: 12px solid var(--primary-color);}
    75%{    border: 1px solid var(--primary-color);}
    100%{    border: 0px solid var(--primary-bg);}
  }

  .p-box-1 {
    background-color: var(--primary-color);
    width: 20px;
    height: 20px;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: makes-a-circle 5s infinite;
  }

  .p-box-2 {
    background-color: var(--primary-color);
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .o-box {
    background-color: var(--primary-color);
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: makes-a-circle 4s infinite;
  }

  @keyframes makes-a-circle{
    0%{
      border-radius: 0;
    }
    25%{
      border-radius: 0px;
    }
    50%{
      border-radius: 100px;
    }
    75%{
      border-radius: 0px;
    }
    100%{
      border-radius: 0;
    }
  }

  .r-box-1 {
    background-color: var(--primary-color);
    width: 20px;
    height: 20px;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: makes-a-circle 5s infinite;
  }

  .r-box-2 {
    background-color: var(--primary-color);
    width: 20px;
    height: 20px;
    position: absolute;
    top: 60%;
    right: 0;
  }

  .r-box-3 {
    background-color: var(--primary-color);
    width: 20px;
    height: 20px;
    position: absolute;
    bottom: 0;
    left: 40%;
  }

  .t-box-1 {
    background-color: var(--primary-color);
    width: 20px;
    height: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .t-box-2 {
    background-color: var(--primary-color);
    width: 20px;
    height: 20px;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .f-box-1 {
    background-color: var(--primary-color);
    width: 20px;
    height: 20px;
    position: absolute;
    top: 20%;
    right: 0;
  }

  .f-box-2 {
    background-color: var(--primary-color);
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .l-box {
    background-color: var(--primary-color);
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    right: 0;
  }

  .i-box-1 {
    background-color: var(--primary-color);
    width: 20px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
  }

  .i-box-2 {
    background-color: var(--primary-color);
    width: 20px;
    height: 100px;
    position: absolute;
    top: 0;
    right: 0;
  }
</style>
