import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAxvLITd4RqqV6Z8aoijnXd4u7KH3N0DGY",
    authDomain: "calledapp.firebaseapp.com",
    projectId: "calledapp",
    storageBucket: "calledapp.appspot.com",
    messagingSenderId: "795139381354",
    appId: "1:795139381354:web:c293bbd85ae52bbaab1213",
    measurementId: "G-R4TLXMK37B"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);

  export {auth, db, storage}
