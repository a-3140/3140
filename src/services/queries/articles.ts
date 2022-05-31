import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  QueryDocumentSnapshot,
} from 'firebase/firestore';

import { dateToString } from '@/common/functions';
import { db } from '@/firebase';
import {
  ArticleSummary,
  BaseArticle,
  FetchByIdParams,
  FetchCollectionParams,
} from '@/types/queries';

export const fetchArticleSummaries = async (
  params: FetchCollectionParams
): Promise<ArticleSummary[]> => {
  const querySnapshot = await getDocs(collection(db, params.collection));

  const data = querySnapshot.docs.map((doc: QueryDocumentSnapshot) =>
    matchDocIdToData(doc)
  );

  return data;
};

export const fetchArticleById = async (
  params: FetchByIdParams
): Promise<DocumentData | BaseArticle | undefined> => {
  return await getDoc(doc(db, params.collection, params.id)).then(
    (snapshot) => {
      return snapshot.data();
    }
  );
};

const matchDocIdToData = (doc: QueryDocumentSnapshot) => {
  const { lastEdited, date, title, description } = doc.data();
  return {
    id: doc.id,
    date: date,
    title: title,
    description: description,
    lastEdited: lastEdited ? dateToString(lastEdited.toDate()) : null,
  };
};
