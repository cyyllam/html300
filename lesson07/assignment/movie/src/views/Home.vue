<template>
  <div class="home">
    <Landing />

    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <HelloWorld msg=" "/> -->
    <!-- <HelloWorld /> -->
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
