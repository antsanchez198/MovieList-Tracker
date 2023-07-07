import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFZGIhxIO9fr93-oR1w5SPAl7M95tn0GU",
  authDomain: "streaming-app-8ccdf.firebaseapp.com",
  projectId: "streaming-app-8ccdf",
  storageBucket: "streaming-app-8ccdf.appspot.com",
  messagingSenderId: "661654450560",
  appId: "1:661654450560:web:08dd2408db6dfe1e3f9165",
  measurementId: "G-T1WJW7GXYQ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);