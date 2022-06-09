<script setup lang="ts">
import bg from "@/assets/bg.png";
import Header from "@/layouts/components/Header.vue";

const image: string = `url(${bg})`;
</script>

<template>
  <div
    class="bg-black overflow-hidden min-h-screen bg-fixed bg-no-repeat relative"
    v-bind:style="{ 'background-image': image }"
  >
    <Header />
    <div class="mx-auto min-h-screen bg-black/80">
      <slot></slot>
    </div>
  </div>
</template>

<style></style>
