// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "@firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBiwVn2Q_rkQ5Vk82L91ZVqj9LXFOy9fOM",
	authDomain: "portfolio-e5e20.firebaseapp.com",
	projectId: "portfolio-e5e20",
	storageBucket: "portfolio-e5e20.appspot.com",
	messagingSenderId: "657691647856",
	appId: "1:657691647856:web:8678ea5a135ae57346b9b5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
