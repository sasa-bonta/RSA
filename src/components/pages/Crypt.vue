<template>
  <div>

    <v-row class="mt-8 mr-8 ml-16">
      <v-select
          :items="primaryNumbers"
          v-model="p"
          label="P"
          outlined
          class="mr-16"
      ></v-select>

      <v-select
          :items="primaryNumbers"
          v-model="q"
          label="Q"
          outlined
          class="ml-16"
      ></v-select>
    </v-row>

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

    <v-row>
      <v-btn
          depressed
          color="secondary"
          elevation="4"
          v-clipboard:copy="JSON.stringify(encryptedMessage)"
          v-clipboard:success="onCopy"
          class="mt-10 ml-5"
      >
        Copy
      </v-btn>
      <p class="ml-5 mt-11"><b style="color: green">{{ success }}</b></p>
    </v-row>

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
    success: '',
    p: null,
    q: null,
    fi: null,
    e: null,
    primaryNumbers: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997]
  }),
  mounted() {
    this.message = this.$store.getters['texts/getTextToCrypt']
    this.encryptedMessage = this.$store.getters['result/getCryptedTExt']

    this.p = this.$store.getters['vars/getP']
    this.q = this.$store.getters['vars/getQ']
    this.success = ''
  },
  watch: {
    message: function (val) {
      this.$store.commit('texts/mutateTextToCrypt', val)
    },
    encryptedMessage: function (val) {
      this.$store.commit('result/mutateCryptedText', val)
    },
    p: function (val) {
      this.$store.commit('vars/mutateP', val)
    },
    q: function (val) {
      this.$store.commit('vars/mutateQ', val)
    }
  },
  methods: {
    encrypt() {
      const MAX_CHAR_CODE = 65536;
      // 1
      const p = this.p
      const q = this.q
      console.log(`p: ${p}, q: ${q}`)
      // 2
      const N = p * q
      if (N < MAX_CHAR_CODE) {
        alert(`${N} < ${MAX_CHAR_CODE}`)
        return
      }
      console.log(`${N} > ${MAX_CHAR_CODE} === ${N > MAX_CHAR_CODE}`)
      // 3
      this.fi = (p - 1) * (q - 1)
      console.log(`fi: ${this.fi}`)
      // 4
      // e is set in getD
      // 5
      const d = this.getD(this.fi)
      if (!d) {
        alert("Error generating d and e")
      }
      console.log(`e: ${this.e}`)
      console.log(`d: ${d}`)
      // 6
      const cPub = {e: this.e, N: N}
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

    getD(fi) {
      let d = null

      for (let k = 1; k < 101; k++) {
        for (let e = 2; e < 102; e++) {
          d = (1 + k * fi) / e
          if (Number.isInteger(d)) {
            this.e = e
            return d
          }
        }
      }
      return d
    },
    onCopy: function () {
      this.success = "Copied!"
    },
  },
}
</script>

<style scoped>

</style>