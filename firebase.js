// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";;

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyDTjjE5afIv_IxY-ErpY0qcjDrkBk7pP78",
  authDomain: "home-automation-dashboar-f6cea.firebaseapp.com",
  projectId: "home-automation-dashboar-f6cea",
  storageBucket: "home-automation-dashboar-f6cea.appspot.com",
  messagingSenderId: "16101845075",
  appId: "1:16101845075:web:7db40fc88505cdeee13ea6"
};

// Initialize Firebase
firebase.initializeApp(config);
const database = firebase.database();
export { firebase, database as default };