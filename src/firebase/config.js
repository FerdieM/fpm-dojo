import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAfjzHKU_AoHACuzJRSnVYGMRK1L2MaHEQ',
  authDomain: 'dojo-site-b0c15.firebaseapp.com',
  projectId: 'dojo-site-b0c15',
  storageBucket: 'dojo-site-b0c15.appspot.com',
  messagingSenderId: '966689023516',
  appId: '1:966689023516:web:a6d89cc632d61f7404e1d9',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectAuth, projectFirestore, projectStorage, timestamp };
