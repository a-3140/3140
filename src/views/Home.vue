<script setup lang="ts">
import bg from "@/assets/bg.png";
import { onBeforeMount, onMounted, ref } from "vue";
import { header, isHeaderVisible, isLogoLoaded } from "@/store/header";
import LoadingScreen from "@/components/loaders/LoadingScreen.vue";
import LandingPage from "@/components/LandingPage.vue";
import { hasLoadedOnce } from "@/store/loaders";

onBeforeMount(() => {
  header.hideHeader();
});

onMounted(() => {
  header.keepHeader(hasLoadedOnce.value);

  if (!hasLoadedOnce.value)
    setTimeout(() => {
      header.showHeader();
      hasLoadedOnce.value = true;
    }, 3200);
});
</script>

<template>
  <div>
    <div
      v-if="hasLoadedOnce"
      class="h-100"
      id="home"
      v-bind:style="{ 'background-image': `url(${bg})` }"
    >
      <div class="bg-black/80">
        <LandingPage />
      </div>
    </div>
    <div v-else>
      <LoadingScreen />
    </div>
  </div>
</template>

<style scoped>
#home {
  background-repeat: no-repeat;
  background-position: right;
  background-attachment: fixed;
}
</style>
