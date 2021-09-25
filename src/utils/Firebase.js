import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyC58r5a7TfMOdV5ic-kwb4aw6GmsKpFkXk",
    authDomain: "fesappprueba-ff76b.firebaseapp.com",
    projectId: "fesappprueba-ff76b",
    storageBucket: "fesappprueba-ff76b.appspot.com",
    messagingSenderId: "347484662002",
    appId: "1:347484662002:web:f2995f133a3b4dc1b6886b"
  };


//Sirve para conectarte a firebase 
export const firebaseapp = firebase.initializeApp(firebaseConfig)