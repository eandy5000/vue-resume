<template>
  <div class="hello">
    <h1>Main Content Area</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste placeat eum cumque. Repellat dolore sunt dignissimos quidem similique amet quo facilis blanditiis repellendus soluta dicta, quas, maxime eos delectus magnam.</p>
    <div v-for="item in edu">
      <media-edu :image="item.img" :title="item.name"></media-edu>
    </div>
  </div>
</template>

<script>
import data from '../model/data.js'
import MediaEdu from './MediaEdu.vue'

export default {
  data () {
    return {
      data: data()
    }
  },
  computed: {
    edu () {
      return this.data.filter(listItem => (listItem.type !== 'Technology'))
    }
  },
  created () {
    return
  },
  components: {
    MediaEdu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
