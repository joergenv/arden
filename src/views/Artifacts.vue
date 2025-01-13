<template>     
     <h1>{{ title }}</h1>
     <artifact-dialog v-model="showDetails" :eitem="eitem" />
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
            <v-img width="100pct" src="../assets/tractor.jpg" cover></v-img>
        <v-card-title>
            tekst {{n}}
        </v-card-title>

        <v-card-subtitle>
            Card subtitle secondary text
        </v-card-subtitle>
        </v-card-item>        
        <v-card-actions>
          <v-btn icon="mdi-card-text-outline" @click.stop="viewDetails(n)"></v-btn>
        </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
     </v-container>
</template>
    
<script>
    import { defineComponent, ref } from 'vue';
    import ArtifactDialog from '../components/ArtifactDialog';

    export default defineComponent({
        name: 'Artifact',
        data() {
            return {    
                eitem: {
                    id: 0,
                    manufacturer: 'Fergusson',
                    tractorModel: '136A',
                    year: 1935
                },       
                title: "Udstilling",
                showDetails:  false,
            }            
        },
        methods: {
            viewDetails: function(val){
                //var item =  {id: val, manufacturer: this.artifact.manufacturer, tractorModel: this.artifact.tractorModel};
                //this.eitem.id = val;
                this.eitem = {id: val, manufacturer: this.eitem.manufacturer, tractorModel: this.eitem.tractorModel};
                //this.eitem = item;
                //this.eitem.id = val;
                this.showDetails = !this.showDetails;
            }
        },
        components: {
            ArtifactDialog
        },
        computed: {            
		}
    });

</script>