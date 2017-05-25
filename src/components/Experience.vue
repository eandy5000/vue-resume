<template>
  <div class="hello">
    <h1>Experience</h1>
    <div v-for="item in exp">
      <media-edu 
        :image="item.img" 
        :title="item.name" 
        :years="item.years"
        :description="item.description"
      >
      </media-edu>
    </div>
    <h1>Education</h1>
    <div v-for="item in edu">
      <media-edu
        :image="item.img" 
        :title="item.name" 
        :years="item.years"
        :description="item.description"
      >
      </media-edu>
    </div>
  </div>
</template>

<script>
import data from '../model/data.js'
import MediaEdu from './MediaEdu.vue'
import images from '../model/images'

export default {
  data () {
    return {
      data: data(),
      exp: [
        {
          'name': 'Wikistrat',
          'type': 'Experience',
          'img': images.wikistrat,
          'description': 'Some junk'
        },
        {
          'name': 'Stericycle',
          'type': 'Experience',
          'img': images.stericycle,
          'description': 'Some junk'
        },
        {
          'name': 'Questar Assessment Inc',
          'type': 'Experience',
          'img': images.questar,
          'description': 'Some junk'
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
