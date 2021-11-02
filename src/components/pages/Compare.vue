<template>
  <div>
    <v-textarea
        label="Fist String"
        hide-details="auto"
        filled
        v-model="field1"
        height="200"
    ></v-textarea>

    <v-textarea
        label="Second String"
        hide-details="auto"
        filled
        v-model="field2"
        height="200"
        class="mt-3"
    ></v-textarea>

    <v-spacer />

    <v-row class="justify-center">
      <v-btn
          depressed
          color="primary"
          elevation="4"
          class="mt-8 mb-8"
          @click="comp"
      >
        Compare
      </v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Compare",
  data: () => ({
    field1: '',
    field2: '',
  }),
  mounted() {
    this.field1 = this.$store.getters['stings/getStr1']
    this.field2 = this.$store.getters['stings/getStr2']
  },
  watch: {
    field1: function (val) {
      this.$store.commit('strings/mutateStr1', val)
    },
     field2: function (val) {
      this.$store.commit('strings/mutateStr2', val)
    },
  },
  methods: {
    comp() {
      alert(this.field1 === this.field2)
    }
  }
}
</script>

<style scoped>

</style>