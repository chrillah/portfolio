<template>
  <div class="education-wrapper">
    <div class="education-intro-section">
      <h1 class="section-header">Education</h1>
      <div class="intro-presentation">
        <p>Frontend development</p>
        <p>UX</p>
        <p>Graphic design</p>
      </div>
    </div>
    <div class="education-container">
      <RouterLink :to="education.view" @click="toEducation(education.id)" v-for="education in listOfEducation" :key="education.id" :style="{backgroundImage: `url(${education.image})`}" class="education-item action-btn">
        <h1 class="education-title-header">{{ education.title }}</h1>
        <h5 class="school-header">{{ education.school }}</h5>
      </RouterLink>
    </div>
  </div>
</template>
<style>
.education-wrapper{
  padding: 5rem 0;
  /* width: 100%; */
  /* min-height: 50rem; */
  background-color: var(--third-bg);
}

.education-intro-section{
  margin: 0.6rem;
  padding: 0.3rem;
}

.section-header{
  margin: 0;
  font-family: 'Raleway', sans-serif;
  font-size: 3.5rem;
  color: var(--primary-bg)
}

.intro-presentation{
  display: flex;
  justify-content: space-between;
  max-width: 400px;
}

.intro-presentation p{
  font-family: 'Raleway', sans-serif;
  margin: 0;
  color: var(--primary-bg);
  font-size: .8rem;
}

@media(min-width: 375px){
  .intro-presentation p{
    font-size: 1rem;
  }
}

.education-container{
  margin: 5rem auto;
  max-width: 470px;
  padding: 0.6rem;
  display: grid;
  gap: 5rem;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
}

@media (min-width: 1440px) {
  .education-container{
    padding: 0;
    gap: 0;
    max-width: 1480px;
    margin: 0rem auto;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }
}

.education-item{
  margin: 0.3rem;
  padding: .1rem;
  min-height: 300px;
  /* max-width: 400px; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;



  display: flex;
  justify-content: space-between;
  align-items: end;
}

@media (min-width: 425px){
  .education-item{
    padding: .5rem;
    min-height: 400px;
    margin: 2rem;
  }
}

@media (min-width: 1440px){
  .education-item{
    min-height: 450px;
  }
}

.education-title-header{
  margin: 0;
  font-family: 'Raleway', sans-serif;
  text-align: left;
  font-size: 1.9rem;
}

.school-header{
  margin: 0;
  font-family: 'Raleway', sans-serif;
  text-align: right;
  font-size: .8rem;
  font-style: italic;
}
</style>
<script>

  export default {
    methods:{
      toEducation(education){
        console.log(education)

      }
    },
    data() {
      return {
        listOfEducation: [
          {
            id: 1,
            title: 'Frontend Developer',
            view : '/frontend',
            school: 'IT-Högskolan',
            tools : ["HTML & CSS", "Vanilla JavaScript","UX & UI-design","JavaScript with frameworks","Agile development","Full-stack development"],
            image:
              'https://indd.adobe.com/view/publication/555f1a62-aeaf-42fc-996e-c5540fd9d7c9/kl34/publication-web-resources/image/frontend-34.png'
          },
          {
            id: 2,
            title: 'UX',
            view : '/ux',
            school: 'Berghs School of Communication',
            tools : ["Wireframes & Fast iterations","Interaction design","Clickable prototypes","User testing","Responsive design"],
            image:
              'https://indd.adobe.com/view/publication/555f1a62-aeaf-42fc-996e-c5540fd9d7c9/kl34/publication-web-resources/image/ux_presentation-01.png'
          },
          {
            id: 3,
            title: 'Graphic design',
            view : '/frontend',
            school: 'Nackademin',
            tools : ["Graphic design & typography","Packaging design & construction","CAD technique","Marketing & consumer behavior"],
            image:
              'https://indd.adobe.com/view/publication/555f1a62-aeaf-42fc-996e-c5540fd9d7c9/kl34/publication-web-resources/image/graphic-presentation-01.png'
          }
        ],
        educations: [
          {
            id: 1,
            title: 'Frontend Development',
            year: '2022 - 2024',
            tools : ["HTML & CSS", "Vanilla JavaScript","UX & UI-design","JavaScript with frameworks","Agile development","Full-stack development"],
            description: 'For me, it was natural to study frontend after completing my studies in UX and graphic design. My previous studies in UX and graphic design provided me with a solid understanding of user experience and visual design. When I started studying UX, I became curious about programming and how to create digital user interfaces. As frontend development is all about creating the visual interface of a website or application, it felt like a natural next step for me to take. Furthermore, my understanding of UX and graphic design gives me an advantage when it comes to creating user-friendly and aesthetically pleasing interfaces.',
            projects : [
              {
                id : 1,
                title : 'HTML/CSS',
                description : 'Final project for HTML/CSS-course. My project is about a fictitious technology company that works with trends and fashion to spread propaganda. Visual brand identity, illustrations and code, all done by myself.',
                image : 'https://indd.adobe.com/view/publication/555f1a62-aeaf-42fc-996e-c5540fd9d7c9/kl34/publication-web-resources/image/techware-pr2_vrshady_model_copy_6_kopia_2.png',
                link : 'http://studentiths.se/JSUFEU-STHLM/ChristopherR/'
              },
              {
                id : 2,
                title : 'JavaScript Vanilla & Fetch API',
                description : 'The purpose of this project is to create a website that retrieves data from an API. For this project, I chose Rick and Morty´s API and created a website where you can collect playing cards from the famous TV series.',
                image : 'https://indd.adobe.com/view/publication/555f1a62-aeaf-42fc-996e-c5540fd9d7c9/kl34/publication-web-resources/image/rickandmortyapi-25.png',
                link : 'http://studentiths.se/JSUFEU-STHLM/ChristopherRntjs/index.html'
              },
            ]
          },
          {
            id: 2,
            title: 'UX',
            year: '2018',
            tools : ["Wireframes & Fast iterations","Interaction design","Clickable prototypes","User testing","Responsive design"],
            description: 'To study UX design is a perfect choice for me because I am very interested in communication, behavior, and clarity. As a UX designer, my main task is to create products, apps, and websites that are easy to use and understand for users. By learning about user research, interaction design, and usability testing, I can create user experiences that are tailored to my target audience and their needs. I want to create simplicity and intuitiveness in my design and make it easy for users to achieve their goals.',
            projects : [
              {
                id : 1,
                title : 'Spoilerappen',
                description : 'This is the final project for the UX Design course. Here, I created UX for a fictional app called Spoilerappen, where the idea is to read trivia about movies and TV series, learn about easter eggs, or spoil them. A gathering place for pop culture movie and TV series enthusiasts.',
                images : [
                  "https://indd.adobe.com/view/publication/555f1a62-aeaf-42fc-996e-c5540fd9d7c9/kl34/publication-web-resources/image/spolierappen-01.png",
                  "https://indd.adobe.com/view/publication/555f1a62-aeaf-42fc-996e-c5540fd9d7c9/kl34/publication-web-resources/image/spolierappen-02-01-01.png"
                ]
              },
            ]
          },
          {
            id: 3,
            title: 'Graphic design',
            year: '2014 - 2016',
            tools : ["Graphic design & typography","Packaging design & construction","CAD technique","Marketing & consumer behavior"],
            description: 'I have always had a passion for design and visual arts, which is why I chose to study graphic design with a focus on packaging. Packaging has always fascinated me, and I have even collected them since I was young. There is something about how packaging can influence our perception of a product and make us want to buy it. My fascination with illustration, color, and form began with my love for science fiction. I was always fascinated by the visual elements in the science fiction world and how they can convey emotions and thoughts in a unique way. I love exploring different color palettes and creating images that spark the imagination.',
            projects : [
              {
                id : 1,
                title : 'Castillo De Gredo',
                description : 'Was tasked with redesigning a "boring" package to make it more appealing and modern-looking. My idea for the graphic style was British, dry humor with surrealism.',
                image : 'https://indd.adobe.com/view/publication/555f1a62-aeaf-42fc-996e-c5540fd9d7c9/kl34/publication-web-resources/image/CDG_1.png'
              },
              {
                id : 2,
                title : 'O`boy',
                description : 'This project came about by taking a well-known and popular product and creating an extension by finding a new market. The packaging should resemble milk bottles with corresponding covers with handles.',
                image : 'https://indd.adobe.com/view/publication/555f1a62-aeaf-42fc-996e-c5540fd9d7c9/kl34/publication-web-resources/image/OBOY_1.png'
              },
            ]
          },
        ]
      }
    }
  }
</script>
