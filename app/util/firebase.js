import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA5o_q4H5NWgLKwcBCq6D2BAgRJZ3cd7Vc",
    authDomain: "tenedores-df6a6.firebaseapp.com",
    databaseURL: "https://tenedores-df6a6.firebaseio.com",
    projectId: "tenedores-df6a6",
    storageBucket: "tenedores-df6a6.appspot.com",
    messagingSenderId: "935318073444",
    appId: "1:935318073444:web:9e8f6fa1f9b11cf648af71"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

