export default {
    namespaced: true,
    state: {
        cPub: {},
        cPriv: {},
    },
    getters: {
        getPublicKey: (state) => state.cPub,
        getPrivateKey: (state) => state.cPriv,
    },
    actions: {},
    mutations: {
        mutatePublicKey(state, payload) {
            state.cPub = payload
        },
        mutatePrivateKey(state, payload) {
            state.cPriv = payload
        },
    }
}