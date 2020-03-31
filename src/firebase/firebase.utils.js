import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDRPS6DdKGHaj2-ZuknKCfJbZANWK4co30",
    authDomain: "crowndb-d9f8a.firebaseapp.com",
    databaseURL: "https://crowndb-d9f8a.firebaseio.com",
    projectId: "crowndb-d9f8a",
    storageBucket: "crowndb-d9f8a.appspot.com",
    messagingSenderId: "295903362406",
    appId: "1:295903362406:web:73188f3749295374659ca7"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
    prompt:'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;