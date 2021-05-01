import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
//below is for Notes-App
// const firebaseConfig = {
//   apiKey: "AIzaSyChUa5sTSK0CBdHbSbt4ZpDEoCjsAKYo04",
//   authDomain: "notes-app-ff6cb.firebaseapp.com",
//   projectId: "notes-app-ff6cb",
//   storageBucket: "notes-app-ff6cb.appspot.com",
//   messagingSenderId: "991039217451",
//   appId: "1:991039217451:web:da9f9ce712587a26446f6e"
// }
//below is for 
//notes-app-83d1f

const firebaseConfig = {
  apiKey: "AIzaSyCzEho67_-qx6073TnV8bjR2alvt_hcvh4",
  authDomain: "notes-app-83d1f.firebaseapp.com",
  projectId: "notes-app-83d1f",
  storageBucket: "notes-app-83d1f.appspot.com",
  messagingSenderId: "485802287726",
  appId: "1:485802287726:web:abb0720a4e7ecc47183c7f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore()
let auth = firebase.auth()

export default db