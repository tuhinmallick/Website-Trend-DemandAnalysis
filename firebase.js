import firebase from "firebase";

export const initializeFirebase = () => {
    firebase.initializeApp({
        apiKey: "AIzaSyBR7HHhClLmk78_LxO2b7uOxAwh5ovUe1U",
        authDomain: "myntraweb-5dfa0.firebaseapp.com",
        databaseURL: "https://myntraweb-5dfa0.firebaseio.com",
        projectId: "myntraweb-5dfa0",
        storageBucket: "myntraweb-5dfa0.appspot.com",
        messagingSenderId: "986377651667",
        appId: "1:986377651667:web:f82063c7900af320e21b26",
        measurementId: "G-H14DFF3GKG"
    });
};

export const login = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password);
}

export const register = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password);
}

export const isLogin