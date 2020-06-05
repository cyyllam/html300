<template>
    <b-row>
        <!-- loop through each photo from the photos object, nesting img within a column -->
        <b-col md="4" v-for="photo in photos" :key="photo.id">
            <b-img @click="myToggleBorder" :style="style" thumbnail fluid :src="thumbUrl(photo.filename)" :alt="photo.altText"></b-img>
        </b-col>
    </b-row>
</template>

<script>
// import mixin
import { toggleBorder } from '../mixins/toggleBorderMixin.js'

export default {
  props: {
    // prop validation
    src: String,
    alt: String
  },
  data () {
      return {
        // object containing image paths, alt text
        photos: [
          {filename: 'app-entertainment-ipad-mockup-265685.jpg', altText: 'Ipad with Netflix'},
          {filename: 'black-and-red-samsung-galaxy-smartphone-1790556.jpg', altText: 'Photo by Paul Volkmer from Pexels'},
          {filename: 'black-and-white-production-scene-take-tool-918281.jpg', altText: 'Photo by Obregonia D. Toretto from Pexels'},
          {filename: 'food-snack-popcorn-movie-theater-33129.jpg', altText: 'Movie theatre popcorn'},
          {filename: 'hollywood-sign-2671089.jpg', altText: 'Hollywood sign from Pexels'},
          {filename: 'people-sitting-on-gang-chairs-2774556.jpg', altText: 'Photo by Luis Quintero from Pexels'},
          ]
      }
  },
  // call mixin
  mixins: [toggleBorder],
  methods: {
    // function to concatenate beginning of file path
    thumbUrl(filename) {
      return require(`../assets/${filename}`);
    },
  }
}
</script>

     