import {
  collection,
  query,
  where,
  getDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebase/firebase';

const usersRef = collection(db, 'users');

export const getUserLikeStatus = async ({
  email,
  title,
}: {
  email: string;
  title: string;
}) => {
  // TODO: REFACTOR
  const q = query(usersRef, where('email', '==', email));
  const querySnapshot = await getDocs(q);

  let docId: any;
  querySnapshot.forEach((doc) => (docId = doc.id));

  const docRef = doc(db, 'users', docId);
  const docSnap = await getDoc(docRef);

  return docSnap.data()[title] || false;
};

export const changeUserLikeStatus = async ({
  email,
  title,
}: {
  email: string;
  title: string;
}) => {
  // TODO: REFACTOR
  const q = query(usersRef, where('email', '==', email));
  const querySnapshot = await getDocs(q);

  let docId: any;
  querySnapshot.forEach((doc) => {
    docId = doc.id;
  });

  const docRef = doc(db, 'users', docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.data()[title]?.liked) {
    await updateDoc(docRef, {
      [title]: { liked: false },
    });
  } else {
    await updateDoc(docRef, {
      [title]: { liked: true },
    });
  }
};
