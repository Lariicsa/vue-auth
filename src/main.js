import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

var firebase = require("firebase/app");

require("firebase/auth");
//require("firebase/database");
//require("firebase/firestore");
//require("firebase/messaging");
//require("firebase/functions");

require("./assets/main.scss");

var firebaseConfig = {
  apiKey: "AIzaSyB5qa-LQZ9j0spOAdietIJWFeZGWymIjv8",
  authDomain: "crud-udemy-92b9e.firebaseapp.com",
  databaseURL: "https://crud-udemy-92b9e.firebaseio.com",
  projectId: "crud-udemy-92b9e",
  storageBucket: "crud-udemy-92b9e.appspot.com",
  messagingSenderId: "520420046469",
  appId: "1:520420046469:web:03f4de33681a1dda"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

firebase.auth().onAuthStateChanged((user=>{
  console.log(user);
  if (user){
    store.dispatch('detectarUsuario', {email:user.email, uid: user.uid})
  }else{
    store.dispatch('detectarUsuario', null)
  }

  // se mete la instancia a Firebase, para que cargue igual que la info
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')

}))

