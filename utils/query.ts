import {
  collection,
  query,
  where,
  getDoc,
  doc,
  getDocs,
} from 'firebase/firestore';
import { db } from '../firebase/firebase';

const postsRef = collection(db, 'posts');

export const queryPostData = async ({ title }: { title: string }) => {
  const q = query(postsRef, where('title', '==', title));
  const querySnapshot = await getDocs(q);

  // TODO: REFACTOR THIS
  let docId: any;
  querySnapshot.forEach((doc) => (docId = doc.id));

  const docRef = doc(db, 'posts', docId);
  const docSnap = await getDoc(docRef);

  return docSnap.data();
};
