import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyCdF4afwcbCwNcrzO5g3CuOi2s4ir2pLFo",
  authDomain: "saas-translation-app-7cb2b.firebaseapp.com",
  projectId: "saas-translation-app-7cb2b",
  storageBucket: "saas-translation-app-7cb2b.appspot.com",
  messagingSenderId: "885066362878",
  appId: "1:885066362878:web:eb27e0b5a056ae62435aaf",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { auth, db, functions };
