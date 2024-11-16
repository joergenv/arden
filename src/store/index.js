import { createStore } from 'vuex'
import { supabase } from '@/Lib/supabaseClient'

export default createStore({
  state: {
    manufacturers: [],
    tractormodels: [],
    artifacts:[],
    properties:[],
    lastManId:0,
    lastModelId:0,
    lastTractorId:0,
    lastPropertyId:0
  },
  getters: {
  },
  mutations: {
    updateManufacuturers (state, list) {
      state.manufacturers = list;
    },
    updateTractorModels (state, list){
      state.tractorModels = list;
    },
    updateArtifacts (state, list) {
      state.artifacts = list;
    },
    updateProperties(state, list) {
      state.properties = list;
    }
  },
  actions: {
    async getManufacturers({commit}) { 
      try {
        const res = await supabase.from('manufacturers').select().order('id', {ascending:true})
        if (res.status == 200) {
          console.log(res);
          this.state.lastManId = res.data[res.data.length-1].id;
          commit("updateManufacuturers", res.data);
        } else {
          console.log(res.status);
        }
      } catch (e) {
        console.log(e);
      }
    },
    async addManufacturer({commit}, entity) { 
      try {
        //entity.id = this.state.lastManId++;
        const res = await supabase.from('manufacturers').upsert(entity).select();
        if (res.error == null) {
          console.log(res);
          //this.state.lastId = res.data[res.data.length-1].id;
         this.dispatch('getManufacturers');
        } else {
          console.log(res.status);
        }
      } catch (e) {
        console.log(e);
      }
    },
    async updateManufacturer({commit}, entity) { 
      try {
        //entity.id = this.state.lastManId++;
        const res = await supabase.from('manufacturers').update(
          {name:entity.name, establishyear: entity.establishyear, country: entity.country}).eq('id',entity.id);
        if (res.error == null) {
          console.log(res);
          //this.state.lastId = res.data[res.data.length-1].id;
         this.dispatch('getManufacturers');
        } else {
          console.log(res.status);
        }
      } catch (e) {
        console.log(e);
      }
    },
    async getTractorModels({commit}) { 
      try {
        const res = await supabase.from('gettractormodels').select().order('id', {ascending:true})
        if (res.status == 200) {
          console.log(res);
          this.state.lastManId = res.data[res.data.length-1].id;
          commit("updateTractorModels", res.data);
        } else {
          console.log(res.status);
        }
      } catch (e) {
        console.log(e);
      }
    },
    async addTractorModel({commit}, entity) { 
      try {
        //entity.id = this.state.lastManId++;
        const res = await supabase.from('tractormodel').upsert(entity).select();
        if (res.error == null) {
          console.log(res);
          //this.state.lastId = res.data[res.data.length-1].id;
         this.dispatch('getTractorModels');
        } else {
          console.log(res.status);
        }
      } catch (e) {
        console.log(e);
      }
    },
    async updateTractorModel({commit}, entity) { 
      try {
        //entity.id = this.state.lastManId++;
        const res = await supabase.from('tractormodel').update(
          {name:entity.name, productionstart: entity.productionstart, productionend: entity.productionend, manufacturer_id: entity.manufacturer_id}).eq('id',entity.id);
        if (res.error == null) {
          console.log(res);
          //this.state.lastId = res.data[res.data.length-1].id;
         this.dispatch('getTractorModels');
        } else {
          console.log(res.status);
        }
      } catch (e) {
        console.log(e);
      }
    },
    async getArtifacts({commit}) { 
      try {
        const res = await supabase.from('getartifacts').select().order('id', {ascending:true})
        if (res.status == 200) {
          console.log(res);
          this.state.lastArtifactId = res.data[res.data.length-1].id;
          commit("updateArtifacts", res.data);
        } else {
          console.log(res.status);
        }
      } catch (e) {
        console.log(e);
      }
    },
    async addArtifact({commit}, entity) { 
      try {
        const res = await supabase.from('artifact').upsert(entity).select();
        if (res.error == null) {
          console.log(res);
          this.dispatch('getArtifacts');
        } else {
          console.log(res.status);
        }
      } catch (e) {
        console.log(e);
      }
    },
    async updateArtifact({commit}, entity) { 
      try {
        const res = await supabase.from('artifact').update(
          {
            tractormodel_id:entity.tractormodel_id
          }).eq('id',entity.id);
        if (res.error == null) {
          console.log(res);
         this.dispatch('getArtifacts');
        } else {
          console.log(res.status);
        }
      } catch (e) {
        console.log(e);
      }
    },
    async getProperties({commit}) { 
      try {
        const res = await supabase.from('property').select().order('id', {ascending:true})
        if (res.status == 200) {
          console.log(res);
          this.state.lastArtifactId = res.data[res.data.length-1].id;
          commit("updateProperties", res.data);
        } else {
          console.log(res.status);
        }
      } catch (e) {
        console.log(e);
      }
    },
    async addProperty({commit}, entity) { 
      try {
        const res = await supabase.from('property').upsert(entity).select();
        if (res.error == null) {
          console.log(res);
         this.dispatch('getProperties');
        } else {
          console.log(res.status);
        }
      } catch (e) {
        console.log(e);
      }
    },
    async updateProperty({commit}, entity) { 
      try {
        const res = await supabase.from('property').update(
          {
            title_dk:entity.title_dk, 
            artifacttype: entity.artifacttype, 
            title_en: entity.title_en, 
            regex: entity.rege,
            datatype: entity.datatype,
            category: entity.category             
          }).eq('id',entity.id);
        if (res.error == null) {
          console.log(res);
         this.dispatch('getProperties');
        } else {
          console.log(res.status);
        }
      } catch (e) {
        console.log(e);
      }
    }
  },
  modules: {
  }
})
