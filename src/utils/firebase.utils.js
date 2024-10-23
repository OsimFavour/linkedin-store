
import { initializeApp } from "firebase/app";

import {
    getFirestore,
    doc,
    collection,
    writeBatch,
    query,
    getDocs,
  } from 'firebase/firestore';
  

const firebaseConfig = {
  apiKey: "AIzaSyBH4nGZNe4gwz8UvQqHURHBdT4ElUNrNn8",
  authDomain: "linkedin-store-b196e.firebaseapp.com",
  projectId: "linkedin-store-b196e",
  storageBucket: "linkedin-store-b196e.appspot.com",
  messagingSenderId: "27478993285",
  appId: "1:27478993285:web:4c5736e0b1eba9f9a97cec"
};


const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  console.log(q);
  

  const querySnapshot = await getDocs(q);
  console.log('Query Snapshot', querySnapshot);
  
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};