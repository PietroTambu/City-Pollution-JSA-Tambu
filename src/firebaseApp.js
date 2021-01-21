import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_PROJECT_ID + '.firebaseapp.com',
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_PROJECT_ID + '.appspot.com',
  messagingSenderId: '926754790004',
  appId: '1:926754790004:web:4252677915fbbbb25d0f21',
  measurementId: 'G-MWEY74HHXX'
}

const FirebaseApp = firebase.initializeApp(firebaseConfig)

console.log('Firebase Project ID:', FirebaseApp.options)

export default {
  FirebaseApp: FirebaseApp
}

/* eslint-disable eol-last */