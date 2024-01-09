// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCggwfIUnAkhasafXYc1Ffmgq3z32d4W5w",
    authDomain: "shopping-fec37.firebaseapp.com",
    projectId: "shopping-fec37",
    storageBucket: "shopping-fec37.appspot.com",
    messagingSenderId: "284146995944",
    appId: "1:284146995944:web:f1a459a4b242405c53af5d",
    measurementId: "G-H8XV2RPBR2"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };