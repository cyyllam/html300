<template>
  <div class="my-5">
    <!-- this component references other components -->
    <b-container>
      <b-row align-h="center">
        <!-- this button toggles between two layouts -->
        <b-button :pressed.sync="myToggle" v-on:click="buttonLabel" class="mr-4 mb-4" variant="info">{{ button.label }}</b-button>
      </b-row>
    </b-container>
    
    <!-- the TrendsBlock component consists of a card for a graph or image and a side caption for 
    detailed text and explanation -->
    <!-- generate as many blocks or tiles based on numBLocks variable -->
    <!-- default layout-->
    <div v-if="myToggle">
      <TrendsBlock v-for="d in numBlocks" :key="d.id"/>
    </div>
      
    <!-- second layout when toggled -->
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
// create components and import it
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
        button: {state: true, label: "Switch to Gallery View"},
        numBlocks: 10
      }
  },
  methods: {
    buttonLabel: function() {
      // change button label when clicked
      this.button.state = !this.button.state;
      this.button.label = this.button.state ? 'Switch to Gallery View' :'Switch to List View';  
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


