import { getDownloadURL, ref } from 'firebase/storage';

import { storage } from '@/firebase';
import { ImageSrcParams } from '@/types/files';

export const fetchImgSrc = async (params: ImageSrcParams): Promise<void> => {
  const pathReference = ref(storage, params.fileName);

  getDownloadURL(pathReference)
    .then((url) => {
      const img = document.getElementById(params.elementId);
      img?.classList.toggle("hidden");
      img?.setAttribute("src", url);
    })
    .catch((error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/object-not-found":
          break;
        case "storage/unknown":
          break;
      }
    });
};
