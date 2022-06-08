<script setup lang="ts">
import { onMounted, ref } from "vue";
import { header } from "@/store/header";
import { ExperienceSummary } from "@/types/queries";
import { fetchArticleSummaries } from "@/services/queries/articles";

onMounted(() => {
  header.keepHeader();
});

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
    name="list"
    tag="ul"
    class="flex flex-col bg-black/50"
    appear
  >
    <li
      v-for="(item, index) in articles"
      :key="item.id"
      class="fullscreen"
      :data-index="index"
    >
      <div
        class="h-4/5 flex items-start flex-col sm:text-left"
        :class="index === 0 ? 'justify-center' : 'justify-start'"
      >
        <time
          v-if="item.date"
          class="mb-1 text-xl sm:text-lg py-1 font-normal sm:text-left leading-none text-gray-600 dark:text-gray-500 lowercase tracking-wide animate-fade-in-left"
          >{{ item.date }}</time
        >

        <div
          class="font-mono py-2 sm:py-3 text-3xl sm:text-4xl font-normal text-green-400 dark:text-white animate-fade-in-right lowercase"
        >
          {{ item.title }}
          -
          <span class="text-green-700 capitalize tracking-normal">
            {{ item.company }}
          </span>
        </div>
        <div
          class="mb-4 leading-8 py-2 text-md font-normal text-gray-400 tracking-wide max-w-2xl animate-fade-in-up"
          v-html="item?.description"
        />
      </div>
    </li>
  </TransitionGroup>
</template>

<style scoped>
.fullscreen {
  height: calc(100vh - 10em);
}
</style>
