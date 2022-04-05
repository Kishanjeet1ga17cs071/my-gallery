import * as firebase from 'firebase/app'
import '@firebase/messaging';

var firebaseConfig = {
    apiKey: "AIzaSyCVZ7LiNg8F59qvipJdaGzKNcllqRY_gv8",
    authDomain: "my-gallery-33b1d.firebaseapp.com",
    projectId: "my-gallery-33b1d",
    storageBucket: "my-gallery-33b1d.appspot.com",
    messagingSenderId: "475159452284",
    appId: "1:475159452284:web:cc5fb168a8c7dda96847f9",
    measurementId: "G-4NG3BJ0PHJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;