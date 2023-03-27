<template>
  <div class="education-wrapper">
    <div class="education-intro-section">
      <h1 class="intro-title">Education</h1>
      <div class="intro-presentation">
        <p>Frontend development</p>
        <p>UX</p>
        <p>Graphic design</p>
      </div>
    </div>
    <div class="education-container">
      <RouterLink
        :to="education.view"
        v-for="education in listOfEducation"
        :key="education.id"
        :style="{ backgroundImage: `url(${education.images[currentImage]})` }"
        class="education-item action-btn"
      >
        <div class="education-detail-container">
          <!-- <ul class="tools-container">
            <li class="tool-item" v-for="tool in education.tools" :key="tool.id">
              {{ tool.tool }}
            </li>
          </ul> -->
          <div class="education-text-info">
            <h1 class="education-title-header">{{ education.title }}</h1>
            <h5 class="school-header">{{ education.school }}</h5>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
<style>
  .education-wrapper {
    padding: 5rem 0;
    /* width: 100%; */
    /* min-height: 50rem; */
    background-color: var(--third-bg);
  }

  .education-intro-section {
    margin: 0.6rem;
    padding: 0.3rem;
  }

  .section-header {
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-size: 3.5rem;
    color: var(--primary-bg);
  }

  .intro-presentation {
    display: flex;
    justify-content: space-between;
    max-width: 400px;
  }

  .intro-presentation p {
    font-family: 'Raleway', sans-serif;
    margin: 0;
    color: var(--primary-bg);
    font-size: 0.8rem;
  }

  @media (min-width: 375px) {
    .intro-presentation p {
      font-size: 1rem;
    }
  }

  .education-container {
    margin: 5rem auto;
    max-width: 470px;
    padding: 0.6rem;
    display: grid;
    gap: 3rem;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    .education-container {
      padding: 0;
      gap: 0;
      max-width: 1480px;
      margin: 0rem auto;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr;
    }
  }

  .education-item {
    margin: 0.3rem;
    padding: 0.1rem;
    min-height: 300px;
    /* max-width: 400px; */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* position: relative; */
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }

  @media (min-width: 425px) {
    .education-item {
      padding: 0.5rem;
      min-height: 400px;
      margin: 2rem;
    }
  }

  @media (min-width: 1440px) {
    .education-item {
      min-height: 450px;
    }
  }

  .education-detail-container {
    height: 100%;
    width: 100%;
    filter: invert(1);
    mix-blend-mode: difference;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    justify-content: flex-end;
  }

  .tools-container{
    /* display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; */
  }

  .tool-item{
    font-size: .8rem;
    text-align: left;
  }

  .education-text-info{
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  .education-title-header {
    margin: 0;
    font-family: 'Raleway', sans-serif;
    text-align: left;
    font-size: 1.9rem;
  }

  .school-header {
    margin: 0;
    font-family: 'Raleway', sans-serif;
    text-align: right;
    font-size: 0.8rem;
    font-style: italic;
  }
</style>
<script>
  export default {
    computed: {
      currentImage() {
        return this.numbers[this.currentNumberIndex]
      }
    },
    mounted() {
      setInterval(() => {
        this.currentNumberIndex =
          (this.currentNumberIndex + 1) % this.numbers.length
      }, 2000)
    },
    data() {
      return {
        numbers: [0, 1, 2],
        currentNumberIndex: 0,
        listOfEducation: [
          {
            id: 1,
            title: 'Frontend Developer',
            view: '/frontend',
            school: 'IT-Högskolan',
            tools: [
              { id: 1, tool: 'HTML & CSS' },
              { id: 2, tool: 'Vanilla JavaScript' },
              { id: 3, tool: 'UX & UI-design' },
              { id: 4, tool: 'JavaScript with frameworks' },
              { id: 5, tool: 'Agile development' },
              { id: 6, tool: 'Full-stack development' }
            ],
            images: [
              'https://indd.adobe.com/view/publication/555f1a62-aeaf-42fc-996e-c5540fd9d7c9/nb1y/publication-web-resources/image/frontend-34.png',
              'https://indd.adobe.com/view/publication/555f1a62-aeaf-42fc-996e-c5540fd9d7c9/nb1y/publication-web-resources/image/techware-pr2_vrshady_model_copy_6_kopia_2.png',
              'https://indd.adobe.com/view/publication/555f1a62-aeaf-42fc-996e-c5540fd9d7c9/nb1y/publication-web-resources/image/rickandmortyapi-25.png'
            ]
          },
          {
            id: 2,
            title: 'UX',
            view: '/ux',
            school: 'Berghs School of Communication',
            tools: [
              { id: 1, tool: 'Wireframes & Fast iterations' },
              { id: 2, tool: 'Interaction design' },
              { id: 3, tool: 'Clickable prototypes' },
              { id: 4, tool: 'User testing' },
              { id: 5, tool: 'Responsive design' }
            ],
            images: [
              'https://indd.adobe.com/view/publication/555f1a62-aeaf-42fc-996e-c5540fd9d7c9/nb1y/publication-web-resources/image/ux_presentation-01.png',
              'https://indd.adobe.com/view/publication/555f1a62-aeaf-42fc-996e-c5540fd9d7c9/nb1y/publication-web-resources/image/spolierappen-01.png',
              'https://indd.adobe.com/view/publication/555f1a62-aeaf-42fc-996e-c5540fd9d7c9/nb1y/publication-web-resources/image/web-portfolio.png'
            ]
          },
          {
            id: 3,
            title: 'Graphic design',
            view: '/graphic-design',
            school: 'Nackademin',
            tools: [
              { id: 1, tool: 'Graphic design & typography' },
              { id: 2, tool: 'Packaging design & construction' },
              { id: 3, tool: 'CAD technique' },
              { id: 4, tool: 'Marketing & consumer behavior' }
            ],
            images: [
              'https://indd.adobe.com/view/publication/555f1a62-aeaf-42fc-996e-c5540fd9d7c9/nb1y/publication-web-resources/image/graphic-presentation-01.png',
              'https://indd.adobe.com/view/publication/555f1a62-aeaf-42fc-996e-c5540fd9d7c9/nb1y/publication-web-resources/image/CDG_1.png',
              'https://indd.adobe.com/view/publication/555f1a62-aeaf-42fc-996e-c5540fd9d7c9/nb1y/publication-web-resources/image/OBOY_1.png'
            ]
          }
        ]
      }
    }
  }
</script>
