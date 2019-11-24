import Vue from "vue";
import firebase from "firebase";
import firebaseConfig from "../config/firebaseConfig.js";
import App from "./App.vue";
import router from "./router";
import "firebase/firestore";
import * as VueThreejs from "vue-threejs";
Vue.use(VueThreejs);

Vue.config.productionTip = false;

let app = '';

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});
