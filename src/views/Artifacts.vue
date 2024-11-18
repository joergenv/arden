<template>     
     <h1>jensen</h1>
     <p v-text="tekst"></p>
     <v-container grid-list-md>
        <v-row>
        <v-col
          v-for="n in 30"
          :key="n"
          cols="auto"
          lg="2"
          sm="3"          
          width="200"

        >
        <v-card class="pa-4 ma-4" elevation="12" :variant="elevated" >
        <v-card-item>
            <v-img
      
      width="100pct"
      src="../assets/tractor.jpg"
      cover
    ></v-img>
        <v-card-title>
            tekst {{n}}
        </v-card-title>

        <v-card-subtitle>
            Card subtitle secondary text
        </v-card-subtitle>
        </v-card-item>

          </v-card>
        </v-col>
      </v-row>
     </v-container>
</template>
    
<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Artifact',
        data() {
            return {
                names: [
                {first: 'Mathijs', last: 'de Ligt'},
                {first: 'Virgil', last: 'van Dijk'},
                {first: 'Thomas', last: 'MullerSuperLong'},
                {first: 'Cristiano', last: 'Ronaldo'},
                {first: 'Arjen', last: 'Robben'},
                ],
                tekst: "jensen"   
            }
        },
        computed: {            
            textSize () {
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs': return 'caption'
                    case 'sm': return 'body-1'
                    case 'md': return 'body-2'
                    case 'lg': return 'subheading'
                    case 'xl': return 'title'
                }
            },
            calculateCols (){
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs': return '1'
                    case 'sm': return '3'
                    case 'md': return '4'
                    case 'lg': return '8'
                    case 'xl': return '12'
                }
            }
		}
    });

</script>