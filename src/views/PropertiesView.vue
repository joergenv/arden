<template>
    <div class="pa-10">
        <v-form ref="form" class="ardenform">
        <v-container class="border-sm">
          <h2>Egenskaber</h2><br>
            <v-row>
                <v-col>
                    <v-text-field v-model="property.title_dk" label="Beskrivelse DK" variant="outlined"  :rules="[rules.required]"></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field v-model="property.title_en" label="Beskrivelse UK" variant="outlined"></v-text-field>
                </v-col>
                <v-col>
                    <v-select label="Datatype" :items="datatypeList" item-title="text" item-value="id" v-model="property.datatype"></v-select>
                </v-col>
                <v-col>
                    <v-select label="Kategori" :items="categoryList" item-title="text" item-value="id" v-model="property.category"></v-select>
                </v-col>
                <v-col>
                    <v-btn text="Gem" @click="save()" v-bind:disabled="invalidnumber"/>
                    <v-btn text="Ryd" @click="clearEntity()" v-bind:disabled="invalidnumber"/>
                </v-col>    
            </v-row>
            <v-row>
              <v-col>
                <v-data-table :items="$store.state.properties" :headers="headers" variant="elevated">
                <template v-slot:item="{item}" >
                  <tr class="datarow-bg" @click.stop="editItem(item)">
                    <td>{{ item.title_dk }}</td>
                    <td>{{ item.title_en }}</td>
                    <td>{{ datatypes[item.datatype - 1].text }}</td>
                    <td>{{ categories[item.category].text }}</td>
                    <td>{{ item.productionend }}</td>
                  </tr>
                </template>
              </v-data-table> 
              </v-col>
            </v-row>
        </v-container>
      </v-form>



    </div>

    </template>
    
    <script>
    import { defineComponent } from 'vue';
    import { useStore } from 'vuex';
    
    var manList = [];
    
      export default defineComponent({
        name: 'Properties',
    
        data() {
          const entity = { title_dk:"", title_en:"", regex:"", datatype:null, artifacttype: 1, category:null};
          const _datatypes = [
            {id: 1, text:'Tekst'}, 
            {id: 2, text:'Heltal'},
            {id: 3, text:'Decimaltal'},
            {id: 4, text:'Dato'}
          ];
          const _categories = [
            {id: 0, text:'Generelt'},
            {id: 1, text: 'Motor'},
            {id: 2, text: 'Transmission'}

          ];
    
          return {
          headers: [
            {key: 'title_dk', title:'Beskrivelse DK'},
            {key: 'title_en', title:'Besrivelse EN'},
            {key: 'datatype', title:'Datatype'},
            {key: 'category', title:'Kategori'},
            {key: 'regex', title:'Valideringsregel'}],
            property: entity,            
            errorMessage: "",
            datatypes: _datatypes,
            categories: _categories,
            rules: {
              required: v=> !!v || 'Det kan ikke være tomt',
              yearrule: v => /^((18|19|20)\d{2}$)/.test(v) || 'Det skal være et validt årstal'
            }
          }
        },
        computed: {
            datatypeList() {
                return this.datatypes;
            },
            categoryList() {
                return this.categories;
            },
        },
        methods: {
          editItem(item){        
            var prop = {id: item.id, title_dk: item.title_dk, title_en: item.title_en, datatype: item.datatype, regex: item.regex, category: item.category};
            this.property = prop;
          },
          save() {
            this.errorMessage = "";
            var iState = 1;
            while (iState > 0){
              switch(iState){
                case 1:
                  if (this.property.title_dk == "" ){
                    this.errorMessage = "Egenskaben skal have en titel";
                    iState = 0
                  }
                  else{
                    iState++
                  }
                  break;
                case 2:
                  if (this.property.datatype == null){
                    this.errorMessage = "Egenskaben skal have en datatype";
                    iState = 0;
                  }
                  else{
                    iState ++  
                  }
                  break;           
                case 3:
                    if (this.property.category == null){
                        this.errorMessage = "Egenskaben skal have en kategori"
                        iState = 0;
                    }
                    else{
                        iState++;
                    }
                    break;
                default:
                  iState = 0                              
              }
            }
            if (this.errorMessage != "")
              return;
    
              if (isNaN(this.property.id)){
              this.$store.dispatch('addProperty', this.property);
            }
            else{
              this.$store.dispatch('updateProperty', this.property);
            }
            this.clearEntity();
          },
          clearEntity() {
            this.property = {title_dk:"", title_en:"", regex:"", datatype:null, artifacttype: 1, category: null};
            this.$refs.form.reset();
            this.selectedManufacturer = null;
            this.errorMessage = "";
          }
        },
        setup(){
          const store = useStore();
          store.dispatch('getProperties');
        }
      })
    </script>
    
      