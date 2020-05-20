<template>
  <div>     
      <b-row class="m-4">
        <b-col md="3">
            <h2>{{ sideHeader }}</h2>
            <!-- create two dummy paragraphs -->
            <p v-for="alorem in selectLorems(2)" :key="alorem.id">{{alorem}}</p>
        </b-col>
        <b-col md="9">
            <h2>{{ mainHeader }}</h2>
            <!-- create three dummy paragraphs -->
            <p v-for="alorem in selectLorems(3)" :key="alorem.id">{{alorem}}</p>
            <hr class="my-5">
            <!-- blockquote with tooltip in footer -->
            <blockquote class="blockquote text-center">
              <p class="mb-0" v-for="alorem in selectLorems(1)" :key="alorem.id">{{alorem}}</p>
              <footer class="blockquote-footer"><a class="text-info" v-b-tooltip.hover title="Some Hollywood celebrity">Someone famous</a> in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
        </b-col>
      </b-row>
  </div>
</template>

<script>
export default {
  data () {
      return {
          sideHeader: "Twitter Roll",
          mainHeader: "Weclome!",
          loremText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque eius maiores numquam. Eligendi, quod, a, inventore iure beatae dolorem fuga quo accusantium voluptatibus sit eveniet maxime? Distinctio ratione autem facilis!"
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
