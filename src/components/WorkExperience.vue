<template>
  <div class="work-wrapper">
    <div class="work-container">
      <h1 class="work-header intro-title">Work Experience</h1>
      <div class="experience-container">
        <div v-for="work in list" :key="work.id" class="experience-item">
          <h1 class="year-header">{{ work.year }}</h1>
          <div class="item-container">
            <p class="title-header">{{ work.title }}</p>
            <p class="description-text">{{ work.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .description-text,
  .year-header,
  .title-header,
  .work-header {
    padding: 0;
    margin: 0;
  }

  .work-wrapper {
    font-family: 'Raleway', sans-serif;
    color: var(--primary-bg);
    background-color: var(--primary-color);
    padding-bottom: 5rem;
  }

  .work-container {
    padding: 5rem 0;
  }
  .work-header {
    /* font-style: italic; */
    /* font-size: 3.5rem;
    line-height: 4rem; */
    padding: 0 0.3rem 5rem 0.3rem;
    margin: 0 0.6rem;
    /* word-break: break-all; */
  }

  @media (min-width: 375px) {
    .work-header{
      word-break: normal;
    }
  }
  .experience-container {
    padding: 8rem;
    gap: 4rem;
    display: grid;
    grid-auto-flow: column;
    overflow-x: scroll;
  }

  ::-webkit-scrollbar {
    background: transparent;
  }
  .experience-item {
    min-width: 560px;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 2rem;
  }

  .year-header {
    text-align: end;
    font-size: 2.3rem;
    font-style: italic;
  }

  .item-container {
  }
  .title-header {
    font-size: 1.3rem;
    font-weight: 700;
  }
  .description-text {
    font-weight: 100;
    font-style: italic;
  }
</style>
<script>
  export default {
    data() {
      return {
        list: [
          {
            id: 1,
            year: '2020 - 2022',
            title: 'Hässelby Villastad Skola',
            description: 'Teacher of Swedish, English & Mathematics'
          },
          {
            id: 2,
            year: '2017 - 2019',
            title: 'Vittraskolorna AB',
            description: 'Substitute teacher in art & crafts'
          },
          {
            id: 3,
            year: '2016 - 2017',
            title: 'ND Foto AB',
            description: 'Graphic design, photo assistant'
          },
          {
            id: 4,
            year: '2016',
            title: 'BASid',
            description: 'AD assistant, film, photo & graphic production'
          },
          {
            id: 5,
            year: '2015',
            title: 'Stockholms Filmfestival',
            description: 'Layout coordinator, graphic design'
          },
          {
            id: 6,
            year: '2004 - 2014',
            title: 'Postnord',
            description: 'Value manager, ISU, address management'
          }
        ]
      }
    }
  }
</script>
