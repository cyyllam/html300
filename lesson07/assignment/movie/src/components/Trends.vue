<template>
  <div class="my-5">
    <!-- this component references another component -->
    <!-- the TrendsBlock component consists of a card for a graph or image and a side caption for 
    detailed text and explanation -->
    <!-- generate as many blocks based on numBLocks variable -->
      <TrendsBlock v-for="d in numBlocks" :key="d.id"/>
  </div>
</template>

<script>
// create component called Landing.vue and import it
import TrendsBlock from '@/components/TrendsBlock.vue'

export default {
  name: 'Trends',
  components: {
    TrendsBlock
  },
   data () {
      return {
        numBlocks: 4
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


