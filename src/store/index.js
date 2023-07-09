import {createStore} from "vuex";

export default createStore({
    state:() =>({
        isAuth:false,
        currentUser:{},
    }),
    mutations:{
        setIsAuth(state,auth) {
            state.isAuth = auth;
        },
        setcurrentUser(state,user){
            state.currentUser = user;
        },
        setcurrentUserId(state,id){
            state.currentUserId = id;
        },
    },
    getters:{
        getAuth(state){
            return state.isAuth;
        },
        getUsername(state){
            return state.currentUser.username;
        },
        getUserId(state){
            return state.currentUserId;
        },
        getUser(state){
            return state.currentUser
        }
    }

})