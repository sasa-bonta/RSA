<template>
  <v-app id="inspire">

    <Navbar/>

    <v-main class="grey lighten-3">
      <v-container>
        <v-col>
          <v-sheet
              min-height="70vh"
              rounded="lg"
          >

            <MainView/>

          </v-sheet>
        </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./Navbar";
import MainView from "./MainView";

export default {
  name: "Dashboard",
  components: {MainView, Navbar},
}
</script>

<style scoped>

</style>