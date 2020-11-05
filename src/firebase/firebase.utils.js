import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAgt9_BV3nZhUA3dHmup27fF2T6KTV9FwU',
  authDomain: 'cwrn-db-d9d17.firebaseapp.com',
  databaseURL: 'https://cwrn-db-d9d17.firebaseio.com',
  projectId: 'cwrn-db-d9d17',
  storageBucket: 'cwrn-db-d9d17.appspot.com',
  messagingSenderId: '413437737712',
  appId: '1:413437737712:web:3d56b3d01d463c4cb12035'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;