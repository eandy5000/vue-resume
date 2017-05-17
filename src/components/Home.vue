<template>
  <div class="hello">
    <h1>Main Content Area</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste placeat eum cumque. Repellat dolore sunt dignissimos quidem similique amet quo facilis blanditiis repellendus soluta dicta, quas, maxime eos delectus magnam.</p>
    <div v-for="item in edu">
    {{item.name}}
    <img :src="item.img" width="100" />
    </div>
  </div>
</template>

<script>
import data from '../model/data.js'

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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
