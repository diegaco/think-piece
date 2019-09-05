import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  // get a ref from db from user
  const userRef = firestore.doc(`users/${user.uid}`);

  // go and fetch data from that location
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.error('Error creating User', error.message);
    }
  }

  return getUserDocument(user.uid);
};

export const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    // const doc = await firestore.collection('users').doc(uid);
    const doc = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...doc.data()
    }
  } catch (error) {
    console.error(error.message);
  }
}

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export default firebase;