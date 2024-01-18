import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXnL5bkMP8aZR_witGIBw4xAKXjxYy6L0",
  authDomain: "hostkar-660c0.firebaseapp.com",
  databaseURL: "https://hostkar-660c0-default-rtdb.firebaseio.com",
  projectId: "hostkar-660c0",
  storageBucket: "hostkar-660c0.appspot.com",
  messagingSenderId: "210771009466",
  appId: "1:210771009466:web:8d5ebeecc9a9562c91c783",
  measurementId: "G-GXJVX72ND7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app