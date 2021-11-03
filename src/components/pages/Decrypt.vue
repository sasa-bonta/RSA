<template>
  <div>
    <v-textarea
        label="String to decrypt"
        hide-details="auto"
        filled
        v-model="message"
        height="200"
    ></v-textarea>

    <v-spacer/>

    <v-row class="justify-center">
      <v-btn
          depressed
          color="primary"
          elevation="4"
          class="mt-8"
          @click="decrypt"
      >
        Decrypt
      </v-btn>
    </v-row>

    <p class="mt-10">{{ decryptedMessage }}</p>
  </div>
</template>

<script>
import bigInt from "big-integer";

export default {
  name: "Decrypt",
  data: () => ({
    message: '',
    decryptedMessage: '',
    privateKey: {},
  }),
  mounted() {
    this.privateKey = this.$store.getters['keys/getPrivateKey']
    this.message = this.$store.getters['texts/getTextToDecrypt']
    this.decryptedMessage = this.$store.getters['result/getDecryptedTExt']
  },
  watch: {
    message: function (val) {
      this.$store.commit('texts/mutateTextToDecrypt', val)
    },
    decryptedMessage: function (val) {
      this.$store.commit('result/mutateDecryptedText', val)
    }
  },
  methods: {
    decrypt() {
      const messageChars = JSON.parse(this.message)
      const decryptedMessageArr = []
      for (const code of messageChars) {
        const decryptedCharCode = bigInt(code).modPow(this.privateKey.d, this.privateKey.N)
        decryptedMessageArr.push(String.fromCharCode(decryptedCharCode))
      }
      this.decryptedMessage = decryptedMessageArr.join("")
    },
  },
}
</script>

<style scoped>

</style>