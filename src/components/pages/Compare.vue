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
    this.field1 = this.$store.getters['strings/getStr1']
    this.field2 = this.$store.getters['strings/getStr2']
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
      const field1Text = this.field1.replace(/(\r\n|\n|\r)/gm, "")
      const field2Text = this.field2.replace(/(\r\n|\n|\r)/gm, "")
      alert(`Similarity:  ${this.similarity(field1Text, field2Text) * 100}  %`)
    },
    similarity(s1, s2) {
      let longer = s1;
      let shorter = s2;
      if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
      }
      let longerLength = longer.length;
      if (longerLength === 0) {
        return 1.0;
      }
      return (longerLength - this.editDistance(longer, shorter)) / parseFloat(longerLength);
    },
    editDistance(s1, s2) {
      s1 = s1.toLowerCase();
      s2 = s2.toLowerCase();

      let costs = [];
      for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
          if (i === 0)
            costs[j] = j;
          else {
            if (j > 0) {
              let newValue = costs[j - 1];
              if (s1.charAt(i - 1) !== s2.charAt(j - 1))
                newValue = Math.min(Math.min(newValue, lastValue),
                    costs[j]) + 1;
              costs[j - 1] = lastValue;
              lastValue = newValue;
            }
          }
        }
        if (i > 0)
          costs[s2.length] = lastValue;
      }
      return costs[s2.length];
    }
  }
}
</script>

<style scoped>

</style>