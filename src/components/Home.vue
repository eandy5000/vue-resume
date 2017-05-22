<template>
  <div class="hello">
    <h1>Main Content Area</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste placeat eum cumque. Repellat dolore sunt dignissimos quidem similique amet quo facilis blanditiis repellendus soluta dicta, quas, maxime eos delectus magnam.</p>
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

export default {
  data () {
    return {
      data: data()
    }
  },
  computed: {
    edu () {
      let out = this.data.filter(listItem => (listItem.type === 'Education'))
      out = out.sort((a, b) => (a.position - b.position))
      console.log(out)
      return out
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
