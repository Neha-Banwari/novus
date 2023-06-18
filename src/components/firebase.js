import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUuwR2eazd8XlDsHSprX2McLeS9EInaOY",
  authDomain: "novuschat-d963b.firebaseapp.com",
  projectId: "novuschat-d963b",
  storageBucket: "novuschat-d963b.appspot.com",
  messagingSenderId: "30433425239",
  appId: "1:30433425239:web:661129bd11d2c1e0c9f012"
}


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};