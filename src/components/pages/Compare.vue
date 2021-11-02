<template>
  <div>
    <v-textarea
        label="Fist String"
        hide-details="auto"
        filled
        v-model="field1"
        height="200"
    ></v-textarea>
        <p>Введённое сообщение: {{ field1 }}</p>

    <v-textarea
        label="Second String"
        hide-details="auto"
        filled
        v-model="field2"
        height="200"
    ></v-textarea>
        <p>Введённое сообщение: {{ field2 }}</p>

    <v-spacer />

    <v-row class="justify-center">
      <v-btn
          depressed
          color="primary"
          elevation="4"
          class="mt-8"
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
  methods: {
    comp() {
      alert(this.field1 === this.field2)
    }
  }
}
</script>

<style scoped>

</style>