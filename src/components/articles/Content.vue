<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { FadeUp } from "@/common/animation";
import { BaseArticle } from "@/types/queries";
import { DocumentData } from "firebase/firestore";
import { fetchImgSrc } from "@/services/files/images";
import Breadcrumb from "@/components/articles/Breadcrumb.vue";
import { fetchArticleById } from "@/services/queries/articles";

const name = useRouter().currentRoute.value.name;
const { id } = useRouter().currentRoute.value.params;
const doc = ref({} as DocumentData | BaseArticle | undefined);

await fetchArticleById({ id: id as string, collection: "tech" }).then(
  (data) => {
    doc.value = data;
  }
);

const elementId = "articleImg";
const fileName = doc.value?.img;

await fetchImgSrc({ fileName: fileName, elementId: elementId });
</script>

<template>
  <Transition
    :css="false"
    @before-enter="FadeUp.onBeforeEnter"
    @enter="FadeUp.onEnter"
    tag="div"
    appear
  >
    <div
      class="max-w-5xl mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl"
    >
      <breadcrumb :current-page="doc?.title" :sub-page="name" />

      <div class="container">
        <div class="mt-8 max-w-5xl mx-auto pb-28 xl:max-w-6xl text-center">
          <div class="text-xl font-normal mb-1 text-blue-500">
            {{ doc?.category }}
          </div>
          <h1 class="text-3xl text-gray-50 font-bold mb-4">{{ doc?.title }}</h1>
          <div
            v-html="doc?.content"
            class="text-gray-200 text-left leading-8 font-light"
          />
          <img :id="elementId" class="w-full hidden" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style></style>
