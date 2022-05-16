import {
    collection, doc, getDocs, orderBy, query, QueryDocumentSnapshot
} from 'firebase/firestore';

import { db } from '@/firebase';
import { FetchCollectionParams, PortfolioSummary } from '@/types/queries';

export const fetchPortfolioSummaries = async (
  params: FetchCollectionParams
): Promise<PortfolioSummary[]> => {
  const ref = collection(db, params.collection);
  const q = query(ref, orderBy("order_id", "asc"));
  const querySnapshot = await getDocs(q);

  const data = querySnapshot.docs.map((doc: QueryDocumentSnapshot) => {
    const { title, description, github, link } = doc.data();
    return {
      link: link,
      title: title,
      github: github,
      description: description,
    };
  });

  return data;
};
