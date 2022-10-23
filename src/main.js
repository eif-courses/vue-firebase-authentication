import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVkEexrvZ0WAzCd8VYRqhdmLytx68bnEk",
    authDomain: "fleet-847d9.firebaseapp.com",
    projectId: "fleet-847d9",
    storageBucket: "fleet-847d9.appspot.com",
    messagingSenderId: "246276613383",
    appId: "1:246276613383:web:d1329a4cef01181fc511a2"
};

// Initialize Firebase
initializeApp(firebaseConfig);


createApp(App).use(router).mount('#app')
