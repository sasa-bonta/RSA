export default {
    namespaced: true,
    state: {
        str1: '',
        str2: '',
    },
    getters: {
        getStr1: (state) => state.str1,
        getStr2: (state) => state.str2,
    },
    actions: {},
    mutations: {
        mutateStr1(state, payload) {
            state.str1 = payload
        },
        mutateStr2(state, payload) {
            state.str2 = payload
        },
    }
}