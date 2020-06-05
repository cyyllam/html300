<template>
  <div>
       <!-- <b-container> -->
            <!-- <b-card-group deck> -->
                <b-card  style="max-width: 15rem;" class="mb-3" title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
                    <b-card-text>
                        {{loremText}}
                    </b-card-text>
                    <template v-slot:footer>
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </template>
                </b-card>
            <!-- </b-card-group>      -->
       <!-- </b-container> -->
       
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