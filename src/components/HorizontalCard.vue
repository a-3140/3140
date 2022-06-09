<script setup lang="ts">
import { ref } from "vue";
import Link from "@/components/buttons/Link.vue";
import { PortfolioSummary } from "@/types/queries";
import Github from "@/components/buttons/Github.vue";
import { fetchPortfolioSummaries } from "@/services/queries/portfolios";

interface Props {
  props: CollectionProps;
}
const { props } = defineProps<Props>();
const portfolios = ref([] as PortfolioSummary[]);

await fetchPortfolioSummaries({ collection: props.collection }).then((data) => {
  portfolios.value = data;
});
</script>

<template>
  <ul>
    <li
      v-for="(item, index) in portfolios"
      :key="item.title"
      class="mb-10 ml-4"
      :data-index="index"
    >
      <div
        class="p-4 w-full rounded-lg border shadow-md sm:p-8 bg-gray-800 border-gray-700"
      >
        <h5 class="text-white mb-2 text-xl font-bold tracking-tight">
          {{ item.title }}
        </h5>
        <p class="mb-5 text-base sm:text-md text-gray-400">
          {{ item.description }}
        </p>
        <div class="items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <Link :link="item?.link" v-if="item?.link" />
          <Github :link="item?.github" v-if="item?.github" />
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped></style>
