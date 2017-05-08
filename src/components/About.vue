<template>
  <div class="hello">
    <h1>About</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste placeat eum cumque. Repellat dolore sunt dignissimos quidem similique amet quo facilis blanditiis repellendus soluta dicta, quas, maxime eos delectus magnam.</p>
    <div v-for="item in data">
    {{item.name}} {{item.img === "../assets/sass.svg"}}
    <img :src="item.img"/>
    </div>
  </div>
</template>
<script>
    import data from '../model/data.json'

    export default {
      computed: {
        data: function () {
          return data
        }
      }
    }
</script>
