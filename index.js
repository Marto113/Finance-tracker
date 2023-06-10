import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAICeQVaxLndDQ2Bufzq-Ah2nO-RGcpFJo",
    authDomain: "fbdb-7e2f3.firebaseapp.com",
    projectId: "fbdb-7e2f3",
    storageBucket: "fbdb-7e2f3.appspot.com",
    messagingSenderId: "335437924909",
    appId: "1:335437924909:web:834e7c47911c663c3946a4",
    measurementId: "G-GJ6ZC8RL7J"
});

const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, user => {
    if(user != null){
        console.log('logged');
    } else {
        console.log('no user');
    }
});
