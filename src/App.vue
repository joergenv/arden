<template>
  
  <v-app class="overflow-hidden">    
    <v-toolbar elevation="8">
      <v-toolbar-title>Taktormuseum</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
         <v-btn
          v-for="item in menuItems"
          :key="item.icon"
          :to="item.path"
          flat
        ><v-icon :icon="item.icon" size="x-large" class="mx-2"></v-icon >{{ item.title }}</v-btn>
      </v-toolbar-items>
      <v-menu class="hidden-md-and-up">
        
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-list>
          <v-list-tile v-for="item in menuItems" :key="item.icon">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
             </v-list-tile-content>
          </v-list-tile>   
        </v-list>
      </v-menu>
    </v-toolbar>
    
    <v-content id="content">
      <router-view></router-view>
    </v-content>
    
  </v-app>

</template>

<script>
//import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  data(){
    return {
      appTitle: 'Trakmnus Title',
      sidebar: false,
      menuItems: [
          { title: 'Home', path: '/', icon: 'mdi-home' },
          { title: 'Udstilling', path: '/artifacts', icon: 'mdi-tractor-variant' },
          { title: 'Modeller', path: '/models', icon: 'mdi-tractor-variant' },
          { title: 'Fabrikater', path: '/manufacturers', icon: 'mdi-shield-star-outline' },
          { title: 'Egenskaber', path: '/properties', icon: 'mdi-baguette'},
          { title: 'Login', path: '/signin', icon: 'mdi-account-circle' }
     ]
    }
  },
};
</script>
<style>

</style>
