import {StoreOptions,createStore} from "vuex";
import {whoami} from "../api/login";

const store = createStore({
    state:{
        user:null
    },
    mutations:{
        login(){},
        whoami(state,payload) {
            state.user = payload;
        }
    },
    actions:{
        async whoami(store) {
          const user =  await whoami();
          store.commit("whoami",user);
        }
    }
})


export default store;