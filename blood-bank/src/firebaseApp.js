<<<<<<< HEAD
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBWyHSwrz341Fn7bf46mzqpZiGCnsiaXTY",
    authDomain: "project-9d28f.firebaseapp.com",
    databaseURL: "https://project-9d28f.firebaseio.com",
    projectId: "project-9d28f",
    storageBucket: "project-9d28f.appspot.com",
    messagingSenderId: "47290536999"
    // apiKey: "AIzaSyCAr4GPXpFPqHjjZncFiG9qGl13rE8r3B4",
    // authDomain: "project-9d28f.firebaseapp.com",
    // databaseURL: "https://project-9d28f.firebaseio.com",
    // projectId: "project-9d28f",
    // storageBucket: "project-9d28f.appspot.com",
    // messagingSenderId: "47290536999"
}

=======
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCAr4GPXpFPqHjjZncFiG9qGl13rE8r3B4",
    authDomain: "project-9d28f.firebaseapp.com",
    databaseURL: "https://project-9d28f.firebaseio.com",
    projectId: "project-9d28f",
    storageBucket: "project-9d28f.appspot.com",
    messagingSenderId: "47290536999"
}

>>>>>>> 30517cd8741ba6209f92cd5b3a3f6ad9ab3463c2
export const firebaseApp = firebase.initializeApp(config);