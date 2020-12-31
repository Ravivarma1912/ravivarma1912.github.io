import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD7E_rf_wf3kt-Dw5BZr_8diFNGDI8625U",
  authDomain: "portfolio-38340.firebaseapp.com",
  databaseURL: "https://portfolio-38340.firebaseio.com",
  projectId: "portfolio-38340",
  storageBucket: "portfolio-38340.appspot.com",
  messagingSenderId: "10067193039",
  appId: "1:10067193039:web:8da52989da6a4bf4a61bba",
  measurementId: "G-JQXPDFXMZR"
});

const db = firebaseApp.firestore()

export default db;