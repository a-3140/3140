import { collection, doc, getDocs, QueryDocumentSnapshot } from 'firebase/firestore';

import { db } from '@/firebase';
import { FetchCollectionParams, PortfolioSummary } from '@/types/queries';

export const fetchPortfolioSummaries = async (
  params: FetchCollectionParams
): Promise<PortfolioSummary[]> => {
  const querySnapshot = await getDocs(collection(db, params.collection));

  const data = querySnapshot.docs.map((doc: QueryDocumentSnapshot) =>
    matchDocIdToData(doc)
  );

  return data;
};

const matchDocIdToData = (doc: QueryDocumentSnapshot): PortfolioSummary => {
  const { title, description, github, link } = doc.data();
  return {
    id: doc.id,
    title: title,
    description: description,
    github: github,
    link: link,
  };
};
