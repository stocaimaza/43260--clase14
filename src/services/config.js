import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDJOaW84u0vhqY-J1O3E-O0zNztIoInBuU",
  authDomain: "coderhouse-d25aa.firebaseapp.com",
  projectId: "coderhouse-d25aa",
  storageBucket: "coderhouse-d25aa.appspot.com",
  messagingSenderId: "996032839105",
  appId: "1:996032839105:web:35c9987c86c849ae7d0340"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);