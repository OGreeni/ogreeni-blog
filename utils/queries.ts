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

const postsRef = collection(db, 'posts');
const usersRef = collection(db, 'users');

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

export const updatePostLikes = async ({
  title,
  increase,
}: {
  title: string;
  increase: boolean;
}) => {
  const q = query(postsRef, where('title', '==', title));
  const querySnapshot = await getDocs(q);

  // TODO: REFACTOR THIS
  let docId: any;
  querySnapshot.forEach((doc) => (docId = doc.id));

  const docRef = doc(db, 'posts', docId);
  const docSnap = await getDoc(docRef);
  if (increase) {
    await updateDoc(docRef, {
      likes: docSnap.data().likes + 1,
    });
  } else {
    await updateDoc(docRef, {
      likes: docSnap.data().likes - 1,
    });
  }
};

export const userLikeStatus = async ({
  email,
  title,
}: {
  email: string;
  title: string;
}) => {
  const q = query(usersRef, where('email', '==', email));
  const querySnapshot = await getDocs(q);

  // TODO: REFACTOR THIS
  let docId: any;
  querySnapshot.forEach((doc) => (docId = doc.id));

  const docRef = doc(db, 'users', docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.data()[title]?.liked) {
    return { id: docSnap.data().id, liked: true };
  } else {
    return { id: docSnap.data().id, liked: false };
  }
};

export const updateUserLikes = async ({
  id,
  title,
}: {
  id: string;
  title: string;
}) => {
  const docRef = doc(db, 'users', id);
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

  return 'PLACEHOLDER';
};

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

  return docSnap.data()[title] || null;
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

  if (docSnap.data()[title].liked) {
    await updateDoc(docRef, {
      [title]: { liked: false },
    });
  } else {
    await updateDoc(docRef, {
      [title]: { liked: true },
    });
  }
};
