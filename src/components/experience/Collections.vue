<script setup lang="ts">
import { ref } from "vue";
import { FadeLeft } from "@/common/animation";
import { ArticleSummary, ExperienceSummary } from "@/types/queries";
import { fetchArticleSummaries } from "@/services/queries/articles";

const articles = ref([] as ExperienceSummary[]);
interface Props {
  props: CollectionProps;
}
const { props } = defineProps<Props>();

await fetchArticleSummaries({ collection: props.collection }).then((data) => {
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
        v-if="item.date"
        class="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-500"
        >{{ item.date }}</time
      >

      <h3 class="text-lg font-semibold text-gray-400 dark:text-white">
        {{ item.title }}
      </h3>
      <p class="mb-4 text-base font-normal text-gray-200 dark:text-gray-400">
        {{ item.description }}
      </p>
    </li>
  </TransitionGroup>
</template>

<style scoped></style>
