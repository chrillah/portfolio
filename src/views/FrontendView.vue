<template>
  <EducationDetail
    :title="title"
    :year="year"
    :there-is-extra="thereIsExtra"
    :extra-information="extraInformation"
    :tools="tools"
    :description="description"
    :projects="projects"
  />
</template>
<script>
  import EducationDetail from '../components/EducationDetail.vue'
  export default {
    components: {
      EducationDetail
    },
    data() {
      return {
        title: 'Frontend Development',
        year: '2022 - 2024',
        thereIsExtra: true,
        extraInformation: {
          title: 'Internship period',
          firstPeriodTitle: '1st Period',
          firstWeek: 'week 34 - 41 21/8 [AUG] - 13/10 [OKT]',
          secondPeriodTitle: '2nd Period',
          secondWeek: 'week 4 - 19 22/1 [JAN] - 10/05 [MAY]'
        },
        tools: [
          { id: 1, tool: 'HTML & CSS' },
          { id: 2, tool: 'Vanilla JavaScript' },
          { id: 3, tool: 'UX & UI-design' },
          { id: 4, tool: 'JavaScript with frameworks' },
          { id: 5, tool: 'Agile development' },
          { id: 6, tool: 'Full-stack development' }
        ],
        description:
          'For me, it was natural to study frontend after completing my studies in UX and graphic design. My previous studies in UX and graphic design provided me with a solid understanding of user experience and visual design. When I started studying UX, I became curious about programming and how to create digital user interfaces. As frontend development is all about creating the visual interface of a website or application, it felt like a natural next step for me to take. Furthermore, my understanding of UX and graphic design gives me an advantage when it comes to creating user-friendly and aesthetically pleasing interfaces.',
        projects: [
          {
            id: 1,
            title: 'HTML/CSS',
            description:
              'Final project for HTML/CSS-course. My project is about a fictitious technology company that works with trends and fashion to spread propaganda. Visual brand identity, illustrations and code, all done by myself.',
            image:
              'https://indd.adobe.com/view/publication/555f1a62-aeaf-42fc-996e-c5540fd9d7c9/kl34/publication-web-resources/image/techware-pr2_vrshady_model_copy_6_kopia_2.png',
            link: 'http://studentiths.se/JSUFEU-STHLM/ChristopherR/'
          },
          {
            id: 2,
            title: 'JavaScript Vanilla',
            description:
              'The purpose of this project is to create a website that retrieves data from an API. For this project, I chose Rick and Morty´s API and created a website where you can collect playing cards from the famous TV series.',
            image:
              'https://indd.adobe.com/view/publication/555f1a62-aeaf-42fc-996e-c5540fd9d7c9/kl34/publication-web-resources/image/rickandmortyapi-25.png',
            link:
              'http://studentiths.se/JSUFEU-STHLM/ChristopherRntjs/index.html'
          }
        ]
      }
    }
  }
</script>
