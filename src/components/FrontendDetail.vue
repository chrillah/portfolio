<template>
  <div class="detail-wrapper">
    <div class="detail-top-container">
      <div class="detail-top-item">
        <section class="header-section-item">
          <RouterLink id="top" to="/" >
      <svg
            class="black-arrow"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 46"
          >
            <polyline
              id="POINT"
              class="black-arrow-detail"
              points="23.82 .35 .71 23.46 23.82 46.57"
            />
            <line
              id="LINE"
              class="black-arrow-detail"
              x1=".71"
              y1="23.46"
              x2="50.71"
              y2="23.46"
            />
          </svg></RouterLink>
        <h1 class="header-section">{{ detailTitle }}</h1>
      </section>
      <div class="gradient-container" />
      </div>
      <div class="information-section-container">
        <div class="description-container">
          <p>{{ detailDescription }}</p>
        </div>
        <div class="side-information-container">
          <div class="extra-information">
            <div class="year-container">
              <h3>{{ detailYear }}</h3>
            </div>
            <div v-if="detailIsThereExtra" class="extra-information-period">
              <h5 class="extra-title">{{ detailExtra.title }}</h5>
              <p class="period-title">{{ detailExtra.firstPeriodTitle }}</p>
              <p>{{ detailExtra.firstWeek }}</p>
              <p class="period-title">{{ detailExtra.secondPeriodTitle }}</p>
              <p>{{ detailExtra.secondWeek }}</p>
            </div>
          </div>
          <div class="tools-container">
            <ul>
              <li v-for="tool in detailTools" :key="tool.id"> {{ tool.tool }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div v-for="project in detailProjects" :key="project.id" class="projects-item-container">
        <div class="project-detail">
          <h1>{{ project.title }}</h1>
          <p>{{ project.description }}</p>
          <img class="symbol-img" src="/assets/img/portfolio_white-arrow.png" alt="A white vector arrow">
        </div>
        <div class="project-img" :style="{ backgroundImage: `url(${project.image})` }">
            <a target="_blank" :href="project.link" class="action-btn btn-container">
              <svg
            class="black-arrow  other-side"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 46"
          >
            <polyline
              id="POINT"
              class="black-arrow-detail"
              points="23.82 .35 .71 23.46 23.82 46.57"
            />
            <line
              id="LINE"
              class="black-arrow-detail"
              x1=".71"
              y1="23.46"
              x2="50.71"
              y2="23.46"
            />
          </svg>
          <p>Link to project</p>
            </a>
          </div>
      </div>
    <!-- <div class="education-button-container">
      <RouterLink to="#top" class="action-btn to-the-top">To the top</RouterLink>
    </div> -->
  </div>
</template>
<style scoped>
.detail-wrapper{
  /* padding-top: 3rem; */
}
.detail-top-container{
}

.detail-top-item{
  border: 1px solid var(--primary-color);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
}
@media (min-width: 425px) {
  .detail-top-item{
  border: 1px solid var(--primary-color);
  border-bottom: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
}
.header-section-item{
  border-right: 1px solid var(--primary-color);
}
}
.header-section{
  font-family: 'Raleway', sans-serif;
  margin: 0;
  padding-top: 3rem;
  font-size: 3rem;
  word-break: break-all;
}

@media (min-width:768px){
  .header-section{
  font-size: 5rem;
}
}

.information-section-container{
  border: 1px solid var(--primary-color);
  display: grid;
  grid-template-columns: 2fr 1fr;
}

@media (min-width:1024px){
  .information-section-container{
  grid-template-columns: 2fr 2fr;
}
}

.description-container{
  font-family: 'Raleway', sans-serif;
  border-right: 1px solid var(--primary-color);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.description-container p{
  font-size: .8rem;
  max-width: 600px;
}

.side-information-container{
  display: grid;
  grid-template-rows: 1fr 1fr;

}

.extra-information{
  border-bottom: 1px solid var(--primary-color);
}

.year-container{
  border-bottom: 1px solid var(--primary-color);
}

@media (min-width:1024px){
.year-container h3{
  font-size: 2.5rem;
}
}


@media (min-width:768px){
  .side-information-container{
    grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
}
.extra-information{
  border-right: 1px solid var(--primary-color);
  border-bottom: none;
}
}

.year-container h3{
  text-align: center;
  font-family: 'Raleway', sans-serif;
  margin: 0;
}
.extra-information-period{
  padding: .3rem;

}
.extra-information-period p{
  margin: 0;
  font-family: 'Raleway', sans-serif;
}
.extra-title{
  font-family: 'Raleway', sans-serif;
  font-weight: 900;
  margin: 0;
}

.period-title{
  padding-top: .5rem;
  font-family: 'Raleway', sans-serif;
  font-weight: 900;
  font-size: .8rem;
}
.tools-container{
  /* border: 1px solid var(--primary-color); */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.tools-container ul li{
  font-family: 'Raleway', sans-serif;
  padding: .3rem;
  font-weight: 900;
  font-size: .8rem;
}


.projects-item-container{
  display: grid;
  grid-template-rows: 1fr 1fr;
  background-color: var(--primary-color);
}

@media (min-width:768px){
  .projects-item-container{
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
}
}

.symbol-img{
  padding-top: 2rem;
  max-width: 150px;
}
.symbol-img img{
  height: auto;
  max-width: 100%;
}


.project-detail{
  background-color: var(--primary-color);
  color: var(--primary-bg);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (min-width:768px){
  .project-detail{
    padding: 1rem;
    border-bottom: 1px solid var(--primary-bg);
  }
  .symbol-img{
    rotate: -90deg;
}
}
.project-detail h1,
.project-detail p{
  font-family: 'Raleway', sans-serif;
  max-width: 400px;
}

.project-detail h1{
  font-size: 1.5rem;
  margin: 0;
  padding-bottom: 2rem;
}

.project-img{
    min-height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  /* margin: 0;
  padding: 0;
  width: 100%; */
}

.other-side {
    rotate: 180deg;
  }

.education-button-container{
  padding: 5rem 0;
  display: grid;
  background-color: var(--primary-color);
}

.to-the-top{
  margin: 0 auto;
  min-width: 200px;
  padding: .5rem;
  background-color: var(--primary-bg);
}
</style>
<script>
export default{
  data(){
    return{
      detailTitle : this.title,
      detailYear : this.year,
      detailIsThereExtra : this.thereIsExtra,
      detailExtra : this.extraInformation,
      detailTools : this.tools,
      detailDescription : this.description,
      detailProjects : this.projects
    }
  },
  props:{
    title :{
      type : String,
      required : true
    },
    year :{
      type : String,
      required : true
    },
    thereIsExtra:{
      type : Boolean,
      required : true
    },
    extraInformation :{
      type : Object,
      required : true
    },
    tools : {
      type : Object,
      required : true
    },
    description : {
      type : String,
      required : true
    },
    projects : {
      type : Array,
      required : true
    }
  }
}
</script>
