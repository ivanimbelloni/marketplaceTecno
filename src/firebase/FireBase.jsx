import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCDu_DgW7_6R6fQSVtwwc511nwnidJZ-Ac",
  authDomain: "marketplace-e6688.firebaseapp.com",
  projectId: "marketplace-e6688",
  storageBucket: "marketplace-e6688.appspot.com",
  messagingSenderId: "197552421423",
  appId: "1:197552421423:web:90893674a79e26691da4da",
  measurementId: "G-F7E3W642RZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)