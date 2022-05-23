<script setup lang="ts">
import NotFound from "@/views/NotFound.vue";
import { defineAsyncComponent, onMounted } from "vue";
import LoadingArticle from "@/components/loaders/LoadingArticle.vue";

const ArticleList = defineAsyncComponent({
  suspensible: false,
  errorComponent: NotFound,
  loadingComponent: LoadingArticle,
  loader: () => import("@/components/articles/Collections.vue"),
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
  name: "Blog",
  collection: "tech",
};
</script>

<template>
  <div
    class="max-w-5xl mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl"
  >
    <KeepAlive>
      <Suspense>
        <component :is="ArticleList" :props="props" />
        <template #fallback>
          <LoadingArticle />
        </template>
      </Suspense>
    </KeepAlive>
  </div>
</template>
