import {createStore} from  'vuex'

const mutations ={
    increment(state){
        state.counter++
    }
}

const state = {
    counter : 0
}

export default createStore({mutations : mutations, state : state, strict : true})
