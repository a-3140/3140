<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import NotFound from "@/views/NotFound.vue";
import LoadingArticle from "@/components/loaders/LoadingArticle.vue";

const ExperienceList = defineAsyncComponent({
  suspensible: false,
  errorComponent: NotFound,
  loadingComponent: LoadingArticle,
  loader: () => import("@/collections/experience/Collections.vue"),
  onError: (error, retry, fail, attempts) => {
    if (attempts <= 3) {
      console.log("Error", error);
      retry();
    } else {
      console.log("Error", error);
      fail();
    }
  },
});

const props: CollectionProps = {
  name: "Experience",
  collection: "experience",
};
</script>

<template>
  <div
    class="max-w-5xl mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl"
  >
    <KeepAlive>
      <Suspense>
        <component :is="ExperienceList" :props="props" />
        <template #fallback>
          <LoadingArticle />
        </template>
      </Suspense>
    </KeepAlive>
  </div>
</template>
