<template>
   <div class="pa-10">

    <v-form ref="form">
    <v-container class="border-sm">
      <h2>Producenter</h2><br>
    <v-row>
    <v-col>
      <v-text-field v-model="manufacuturer.name" label="mærke" variant="outlined"  :rules="[rules.required]"></v-text-field>
    </v-col>
    <v-col>
      <v-text-field v-model="manufacuturer.establishyear" label="Grundlagt" variant="outlined" :rules="[rules.required, rules.yearrule]" ></v-text-field>
    </v-col>
    <v-col>
      <v-text-field v-model="manufacuturer.country" label="land" variant="outlined" height="37px"></v-text-field>
    </v-col>
    <v-col>
      <v-btn text="Gem" @click="save()" v-bind:disabled="invalidnumber"/>
      <v-btn text="Ryd" @click="clearEntity()" v-bind:disabled="invalidnumber"/>
    </v-col>

    </v-row>
  </v-container>
</v-form>

  <v-data-table :items="$store.state.manufacturers" :headers="headers">
    <template v-slot:item="{item}" >
      <tr class="datarow-bg" @click.stop="editItem(item)">
        <td>{{ item.name }}</td>
        <td>{{ item.establishyear }}</td>
        <td>{{ item.country }}</td>
      </tr>
    </template>
  </v-data-table> 
    
</div>
</template>
  
  <script>
  import { defineComponent } from 'vue';
  import { useStore } from 'vuex';
  

  // Components
  
  export default defineComponent({
    name: 'Manufacturers',

    data() {      
      const entity = {name:"", establishyear:0, country:""};

    return {
      headers: [
        {key: 'name', title:'Navn'},
        {key: 'establishyear', title:'Etableret'},
        {key: 'country', title:'Land'}],
        manufacuturer: entity,
        rules: {
              required: v=> !!v || 'Det kan ikke være tomt',
              yearrule: v => /^((18|19|20)\d{2}$)/.test(v) || 'Expression must be valid'
            }
      }
  },
  computed: {
    invalidnumber () {
        //debugger;
        return isNaN(this.manufacuturer.establishyear);
    }
  },
  methods: {    
    save(){
      //this.clearEntity();
      //return;
      if (isNaN(this.manufacuturer.id)){
        this.$store.dispatch('addManufacturer', this.manufacuturer);
      }
      else{
        this.$store.dispatch('updateManufacturer', this.manufacuturer);
      }
      this.clearEntity();
      
      //const store = useStore();      
    },
    editItem(item){      
      this.manufacuturer = Object.assign({},item);
    },
    clearEntity() {
      this.manufacuturer = {name:"", establishyear:"", country:""};
      this.$refs.form.reset();
    }
  },
    setup() {
      const store = useStore();
      store.dispatch('getManufacturers');
    }
      
  });
  </script>
  