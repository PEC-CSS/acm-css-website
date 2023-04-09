import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./config";

const app = initializeApp(firebaseConfig);
export const fireStorage = getStorage(app);
export const fireStore = getFirestore(app);