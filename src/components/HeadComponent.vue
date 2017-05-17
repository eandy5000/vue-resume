<template>
    <div>
        <nav-bar></nav-bar>
        <h3>Header</h3>
        <router-link :to="{path: 'Home'}">Home</router-link>
        <router-link :to="{path: 'About'}">About</router-link>
    </div>
</template>

<script>
    import NavBar from './NavBar.vue'

    export default {
      components: {
        NavBar
      }
    }
</script>
