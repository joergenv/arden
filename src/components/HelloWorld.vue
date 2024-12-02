<template>
<a href="https://codesandbox.io/p/sandbox/vuetify-top-navbar-frhu8">sandbox</a>
<v-btn key="home" > Accept <v-icon dark right >
          mdi-checkbox-marked-circle
        </v-icon></v-btn>

        <a href="https://pictogrammers.com/library/mdi/" target="_blank"><v-icon icon="mdi-face-woman" class="mx-4"/>Ikonliste</a>

        <a href="https://www.tractordata.com/farm-tractors/index.html" target="_blank"><v-icon icon="mdi-tractor-variant" class="mx-4"/>Traktordb</a>

        <a href="https://www.teamtractor.com/blog/help-me-understand-the-different-tractor-transmission-types--30304" target="_blank"><v-icon icon="mdi-tractor-variant" class="mx-4"/>transmisionstyper</a>

      <br/>
        <p>
          <a href="https://trello.com/b/TMYK9fLP/trakmus">Trello projekt</a>
        </p>        
   
</template>

<script>

export default {
  name: 'HelloWorld',

  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader/tree/next',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify/tree/next',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    importantLinks: [
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Roadmap',
        href: 'https://vuetifyjs.com/introduction/roadmap/',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
  }),
}
</script>
