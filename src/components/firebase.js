
import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBUuwR2eazd8XlDsHSprX2McLeS9EInaOY",
  authDomain: "novuschat-d963b.firebaseapp.com",
  projectId: "novuschat-d963b",
  storageBucket: "novuschat-d963b.appspot.com",
  messagingSenderId: "30433425239",
  appId: "1:30433425239:web:661129bd11d2c1e0c9f012"
}


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}


export const auth = firebase.auth()