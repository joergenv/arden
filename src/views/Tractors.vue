<template>
    <div class="pa-10">
      <v-form ref="form">
        <v-container class="border-sm">
          <h2>Traktormodeller</h2><br>
          <v-row>
            <v-col>
          <v-text-field v-model="tractorModel.name" label="Model" variant="outlined"  :rules="[rules.required]"></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="tractorModel.productionstart" label="Produktion start" variant="outlined" :rules="[rules.required, rules.yearrule]" ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="tractorModel.productionend" label="Produktion afsluttet" variant="outlined" :rules="[rules.required, rules.yearrule]"></v-text-field>
        </v-col>
        <v-col>
          <v-select label="Fabrikat" :items="manufacturerList" item-title="name" item-value="id" v-model="tractorModel.manufacturer_id"></v-select>
        </v-col>
        <v-col>
          <v-btn text="Gem" @click="save()" v-bind:disabled="invalidnumber"/>
          <v-btn text="Ryd" @click="clearEntity()" v-bind:disabled="invalidnumber"/>
        </v-col>    
          </v-row>
          <v-row>
            <v-col :class="{errortextShow: errorMessage != ''}" class="errortext">&nbsp;{{errorMessage}}</v-col>
          </v-row>
        </v-container>
      </v-form>
    
    
      <v-data-table :items="$store.state.tractorModels" :headers="headers">
        <template v-slot:item="{item}" >
          <tr class="datarow-bg" @click.stop="editItem(item)">
            <td>{{ item.modelname }}</td>
            <td>{{ item.manuname }}</td>
            <td>{{ item.productionstart }}</td>
            <td>{{ item.productionend }}</td>
          </tr>
        </template>
      </v-data-table> 
    </div>
    
    </template>
    
    <script>
    import { defineComponent } from 'vue';
    import { useStore } from 'vuex';
    
    var manList = [];
    
      export default defineComponent({
        name: 'TractorModels',
    
        data() {
          const entity = {name:"", productionstart:null, productionend:null, manufacturer_id:null};
    
          return {
          headers: [
            {key: 'modelname', title:'Model'},
            {key: 'manuname', title:'Mærke'},
            {key: 'productionstart', title:'Produktionsstart'},
            {key: 'productionend', title:'Produktionsslut'}],
            tractorModel: entity,
            selectedManufacturer:  null,
            errorMessage: "",
            rules: {
                  required: v=> !!v || 'Det kan ikke være tomt',
                  yearrule: v => /^((18|19|20)\d{2}$)/.test(v) || 'Det skal være et validt årstal'
                }
          }
        },
        computed: {
          manufacturerList() {
            return this.$store.state.manufacturers;
          }
        },
        methods: {
          editItem(item){        
            var tm = {id: item.id, name: item.modelname, productionstart: item.productionstart, productionend: item.productionend, manufacturer_id: item.manufacturer_id};
            this.tractorModel = tm;
          },
          save() {
            this.errorMessage = "";
            var iState = 1;
            while (iState > 0){
              switch(iState){
                case 1:
                  if (this.tractorModel.name == "" ){
                    this.errorMessage = "Modellen skal have et navn";
                    iState = 0
                  }
                  else{
                    iState++
                  }
                  break;
                case 2:
                  if (isNaN(this.tractorModel.productionstart) || this.tractorModel.productionstart == null){
                    this.errorMessage = "Produktionstart skal være et validt årstal";
                    iState = 0;
                  }
                  else{
                    iState ++  
                  }
                  break;
                case 3:
                  if (isNaN(this.tractorModel.productionstart) || this.tractorModel.productionend == null){
                    this.errorMessage = "Produktionafsluttet skal være et validt årstal";
                    iState = 0;
                  }
                  else{
                    iState ++                  
                  }
                  break;
                case 4:
                  if (isNaN(this.tractorModel.manufacturer_id) || this.tractorModel.manufacturer_id == null){
                    this.errorMessage = "Der skal være valgt et fabrikat";
                    iState = 0;
                  }
                  else{
                    iState ++                  
                  }
                  break;
                default:
                  iState = 0                              
              }
            }
            if (this.errorMessage != "")
              return;
    
              if (isNaN(this.tractorModel.id)){
              this.$store.dispatch('addTractorModel', this.tractorModel);
            }
            else{
              this.$store.dispatch('updateTractorModel', this.tractorModel);
            }
            this.clearEntity();
          },
          clearEntity() {
            this.tractorModel = {name:"", productionstart:null, productionend:null, manufacturer_id:null};
            this.$refs.form.reset();
            //this.selectedManufacturer = this.$store.state.manufacturers[0];
            this.selectedManufacturer = null;
            this.errorMessage = "";
          }
        },
        setup(){
          const store = useStore();
          store.dispatch('getTractorModels');
          store.dispatch('getManufacturers');
        }
      })
    </script>
    
      