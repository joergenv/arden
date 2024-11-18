<template>
  <v-flex >
      <v-card>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex
              xs12
              md6
              lg3
              v-for="n in 12"
              :key="n"              
            >
              <v-card flat tile>
                <v-card-media
                  :src="../assets/tractor.jpg"
                  height="400px"
                >
                </v-card-media>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        </v-card>
    </v-flex>
  </template>

<script>
</script>