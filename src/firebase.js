import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD1Igy6LVjWGMzBZu6y9h5S37g89K22xLc",
  authDomain: "react-blog-firebase-3817b.firebaseapp.com",
  databaseURL: "https://react-blog-firebase-3817b.firebaseio.com",
  projectId: "react-blog-firebase-3817b",
  storageBucket: "",
  messagingSenderId: "565414903338",
  appId: "1:565414903338:web:3fa57bb2ced5946b"
};
// Initialize Firebase
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.firebase = firebase; // only to play in browser

export const firestore = firebase.firestore();

export default firebase;