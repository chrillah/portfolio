<template>
  <UxDetail
    :title="title"
    :year="year"
    :there-is-extra="thereIsExtra"
    :extra-information="extraInformation"
    :tools="tools"
    :description="description"
    :projects="projects"
    :extra-image="extraImage"
  />
</template>
<script>
  import UxDetail from '../components/UxDetail.vue'
  export default {
    data() {
      return {
        title: 'UX',
        year: '2018',
        thereIsExtra: false,
        extraInformation: {},
        tools: [
          { id: 1, tool: 'Wireframes & Fast iterations' },
          { id: 2, tool: 'Interaction design' },
          { id: 3, tool: 'Clickable prototypes' },
          { id: 4, tool: 'User testing' },
          { id: 5, tool: 'Responsive design' }
        ],
        description:
          'To study UX design is a perfect choice for me because I am very interested in communication, behavior, and clarity. As a UX designer, my main task is to create products, apps, and websites that are easy to use and understand for users. By learning about user research, interaction design, and usability testing, I can create user experiences that are tailored to my target audience and their needs. I want to create simplicity and intuitiveness in my design and make it easy for users to achieve their goals.',
        projects: [
          {
            id: 1,
            title: 'Spoilerappen',
            description:
              'This is the final project for the UX Design course. Here, I created UX for a fictional app called Spoilerappen, where the idea is to read trivia about movies and TV series, learn about easter eggs, or spoil them. A gathering place for pop culture movie and TV series enthusiasts.',
            image:
              'https://indd.adobe.com/view/publication/555f1a62-aeaf-42fc-996e-c5540fd9d7c9/kl34/publication-web-resources/image/spolierappen-01.png'
          }
        ],
        extraImage:
          'https://indd.adobe.com/view/publication/555f1a62-aeaf-42fc-996e-c5540fd9d7c9/cypw/publication-web-resources/image/web-portfolio.png'
      }
    },
    components: {
      UxDetail
    }
  }
</script>
