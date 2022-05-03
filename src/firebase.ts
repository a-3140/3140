import { initializeApp } from 'firebase/app';
import { collection, doc, DocumentData, getDoc, getDocs, getFirestore } from 'firebase/firestore';

import { dateToString } from '@/helpers/date';

const firebaseConfig = {
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const queryBlogs = await getDocs(collection(db, "blogs"));
// TODO: CHECK FOR BETTER STRUCTURE

export const fetchBlogSummaries = async (): Promise<BlogSummary[]> => {
  let data: BlogSummary[] = [];

  const querySnapshot = await getDocs(collection(db, "blogs"));

  querySnapshot.forEach((doc) => {
    const { lastEdited, title, description } = doc.data();
    data.push({
      id: doc.id,
      lastEdited: dateToString(lastEdited.toDate()),
      title: title,
      description: description,
    });
  });

  return data;
};

export const fetchArticleById = async (
  id: string
): Promise<DocumentData | Blog | undefined> => {
  return getDoc(doc(db, "blogs", id)).then((snapshot) => {
    return snapshot.data();
  });
};

// * TYPES
// TODO: Move to its own file
export interface Blog {
  id: string;
  lastEdited: any;
  title: string;
  description: string;
  content: string;
}

export type BlogSummary = Pick<
  Blog,
  "id" | "lastEdited" | "title" | "description"
>;

export const getBlog = async (docId: string) => {
  return getDoc(doc(db, "blogs", docId)).then((snapshot) => {
    return snapshot.data();
  });
};
