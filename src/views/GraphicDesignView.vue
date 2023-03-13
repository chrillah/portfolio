<template>
  <GraphicDesignDetail
    :title="title"
    :year="year"
    :tools="tools"
    :description="description"
    :projects="projects"
  />
</template>
<script>
  import GraphicDesignDetail from '../components/GraphicDesignDetail.vue'
  export default {
    data() {
      return {
        title: 'Graphic design',
        year: '2014 - 2016',
        tools: [
          { id: 1, tool: 'Graphic design & typography' },
          { id: 2, tool: 'Packaging design & construction' },
          { id: 3, tool: 'CAD technique' },
          { id: 4, tool: 'Marketing & consumer behavior' }
        ],
        description:
          'I have always had a passion for design and visual arts, which is why I chose to study graphic design with a focus on packaging. Packaging has always fascinated me, and I have even collected them since I was young. There is something about how packaging can influence our perception of a product and make us want to buy it. My fascination with illustration, color, and form began with my love for science fiction. I was always fascinated by the visual elements in the science fiction world and how they can convey emotions and thoughts in a unique way. I love exploring different color palettes and creating images that spark the imagination.',
        projects: [
          {
            id: 1,
            title: 'Castillo De Gredo',
            description:
              'Was tasked with redesigning a "boring" package to make it more appealing and modern-looking. My idea for the graphic style was British, dry humor with surrealism.',
            image:
              'https://indd.adobe.com/view/publication/555f1a62-aeaf-42fc-996e-c5540fd9d7c9/nb1y/publication-web-resources/image/CDG_1.png'
          },
          {
            id: 2,
            title: 'O`boy',
            description:
              'This project came about by taking a well-known and popular product and creating an extension by finding a new market. The packaging should resemble milk bottles with corresponding covers with handles.',
            image:
              'https://indd.adobe.com/view/publication/555f1a62-aeaf-42fc-996e-c5540fd9d7c9/nb1y/publication-web-resources/image/OBOY_1.png'
          }
        ]
      }
    },
    components: {
      GraphicDesignDetail
    }
  }
</script>
