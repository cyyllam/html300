<template>
  <div class="home">
    <!-- this home page follows the default HelloWorld example where components are imported -->
    <b-container>
      <!-- insert header as a component and use slots from Header.vue -->
      <Header>
        <h2 slot="title">{{"welcome" | makeUpper}}</h2>
        <p slot="content">
          It's easy to google for a generic list of the best movies to watch, but sometimes that search can be 
          onerous when you have something more specific in mind. Perhaps you're looking for a list of movies
          off the beaten path that matches a set of criteria, or perhaps you just want to know, of the films Ryan
          Gosling has acted in, which have won awards? Whatever it may be, let us help you.
        </p>
      </Header>
      <Landing />
    </b-container>
    
  </div>
</template>

<script>
// import components and call them
import Header from '@/components/Header.vue'
import Landing from '@/components/Landing.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Landing
  },
  filters: {
    // create local filter to make text uppercase
    // makeUpper(myString) {
    //   return myString.toUpperCase();
    // }
  }
}
</script>

<style lang="scss">

h1 {
  font-size: .5rem;
}

</style>
