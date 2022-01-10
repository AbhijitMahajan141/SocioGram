//import { initializeApp } from "firebase/app";
import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyAQ5Gt2MRlr_aATFvnhq5jKgh2m49S9slg",
  authDomain: "sociogram-ad1e1.firebaseapp.com",
  projectId: "sociogram-ad1e1",
  storageBucket: "sociogram-ad1e1.appspot.com",
  messagingSenderId: "475054325318",
  appId: "1:475054325318:web:2c910d837147fb70ea1447",
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();

export { firebase, db };
