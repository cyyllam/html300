<template>
  <div>
       <b-container>
                <b-row class="mb-4">
                    <b-col sm="12" md="3">
                        <p>{{loremText}}</p>
                    </b-col>
                    <b-col sm="12" md="9">
                        <b-card-group deck>
                            <b-card header="Featured" header-tag="header" title="A Title">
                                <b-card-text>Add trend or graph here</b-card-text>
                            </b-card>
                         </b-card-group>
                    </b-col>
                </b-row>
          <hr class="my-5">      
       </b-container>
       
  </div>
</template>

<script>
export default {
  data () {
      return {
          loremText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque eius maiores numquam. Eligendi, quod, a, inventore iure beatae dolorem fuga quo accusantium voluptatibus sit eveniet maxime? Distinctio ratione autem facilis!"
      }
  },
  methods: {

  },
  computed: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>