<template>
  <div class="hello">
    <h1>About</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste placeat eum cumque. Repellat dolore sunt dignissimos quidem similique amet quo facilis blanditiis repellendus soluta dicta, quas, maxime eos delectus magnam.</p>

      <div v-for="item in tech">
       {{ item.name }}
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
        tech () {
          return this.data.filter((item) => {
            return (item.type === 'Technology')
          })
        }
      },
      created () {
        console.log(this.data)
      }
    }
</script>
