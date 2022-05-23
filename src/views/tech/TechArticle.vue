<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import NotFound from "@/views/NotFound.vue";
import Spinner from "@/components/loaders/Spinner.vue";

const Article = defineAsyncComponent({
  suspensible: false,
  errorComponent: NotFound,
  loadingComponent: Spinner,
  loader: () => import("@/components/articles/Content.vue"),
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
  <div class="bg-black/50">
    <KeepAlive>
      <Suspense>
        <component :is="Article" :props="props"> </component>
        <template #fallback>
          <spinner />
        </template>
      </Suspense>
    </KeepAlive>
  </div>
</template>
