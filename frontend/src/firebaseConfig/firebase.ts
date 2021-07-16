/* eslint-disable max-len */
import firebase from 'firebase/app';
import 'firebase/analytics';

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD7_Solg2qOYwSDuDvFtbXQqTLBXQ_VneI',
  authDomain: 'nest-react-demo.firebaseapp.com',
  projectId: 'nest-react-demo',
  storageBucket: 'nest-react-demo.appspot.com',
  messagingSenderId: '275013256855',
  appId: '1:275013256855:web:f0d267c9700388f3c64bd2',
  measurementId: 'G-9EZ0D96F4H',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  promt: 'select_account',
});

const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.addScope('user_birthday');
firebase.auth().languageCode = 'it';
facebookProvider.setCustomParameters({
  display: 'popup',
});

export const signInWithGoogle = (): Promise<firebase.auth.UserCredential> => firebase.auth().signInWithPopup(googleProvider);
export const signInWithFacebook = (): Promise<firebase.auth.UserCredential> => firebase.auth().signInWithPopup(facebookProvider);

export default firebase;
