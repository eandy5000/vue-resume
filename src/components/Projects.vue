<template>
  <div class="hello">
    <h2>Projects <span>Coming Soon</span></h2>
    <p>To see what I am currently working on check out my  <a href="https://github.com/eandy5000">Github repo</a></p>
    
  </div>
</template>
<script>
    import data from '../model/data.js'
    import MediaTech from './MediaTech.vue'

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
      },
      components: {
        MediaTech
      }
    }
</script>

<style>
  span {
    font-weight: normal;
  }
  a {
    color: #2c3e50;
  }
</style>
