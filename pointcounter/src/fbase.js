import firebase from 'firebase/app';
// import 'firebase/auth';
import 'firebase/firestore';
// import 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGEIN_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};
firebase.initializeApp(firebaseConfig);

const firedb  = firebase.firestore();
console.log(firedb)
console.log(firebase)

export const firebaseInstance = firebase;
// export const authService = firebase.auth();
export const dbService =firedb;
// export const storageService = firebase.storage();

