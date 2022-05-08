<script setup lang="ts">
import { ref } from "vue";
import { FadeLeft } from "@/common/animation";
import { PortfolioSummary } from "@/types/queries";
import { fetchPortfolioSummaries } from "@/services/queries/portfolios";
import Link from "@/components/buttons/Link.vue";
import Github from "@/components/buttons/Github.vue";

const portfolios = ref([] as PortfolioSummary[]);

await fetchPortfolioSummaries({ collection: "tech" }).then((data) => {
  portfolios.value = data;
});
</script>

<template>
  <TransitionGroup
    :css="false"
    @before-enter="FadeLeft.onBeforeEnter"
    @enter="FadeLeft.onEnter"
    name="list"
    tag="ul"
    appear
  >
    <li
      v-for="(item, index) in portfolios"
      :key="item.id"
      class="mb-10 ml-4"
      :data-index="index"
    >
      <div
        class="p-4 w-full rounded-lg border shadow-md sm:p-8 bg-gray-800 border-gray-700"
      >
        <h5 class="text-white mb-2 text-xl font-bold tracking-tight">
          Title Here
        </h5>
        <p class="mb-5 text-base sm:text-md text-gray-400">
          Short Description Here: Stay up to date and move work forward with
          Flowbite on iOS & Android. Download the app today.
        </p>
        <div class="items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <Link />
          <Github />
        </div>
      </div>
    </li>
  </TransitionGroup>
</template>

<style scoped></style>
