<template>
  <v-dialog v-model="show" width="600px">
   <v-card title="Egenskaber">
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
       <v-btn color="primary" flat @click.stop="show=false">Close</v-btn>
     </v-card-actions>
   </v-card>
 </v-dialog>
 </template>
 
 <script>
    import { defineComponent, watch } from 'vue';
    import { useStore } from 'vuex';
 
   export default defineComponent({
       name: 'ArtifactDialog',
       props: {    
         eitem: Object,
         modelValue: Boolean
       },
       data: function() {
        return {
          editItem: this.eitem,
          show: this.modelValue,
          properties: []
        }
       },
       methods: {
       },
       computed: {
        proplist: {
          get() {
            return this.$store.state.properties
          }
        }
      },
      watch: {
        show: function (val) {
              this.$emit('update:modelValue', val)
          },
        modelValue: function (val) {
              this.show= val
        },
      },
      setup() {
        const store = useStore();
        store.dispatch('getProperties');

      }
   });
 </script>