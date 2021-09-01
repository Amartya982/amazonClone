import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDMcxQu0zDJpeCvA5xBR8CYKX5Sh-mjsmA",
    authDomain: "clone-5e08b.firebaseapp.com",
    projectId: "clone-5e08b",
    storageBucket: "clone-5e08b.appspot.com",
    messagingSenderId: "127902225135",
    appId: "1:127902225135:web:17cb9018e4f157b6ae411a",
    measurementId: "G-GW422SXW5E"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();

  export {db,auth};