import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  Firestore,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDKn_bfUGY5GpPEfeDVpV7HI24enoGbGTw',
  authDomain: 'ogreeni-blog-b315e.firebaseapp.com',
  projectId: 'ogreeni-blog-b315e',
  storageBucket: 'ogreeni-blog-b315e.appspot.com',
  messagingSenderId: '104223695787',
  appId: '1:104223695787:web:996c390dad844fc1f368ee',
  measurementId: 'G-QG759LDHXY',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, 'users'), where('uid', '==', user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
  }
};

const logout = () => {
  signOut(auth);
};

const onAuthStateChange = (
  callback: ({
    loggedIn,
    email,
  }: {
    loggedIn: boolean;
    email: string | null;
  }) => void
) => {
  return auth.onAuthStateChanged((user) => {
    if (user) {
      callback({ loggedIn: true, email: user.email });
      console.log('Logged In');
    } else {
      callback({ loggedIn: false, email: null });
      console.log('Logged out');
    }
  });
};

export { auth, db, signInWithGoogle, logout, onAuthStateChange };
