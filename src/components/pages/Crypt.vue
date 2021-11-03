<template>
  <div>

    <v-textarea
        label="String to encrypt"
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
          @click="encrypt"
      >
        Encrypt
      </v-btn>
    </v-row>

    <v-btn
        depressed
        color="secondary"
        elevation="4"
        v-clipboard:copy="JSON.stringify(encryptedMessage)"
        class="mt-10"
    >
      Copy
    </v-btn>
    <p class="mt-10">{{ encryptedMessage }}</p>
  </div>
</template>

<script>
import bigInt from 'big-integer';

export default {
  name: "Crypt",
  data: () => ({
    message: '',
    encryptedMessage: '',
  }),
  mounted() {
    this.message = this.$store.getters['texts/getTextToCrypt']
    this.encryptedMessage = this.$store.getters['result/getCryptedTExt']
  },
  watch: {
    message: function (val) {
      this.$store.commit('texts/mutateTextToCrypt', val)
    },
    encryptedMessage: function (val) {
      this.$store.commit('result/mutateCryptedText', val)
    }
  },
  methods: {
    encrypt() {
      const MAX_CHAR_CODE = 65536;
      // 1
      const p = 293
      const q = 229
      console.log(`p: ${p}, q: ${q}`)
      // 2
      const N = p * q
      console.log(`${N} > ${MAX_CHAR_CODE} === ${N > MAX_CHAR_CODE}`)
      // 3
      const fi = (p - 1) * (q - 1)
      console.log(`fi: ${fi}`)
      // 4
      const e = this.getRandomInt(1, fi)
      console.log(`e: ${e}`)
      // 5
      const d = this.getD(fi, e)
      console.log(`d: ${d}`)
      // 6
      const cPub = {e: e, N: N}
      const cPriv = {d: d, N: N}
      this.$store.commit('keys/mutatePublicKey', cPub)
      this.$store.commit('keys/mutatePrivateKey', cPriv)
      console.log(`C.pub: (${cPub.e}, ${cPub.N})`)
      console.log(`C.priv: (${cPriv.d}, ${cPriv.N})`)
      // 7
      const messageChars = Array.from(this.message)
      const encryptedMessageArr = []
      for (const char of messageChars) {
        const code = char.charCodeAt(0)
        let encryptedCharCode = bigInt(code).modPow(cPub.e, cPub.N)
        encryptedMessageArr.push(encryptedCharCode)
      }
      this.encryptedMessage = encryptedMessageArr
    },

    getRandomInt(min, max) {
      console.log(`Random between ${min} and ${max}`)
      return 12919;
    },

    getD(fi, e) {
      let d = null
      let k = 1;
      while (Number.isInteger(d) !== true) {
        d = (1 + k * fi) / e
        k++
      }
      return d
    },
  },
}
</script>

<style scoped>

</style>