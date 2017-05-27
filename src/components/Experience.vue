<template>
  <div class="wrapper">

    <section>
    <h2>Work</h2>
      <div v-for="item in sortExp" class="items">
        <media-edu 
          :image="item.img" 
          :title="item.name" 
          :years="item.years"
          :description="item.description"
          :tech="item.tech"
        >
        </media-edu>
      </div>
    </section>
    
    <section>
    <h2>Education</h2>
      <div v-for="item in sortEdu" class="items">
        <media-edu
          :image="item.img" 
          :title="item.name" 
          :years="item.years"
          :description="item.description"
        >
        </media-edu>
      </div>
    </section>

  </div>
</template>

<script>

import MediaEdu from './MediaEdu.vue'
import images from '../model/images'

export default {
  data () {
    return {
      exp: [
        {
          'name': 'Wikistrat',
          'type': 'Experience',
          'img': images.wikistrat,
          'years': '2011-2016',
          'position': 1,
          'description': 'Researched and wrote analysis on complex issues surrounding globalization and international relations.'
        },
        {
          'name': 'Stericycle',
          'type': 'Experience',
          'years': 'Blaine, MN 2013-2015',
          'img': images.stericycle,
          'position': 2,
          'description': 'Responsible for the safe packaging and transportation of Hazardous Waste, in multiple jurisdictions, in compliance with local and Federal regulations. '
        },
        {
          'name': 'Questar Assessment Inc',
          'type': 'Experience',
          'years': '2016-Present',
          'img': images.questar,
          'description': 'Assured function of education websites as part of the Forms and Items Team. Used JIRA ticketing to handle workflows and interactions between teams. Tasks included adjusting layouts, formatting content and troubleshooting of text-to-speech issues.',
          'tech': 'Primary technologies utilized: Git, HTML, CSS, XML. Also used the Tao and Saras CMS to create and edit tests and manage question items. ',
          'position': 0
        }
      ],
      edu: [
        {
          'name': 'AMU',
          'type': 'Education',
          'img': images.amu,
          'description': 'Masters Political Science',
          'years': '2008-2012',
          'position': 1
        },
        {
          'name': 'UWRF',
          'type': 'Education',
          'img': images.uwrf,
          'description': 'Bachelors Political Science',
          'years': '1998-2001',
          'position': 2
        },
        {
          'name': 'Prime Academy',
          'type': 'Education',
          'img': images.prime,
          'description': 'Full Stack Javascript Bootcamp',
          'years': '2015-2016',
          'position': 0
        }
      ]
    }
  },
  components: {
    MediaEdu
  },
  computed: {
    sortEdu () {
      return this.edu.sort((a, b) => a.position - b.position)
    },
    sortExp () {
      return this.exp.sort((a, b) => a.position - b.position)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
