// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import firebase from "firebase";'
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAXyx10dzqh83uG8sG8qxPn3apQfZfLCps",
    authDomain: "sahil-netflix-clone.firebaseapp.com",
    projectId: "sahil-netflix-clone",
    storageBucket: "sahil-netflix-clone.appspot.com",
    messagingSenderId: "975001453284",
    appId: "1:975001453284:web:90774d498b9fe12b12e2f1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebaseApp.auth();
  
  export {auth};
  export default db;
 
  
  