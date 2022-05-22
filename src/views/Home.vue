<script setup lang="ts">
import bg from "@/assets/bg.png";
import { onBeforeMount, onMounted, ref } from "vue";
import { header } from "@/store/header";
import LoadingScreen from "@/components/loaders/LoadingScreen.vue";
import LandingPage from "@/components/LandingPage.vue";

const show = ref(false);

onBeforeMount(() => {
  header.hideHeader();
});

onMounted(() => {
  setTimeout(() => {
    show.value = true;
    header.showHeader();
  }, 3200);
});
</script>

<template>
  <div>
    <div
      v-if="show"
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
