<script setup lang="ts">
import { useRoute } from "vue-router";
import BaseLayout from "@/layouts/base/BaseLayout.vue";
import ContentHeader from "@/components/articles/ContentHeader.vue";
import { onMounted, ref, watch } from "vue";
import { header } from "@/store/header";

const route = useRoute();

onMounted(() => {
  header.keepHeader();
});

const title = ref("");
const description = ref("");

title.value = route.meta.title || "";
description.value = route.meta.description || "";

watch(
  () => route.meta,
  async () => {
    title.value = route.meta.title || "";
    description.value = route.meta.description || "";
  }
);
</script>

<template>
  <base-layout>
    <div
      class="max-w-5xl mx-auto sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl page-collection bg-black/50 min-h-full"
    >
      <content-header :title="title" :description="description" />
      <slot></slot>
    </div>
  </base-layout>
</template>

<style></style>
