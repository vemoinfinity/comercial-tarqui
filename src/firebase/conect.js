// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBam7KisDzzXUVd72rbHQUn6CgGVfIFiA",
  authDomain: "comercialtarqui-cf2e3.firebaseapp.com",
  projectId: "comercialtarqui-cf2e3",
  storageBucket: "comercialtarqui-cf2e3.appspot.com",
  messagingSenderId: "230632011450",
  appId: "1:230632011450:web:155aec9593f93ff8a37483",
  measurementId: "G-KE4JCSF3H7"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(appFirebase);
export const storage= getStorage(appFirebase);
export default appFirebase