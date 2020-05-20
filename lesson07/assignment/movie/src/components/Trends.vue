<template>
  <div class="my-5">
    <!-- this component references other components -->
    <b-container>
      <b-row align-h="center">
        <b-button :pressed.sync="myToggle" class="mr-4 mb-4" variant="info">Toggle View</b-button>
      </b-row>
    </b-container>
    
    <!-- the TrendsBlock component consists of a card for a graph or image and a side caption for 
    detailed text and explanation -->
    <!-- generate as many blocks or tiles based on numBLocks variable -->
    <!-- default, if block button selected -->
    <div v-if="myToggle">
      <TrendsBlock v-for="d in numBlocks" :key="d.id"/>
    </div>
      
    <!-- if gallery button clicked   -->
    <div>
       <b-container>
        <b-card-group deck>
        <TrendsTile v-for="d in numBlocks" :key="d.id"/>
        </b-card-group> 
      </b-container>
    </div>
     
      
  </div>
</template>

<script>
// create component called Landing.vue and import it
import TrendsBlock from '@/components/TrendsBlock.vue'
import TrendsTile from '@/components/TrendsTile.vue'

export default {
  name: 'Trends',
  components: {
    TrendsBlock,
    TrendsTile
  },
   data () {
      return {
        myToggle: true,
        numBlocks: 10
      }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


