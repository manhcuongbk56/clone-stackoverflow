import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/database'

if (!firebase.apps.length){
  const firebaseConfig = {
    apiKey: "AIzaSyC5VpqERj9w9WJ77fc67Hud2_cZc6eR19w",
    authDomain: "clone-stack-overflow.firebaseapp.com",
    databaseURL: "https://clone-stack-overflow.firebaseio.com",
    projectId: "clone-stack-overflow",
    storageBucket: "clone-stack-overflow.appspot.com",
    messagingSenderId: "1076204295828",
    appId: "1:1076204295828:web:1fa5b2eeeb139887"
  };
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const DB = firebase.database();
export const StoreDB = firebase.firestore();
export default firebase
