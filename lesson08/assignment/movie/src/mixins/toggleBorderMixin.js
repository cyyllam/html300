export const toggleBorder = {
    data () {
        return {
            aToggle: true
        }
    },
    computed: {
        style() {
            let styleA  = {
                border: '2px solid grey',
            };
            return this.aToggle ? null : styleA
        }
    },
    methods: {
        myToggleBorder: function() {
          this.aToggle = !this.aToggle; 
        }
      }
}