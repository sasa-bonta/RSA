<template>
  <div>
    <v-app-bar
        app
        color="white"
        flat
    >
      <v-container class="py-0 fill-height">
        <v-btn
            v-for="link in links"
            :key="link.route"
            :to="link.route"
            text
        >
          {{ link.title }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
              dense
              flat
              hide-details
              rounded
              solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",

  data: () => ({
    links: [
      {title: 'Crypt', route: 'crypt'},
      {title: 'Decrypt', route: 'decrypt'},
      {title: 'Compare', route: 'comp'},
    ],
  }),
}
</script>

<style scoped>

</style>