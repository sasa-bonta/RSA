export default {
    namespaced: true,
    state: {
        textToCrypt: '',
        textToDecrypt: '',
    },
    getters: {
        getTextToCrypt: (state) => state.textToCrypt,
        getTextToDecrypt: (state) => state.textToDecrypt,
    },
    actions: {},
    mutations: {
        mutateTextToCrypt(state, payload) {
            state.textToCrypt = payload
        },
        mutateTextToDecrypt(state, payload) {
            state.textToDecrypt = payload
        },
    }
}