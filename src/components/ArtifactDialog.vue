<template>
  <v-dialog v-model="show" width="600px">
   <v-card>
    <v-title>
      <div class="dialog-title"><h2> {{ title }}</h2></div>
    </v-title>
    <v-divider class="mt-3"></v-divider>
    <v-card-text>
      <v-virtual-scroll :items="proplist" height="500">
      <template v-slot:default="{item}">
          <v-row align="center" no-gutters style="padding-top: 1rem;padding-right: 1rem;">
            <v-col>
                  {{ item.title_dk }}
            </v-col>
            <v-col>
                <v-text-field variant="outlined"  density="custom-text-input-densit" hide-details="true"></v-text-field>
            </v-col>
          </v-row>          
      </template>
      </v-virtual-scroll>
    </v-card-text>
     <v-card-actions>
       <v-btn color="primary" flat @click="save()">Gem</v-btn>
       <v-btn color="primary" flat @click.stop="show=false">Luk</v-btn>
     </v-card-actions>
   </v-card>
 </v-dialog>
 </template>
 
 <script>
    //import { defineComponent, watch } from 'vue';
    import { useStore } from 'vuex';
 
   export default {
       name: 'ArtifactDialog',
       props: {           
        eitem: {},
        modelValue: Boolean
       },
       data: function() {
        return {
          tractor: this.eitem,
          title: '',
          show: this.modelValue,
          properties: [],
        }
       },
       watch: {
        show (val) {
              this.$emit('update:modelValue', val);
        },
        modelValue (val) {
            this.show = val;
        },
        eitem (val){
          this.title = this.eitem.id + ' ' + this.eitem.manufacturer + ' ' + this.eitem.tractorModel;
          console.log(val);
        }
      },
       methods: {
        save: function() {
          console.log('test');
          this.show = false;
        }
       },
       computed: {
        proplist: {
          get() {
            return this.$store.state.properties
          }
        }
      },
      setup() {
        const store = useStore();
        store.dispatch('getProperties');

      }
   };
 </script>