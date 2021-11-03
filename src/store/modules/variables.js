export default {
    namespaced: true,
    state: {
        p: '',
        q: '',
    },
    getters: {
        getP: (state) => state.p,
        getQ: (state) => state.q,
    },
    actions: {},
    mutations: {
        mutateP(state, payload) {
            state.p = payload
        },
        mutateQ(state, payload) {
            state.q = payload
        },
    }
}