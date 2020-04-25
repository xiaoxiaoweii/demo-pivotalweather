export default {
    namespaced:true,
    state:{
        simple:false
    },
    mutations:{
        setSimple(state, val){
            state.simple = val
        }
    }
}