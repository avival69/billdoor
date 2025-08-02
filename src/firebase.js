
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For security, it's best practice to store these in environment variables
const firebaseConfig = {
  apiKey: "AIzaSyB6t5HJQTtzVWLZJkY1GB6IrilsW0AMgUE", // Use environment variables
  authDomain: "billdoor-dc0b9.firebaseapp.com",
  projectId: "billdoor-dc0b9",
  storageBucket: "billdoor-dc0b9.appspot.com", // Corrected storage bucket URL
  messagingSenderId: "125935632425",
  appId: "1:125935632425:web:caf95ca1ed16fb1ca3dc38",
  measurementId: "G-GF2F5KBQJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the auth service
export const auth = getAuth(app);
