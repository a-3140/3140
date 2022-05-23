<script setup lang="ts">
import { onMounted } from "vue";
import { header, isHeaderVisible, isLogoLoaded } from "@/store/header";

onMounted(() => {
  if (!isHeaderVisible.value) header.showHeader();
  if (!isLogoLoaded.value) header.logoIsShown();
});
</script>

<template>
  <div
    class="max-w-5xl mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl min-h-screen"
  >
    <header class="pt-16 pb-9 sm:pb-16">
      <h1
        class="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold text-slate-200"
      >
        404 - Not Found
      </h1>
    </header>
  </div>
</template>
