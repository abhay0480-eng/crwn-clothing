import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCiFJWh49pYnB3zaH4N9keo_DjUxfnLsRA",
    authDomain: "cwrn-db-ecfc5.firebaseapp.com",
    projectId: "cwrn-db-ecfc5",
    storageBucket: "cwrn-db-ecfc5.appspot.com",
    messagingSenderId: "735831115459",
    appId: "1:735831115459:web:8eb1c25b18cccb62968476",
    measurementId: "G-R977QCB77Z"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

  