<template>
  <div class="m-5">
    
    <!-- <b-container> -->
       <b-card no-body>
          <b-tabs pills card vertical nav-wrapper-class="w-25">
            <b-tab title="About" active>
              <b-card-text>
                <p>Click on FAQ to see accordian</p> 
                <p>{{loremText}}</p>
              </b-card-text>
              </b-tab>
            <b-tab title="FAQ">
              <b-card-text>

                <!-- insert accordian  -->
                <div role="tablist">
                  <!-- for each item in the items object, a it as a section in the accordian-->
                  <!-- declare index so that it can be used for the toggle ids and reference -->
                  <b-card no-body class="mb-1" v-for="(item, index) in items" :key="item.id">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-button block v-b-toggle="'accordion-'+index" variant="light">{{item.header}}</b-button>
                    </b-card-header>
                    <b-collapse :id="'accordion-'+index" visible accordion="my-accordion" role="tabpanel">
                      <b-card-body>              
                        <b-card-text>{{loremText}}</b-card-text>
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                </div>

              </b-card-text>
            </b-tab>
          </b-tabs>
      </b-card>
    <!-- </b-container> -->
  </div>
  
</template>

<script>
export default {
  data () {
      return {
        loremText: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
        // create object containing headers for each accordian. Ideally have a key/value of specific
        // text for each accordian, but since we're using filler text, we'll just reference the loremText
        // variable for brevity
        items: [
          {header: 'Who We Are'},
          {header: 'Data Sources'},
          {header: 'Contact Us'}
          ]
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
