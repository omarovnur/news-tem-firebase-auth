import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false;

let app = '';

firebase.initializeApp({
  apiKey: "AIzaSyB2o7MeRD4CLJUPmtI8oGBSVPBGueuh0eo",
  authDomain: "news-auth-79ee4.firebaseapp.com",
  projectId: "news-auth-79ee4",
  storageBucket: "news-auth-79ee4.appspot.com",
  messagingSenderId: "576456146746",
  appId: "1:576456146746:web:b37e251061944697c05a03",
  measurementId: "G-P7QP2C0PPY"
});
// Initialize Firebase

firebase.analytics();


firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});
