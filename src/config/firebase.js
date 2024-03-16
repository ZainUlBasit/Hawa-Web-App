import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB2WkouIqpdMqeHJYomw-hQctrJ0i_Mfxw",
  authDomain: "hawa-oversease.firebaseapp.com",
  projectId: "hawa-oversease",
  storageBucket: "hawa-oversease.appspot.com",
  messagingSenderId: "1059513664929",
  appId: "1:1059513664929:web:9124e688c92e20126e77e0",
};

firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export default firebase;
