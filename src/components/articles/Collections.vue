<script setup lang="ts">
import { ref } from "vue";
import { FadeLeft } from "@/common/animation";
import { ArticleSummary } from "@/types/queries";
import { fetchArticleSummaries } from "@/services/queries/articles";

const articles = ref([] as ArticleSummary[]);

await fetchArticleSummaries({ collection: "tech" }).then((data) => {
  articles.value = data;
});
</script>

<template>
  <TransitionGroup
    :css="false"
    @before-enter="FadeLeft.onBeforeEnter"
    @enter="FadeLeft.onEnter"
    name="list"
    tag="ul"
    class="relative border-l border-gray-200"
    appear
  >
    <li
      v-for="(item, index) in articles"
      :key="item.id"
      class="mb-10 ml-4"
      :data-index="index"
    >
      <div
        class="absolute w-3.5 h-3.5 rounded-full -left-6 border border-white dark:border-gray-900"
      ></div>
      <time
        class="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-500"
        >Edited: {{ item.lastEdited }}</time
      >
      <h3 class="text-lg font-semibold text-gray-400 dark:text-white">
        {{ item.title }}
      </h3>
      <p class="mb-4 text-base font-normal text-gray-200 dark:text-gray-400">
        {{ item.description }}
      </p>
      <router-link
        :to="{ name: 'Tech', params: { id: item.id } }"
        class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Read
        <svg
          class="ml-2 w-3 h-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </router-link>
    </li>
  </TransitionGroup>
</template>

<style scoped></style>
