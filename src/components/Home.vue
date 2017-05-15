<template>
  <div class="hello">
    <h1>Main Content Area</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste placeat eum cumque. Repellat dolore sunt dignissimos quidem similique amet quo facilis blanditiis repellendus soluta dicta, quas, maxime eos delectus magnam.</p>
    <div v-for="item in edu">
    {{item.name}}
    <img :src="item.img" />
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
      return this.data.filter(listItem => (listItem.type === 'Education'))
    }
  },
  created () {
    return
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
