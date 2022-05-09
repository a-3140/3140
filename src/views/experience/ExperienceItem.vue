<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import NotFound from "@/views/NotFound.vue";
import Spinner from "@/components/loaders/Spinner.vue";
import { FirebaseCollection } from "@/types/common";

const Experience = defineAsyncComponent({
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

const collection = FirebaseCollection.Experience;
</script>

<template>
  <div class="bg-black/50">
    <KeepAlive>
      <Suspense>
        <component :is="Experience" :collection="collection"> </component>
        <template #fallback>
          <spinner />
        </template>
      </Suspense>
    </KeepAlive>
  </div>
</template>
