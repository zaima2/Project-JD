import {StoreOptions,createStore} from "vuex";
import {login,whoami} from "../api/login";
import {sendSms} from "../api/sms"

const store = createStore({
    state:{
        user:null,
        timer:0,
        stamp:null as NodeJS.Timer | null
    },
    mutations:{
        login(state,payload){
            state.user = payload;
        },
        whoami(state,payload) {
            state.user = payload;
        },
        logout(state) {
            state.user = null;
            localStorage.removeItem("token")
        },

        timer(state,payload) {
            state.timer = payload
        }
   
    },
    actions:{
        async Login(store,payload) {
            const user = await login(payload);
            console.log(user);
            
            store.commit("login",user);
        },

        async Whoami(store) {
          const user =  await whoami() as any;

          if(user.code && user.code !== 0) {
            store.commit("whoami",user.data);
            return;
          }


          store.commit("whoami",user);
        },
        
        async SendSms(store,payload) {
            const sms = await sendSms(payload) as any;
            if(sms.code && sms.code !== 0) {
                return sms;
            }

            if(sms) {
               store.dispatch("startTimer",60);
            }
        },

        startTimer(store,payload) {
           clearInterval( store.state.stamp as NodeJS.Timer)
    
           store.commit("timer",payload);
    
            store.state.stamp = setInterval(() => {
                store.commit("timer",store.state.timer - 1);
                if(store.state.timer === 0) {
                    clearInterval(store.state.stamp as NodeJS.Timer);

                }
            }, 1000)
    
           }
    }
})


export default store;