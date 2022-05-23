<script setup lang="ts">
import { useRoute } from "vue-router";
import BaseLayout from "@/layouts/base/BaseLayout.vue";
import ContentHeader from "@/components/articles/ContentHeader.vue";
import { onMounted, ref, watch } from "vue";
import { header, isHeaderVisible, isLogoLoaded } from "@/store/header";

const route = useRoute();

onMounted(() => {
  if (!isHeaderVisible.value) header.showHeader();
  if (!isLogoLoaded.value) header.logoIsShown();
});

const title = ref("");
const description = ref("");

title.value = route.meta.title;
description.value = route.meta.description;

watch(
  () => route.meta,
  async () => {
    title.value = route.meta.title;
    description.value = route.meta.description;
  }
);
</script>

<template>
  <base-layout>
    <div
      class="max-w-5xl mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl page-collection"
    >
      <content-header :title="title" :description="description" />
      <slot></slot>
    </div>
  </base-layout>
</template>

<style>
.page-collection {
  min-height: calc(100vh - 68px);
}
</style>
