<template>
  <div>
      <b-container class="my-4">
        <Header>
          <h2 slot="title">{{"images" | makeUpper}}</h2>
          <p slot="content">Here is a collection of unrelated images</p>
        </Header>
        <Gallery />
      </b-container>
  </div>
</template>

<script>
// import components and call them
import Header from '@/components/Header.vue'
import Gallery from '@/components/Gallery.vue'

export default {
  data () {
      return {
      }
  },
  components: {
    Header,
    Gallery
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
