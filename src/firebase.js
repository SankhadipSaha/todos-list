// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi18B8UsmWoxn20gkC__ZQb9hHdRvt9h4",
  authDomain: "task-manager-f5b5e.appspot.com",
  projectId: "task-manager-f5b5e",
  storageBucket: "task-manager-f5b5e.firebasestorage.appspot.com",
  messagingSenderId: "394479047790",
  appId: "1:394479047790:web:9612a5a7fa1c9c1ea6c27f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }