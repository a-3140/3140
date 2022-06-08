<script setup lang="ts">
interface ContentHeader {
  title?: string | string[];
  description?: string;
}

const contentHeader = defineProps<ContentHeader>();
</script>

<template>
  <div class="pt-2 mb-2 pb-2 sm:mb-10 sm:pb-6 text-gray-50">
    <h1
      class="mb-2 text-center text-3xl sm:text-4xl font-semibold animate-fade-in-down font-mono lowercase"
    >
      {{ contentHeader.title }}
    </h1>
    <p
      class="mt-2 text-gray-500 md:text-left tracking-wider max-w-xl text-md animate-fade-in-right"
    >
      {{ contentHeader.description }}
    </p>
  </div>
</template>

<style></style>
