<script setup lang="ts">
import Github from "./buttons/Github.vue";
</script>

<template>
  <div class="container fullscreen mx-auto">
    <main
      class="h-5/6 flex flex-col justify-center px-9 text-center items-center sm:items-start"
    >
      <div class="tracking-tighter text-5xl max-w-2xl font-mono text-green-400">
        a.atienza
        <span class="text-green-800 block sm:inline-block"> web developer</span>
      </div>
      <div
        class="mt-6 text-gray-500 md:text-left tracking-wider max-w-xl text-md"
      >
        Software developer based from the Philippines. Expertise on fullstack
        web-development using different stacks with internal and client-facing
        experience. Currently working in Trevipay which is based in Australia.
      </div>
      <Github class="mt-8" link="https://github.com/a-3140" />
    </main>
  </div>
</template>

<style scoped>
.fullscreen {
  height: calc(100vh - 68px);
}
</style>
