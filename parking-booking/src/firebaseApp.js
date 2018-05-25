import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyARQNZo7HdV_-YhL7hE0EZ5ZURMGY3NFKY",
    authDomain: "parkingbooking-56d04.firebaseapp.com",
    databaseURL: "https://parkingbooking-56d04.firebaseio.com",
    projectId: "parkingbooking-56d04",
    storageBucket: "",
    messagingSenderId: "1054999023617"
  };
export const firebaseApp = firebase.initializeApp(config)