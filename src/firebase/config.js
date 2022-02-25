import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDO1nRmoAChryhyRcP8ehDXhq1Msd4ZvWY",
  authDomain: "project-manager-847a5.firebaseapp.com",
  projectId: "project-manager-847a5",
  storageBucket: "project-manager-847a5.appspot.com",
  messagingSenderId: "390968368391",
  appId: "1:390968368391:web:ded200b4fd05dbd52b39a2",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage }
