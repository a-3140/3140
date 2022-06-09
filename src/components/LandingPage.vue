<script setup lang="ts">
import Github from "./buttons/Github.vue";
</script>

<template>
  <div class="container h-screen mx-auto">
    <main class="h-5/6 flex flex-col justify-center px-9 text-left items-start">
      <div
        class="tracking-tighter md:text-5xl text-4xl max-w-xl font-mono text-green-400 animate-fade-in-up"
      >
        <span>a.atienza </span>
        <span class="text-green-800 block sm:inline-block"> web developer</span>
      </div>
      <div
        class="mt-6 text-gray-500 tracking-wider max-w-xl text-sm md:text-md animate-fade-in-right text-left"
      >
        Software developer based from the Philippines. Expertise on fullstack
        web-development using different stacks with internal and client-facing
        experience. Currently working in Trevipay which is based in Australia.
      </div>
      <Github
        class="place-content-start mt-8 animate-fade-in"
        link="https://github.com/a-3140"
      />
    </main>
  </div>
</template>

<style scoped></style>
