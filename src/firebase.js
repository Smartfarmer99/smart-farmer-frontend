// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Import Authentication and Firestore services
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration (This is your correct config)
const firebaseConfig = {
  apiKey: "AIzaSyD9M507xGpSVXMo2PgqBLDOUkl8wx9oW90",
  authDomain: "smart-farmer-live.firebaseapp.com",
  projectId: "smart-farmer-live",
  storageBucket: "smart-farmer-live.firebasestorage.app",
  messagingSenderId: "108294220973",
  appId: "1:108294220973:web:827918348ca989a5986a24",
  measurementId: "G-3LK165JG7K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export Firebase Authentication and Firestore
// We will use these in other files (like Signup, Login components)
export const auth = getAuth(app);
export const db = getFirestore(app);