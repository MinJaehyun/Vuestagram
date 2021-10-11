import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            age: 40,
            name: 'min',
            likes: 0,
        }
    },
    mutations: {
        oneToZero(state){
            state.likes = 0
        },
        zeroToOne(state){
            state.likes = 1
        },
        // 좋아요업(state){
        //     state.likes++
        // },
        addAge(state){
            state.age++
        },
        nameChange(state) {
            state.name = 'park'
        }
    }
})

export default store