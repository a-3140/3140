<script setup lang="ts">
import { header } from "@/store/header";
import NotFound from "@/views/NotFound.vue";
import { defineAsyncComponent, onMounted } from "vue";
import LoadingArticle from "@/components/loaders/LoadingArticle.vue";

onMounted(() => {
  !header.isHeaderVisible ? header.showHeader() : null;
});

const PortfolioList = defineAsyncComponent({
  suspensible: false,
  errorComponent: NotFound,
  loadingComponent: LoadingArticle,
  loader: () => import("@/components/HorizontalCard.vue"),
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
  name: "Portfolio",
  collection: "portfolio",
};
</script>

<template>
  <div class="max-w-5xl mx-auto pb-28 xl:max-w-6xl">
    <KeepAlive>
      <Suspense>
        <component :is="PortfolioList" :props="props" />
        <template #fallback>
          <LoadingArticle />
        </template>
      </Suspense>
    </KeepAlive>
  </div>
</template>
