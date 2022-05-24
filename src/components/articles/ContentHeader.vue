<script setup lang="ts">
interface ContentHeader {
  title?: string | string[];
  description?: string;
}

const contentHeader = defineProps<ContentHeader>();
</script>

<template>
  <div
    class="pt-16 mb-6 pb-2 sm:mb-10 sm:pb-6 border-b-2 border-neutral-200 text-gray-50"
  >
    <h1
      class="mb-4 text-3xl sm:text-4xl font-extrabold animate-fade-in-down font-mono text-green-400"
    >
      {{ contentHeader.title }}
    </h1>
    <p
      class="mt-6 text-gray-500 md:text-left tracking-wider max-w-xl text-md animate-fade-in-right"
    >
      {{ contentHeader.description }}
    </p>
  </div>
</template>

<style></style>
