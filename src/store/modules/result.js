export default {
    namespaced: true,
    state: {
        cryptedText: '',
        decryptedText: '',
    },
    getters: {
        getCryptedTExt: (state) => state.cryptedText,
        getDecryptedTExt: (state) => state.decryptedText,
    },
    actions: {},
    mutations: {
        mutateCryptedText(state, payload) {
            state.cryptedText = payload
        },
        mutateDecryptedText(state, payload) {
            state.decryptedText = payload
        },
    }
}