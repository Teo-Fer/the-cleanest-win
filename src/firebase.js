import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBXmytwiJ-doyo6FFCnKrQSTDaNSXII1iU",
    authDomain: "the-cleanest-win.firebaseapp.com",
    projectId: "the-cleanest-win",
    storageBucket: "the-cleanest-win.firebasestorage.app",
    messagingSenderId: "1008426266472",
    appId: "1:1008426266472:web:8b99c91ce32a9311f3b0dd"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app);

// Exportar db para usarlo en otros componentes
export { db };
