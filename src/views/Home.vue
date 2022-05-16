<script setup lang="ts">
import bg from "@/assets/bg.png";
</script>

<template>
  <div
    class="bg-black overflow-hidden fullscreen"
    id="home"
    v-bind:style="{ 'background-image': `url(${bg})` }"
  >
    <div class="md:pl-12 sm:pl-0 mt-0 bg-black/80 fullscreen relative">
      <main
        class="px-10 sm:pt-12 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28 absolute top-40 md:left-10 sm:left-0"
      >
        <div class="sm:text-center lg:text-left">
          <h1 class="text-6xl font-extrabold md:text-8xl animate-fade-in-down">
            <span class="block text-blue-500">a.atienza &nbsp;</span>
            <span class="block text-red-500">3140</span>
          </h1>
          <p
            class="mt-4 text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-fade-in-right"
          >
            Web Development | Learning | Reading | Essays | More
          </p>
          <p
            class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-fade-in-up"
          >
            Former Seafarer turned into self-taught Software Developer!
            Currently working as a fulltime Fullstack Web Developer. I like
            writing/typing, reading and watching informational videos on my
            freetime.
          </p>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.fullscreen {
  min-height: calc(100vh - 68px);
}

#home {
  min-height: calc(100vh - 68px);
  background-repeat: no-repeat;
  background-position: right;
  background-attachment: fixed;
}
</style>
