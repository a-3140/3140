<script setup lang="ts">
import bg from "@/assets/bg.png";
import { onMounted, ref } from "vue";
import LoadingScreen from "@/components/loaders/LoadingScreen.vue";

const show = ref(false);

onMounted(() => {
  setTimeout(() => {
    show.value = true;
  }, 2000);
});
</script>

<template>
  <div class="overflow-hidden">
    <div
      v-if="show"
      class=""
      id="home"
      v-bind:style="{ 'background-image': `url(${bg})` }"
    >
      <div class="md:pl-12 sm:pl-0 mt-0 relative h-screen w-screen bg-black/80">
        <main
          class="px-10 sm:pt-12 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28 absolute top-40 md:left-10 sm:left-0"
        >
          <div class="sm:text-left text-center">
            <h1
              class="text-6xl tracking-tighter md:text-4xl animate-fade-in-down animate-delay-900"
            >
              <span class="block font-mono text-green-400"
                >a.atienza &nbsp;</span
              >
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
    <div v-else>
      <LoadingScreen />
    </div>
  </div>
</template>

<style scoped>
.fullscreen {
  max-height: calc(100vh - 68px);
}

#home {
  min-height: calc(100vh - 68px);
  background-repeat: no-repeat;
  background-position: right;
  background-attachment: fixed;
}
</style>
