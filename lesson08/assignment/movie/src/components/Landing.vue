<template>
  <div>     
      <b-row>
        <b-col>  
            <hr class="mb-5">
            <!-- blockquote with tooltip in footer -->
            <blockquote class="blockquote text-center">
              <p>{{quotes.quote}}</p>
              <footer class="blockquote-footer">
                <a class="text-info" v-b-tooltip.hover :title="quotes.actor">{{quotes.character}}</a> in <cite title="Source Title">{{quotes.movie}}</cite>
              </footer>
            </blockquote>
        </b-col>
      </b-row>
  </div>
</template>

<script>
export default {
  data () {
      return {
          quotes: {movie: "Sudden Impact", quote: "Go ahead, make my day.", character: "Harry Callahan", actor: "Clint Eastwood"}
      }
  },
  methods: {
      selectLorems: function(num) {
        //   reduce the array of text (i.e. paragraphs of lorems) to this number
          return this.loremsArray.slice(0, num);
      }

  },
  computed: {
      loremsArray() {
        // create an array of 5 elements using text in the variable {{loremText}}
        let textArray = Array(5).fill(this.loremText);
        return textArray;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
