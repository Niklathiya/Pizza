import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    aapiKey: "AIzaSyAFCUH3Mgorl4xCVCRI-T_5PgHrI-0XFt0",
    authDomain: "react-js-26586.firebaseapp.com",
    projectId: "react-js-26586",
    storageBucket: "react-js-26586.appspot.com",
    messagingSenderId: "721337784220",
    appId: "1:721337784220:web:7b67daa936a21453539a59",
    measurementId: "G-L8M8X66WZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const database = getDatabase(app);
export const fireStoreDb = getFirestore(app);

