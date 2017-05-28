<template>
  <div id="app">
  <head-component></head-component>
    <router-view class="view"></router-view>
  <foot-component></foot-component>
  </div>
</template>

<script>
import HeadComponent from './components/HeadComponent.vue'
import FootComponent from './components/FootComponent.vue'

export default {
  name: 'app',
  components: {
    HeadComponent,
    FootComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.view {
  flex: 1 0 auto;
}
</style>
