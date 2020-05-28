<template>
  <div class="home">
    <!-- this home page follows the default HelloWorld example where a component is imported -->
    <Landing />

    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// create component called Landing.vue and import it
import Landing from '@/components/Landing.vue'

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    Landing
    // HelloWorld
  }
}
</script>
