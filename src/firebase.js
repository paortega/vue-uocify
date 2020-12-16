import firebase  from 'firebase';

// usad vuestros datos aquí:
var firebaseConfig = {
    apiKey: "AIzaSyD_OCb2-4brdhOBgyitmSf-RmXfAGWzLU8",
    authDomain: "uocify.firebaseapp.com",
    databaseURL: "https://uocify.firebaseio.com",
    projectId: "uocify",
    storageBucket: "uocify.appspot.com",
    messagingSenderId: "568400790083",
    appId: "1:568400790083:web:208f64934f44a779468af6"
};

const app = firebase .initializeApp(firebaseConfig);

export const db = app.database();