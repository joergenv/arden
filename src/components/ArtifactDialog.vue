<template>
  <v-dialog v-model="show" width="500px">
   <v-card>
     <v-card-text>
       <h1>My dialog</h1>
       <p>{{ editItem.id }}</p>
         </v-card-text>
     <v-card-actions>
       <v-btn color="primary" flat @click.stop="closeDialog">Close</v-btn>
     </v-card-actions>
   </v-card>
 </v-dialog>
 </template>
 
 <script>
    import { defineComponent } from 'vue';
 
   export default defineComponent({
       name: 'ArtifactDialog',
       props: {    
         eitem: Object
       },
       data: function() {
        return {
          editItem: this.eitem
        }
       },
       methods: {
         closeDialog : function(){
           this.$emit('input', false);
         }
       },
       computed: {
        show: {
          get () {
            return this.value
          },
          set (value) {
            this.$emit('input', false)
          }
        }
      }       
   });
 </script>