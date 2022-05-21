<script setup lang="ts">
import { onMounted, onUnmounted, ref, watchEffect } from "vue";

const val = ref(3.14);
const _arr = ref(
  new Array(500).fill({}).map(() => {
    return { x: 0, y: 0 };
  })
);

function test() {
  val.value = Math.random();
}

const running = setInterval(test, 550);
onMounted(() => {
  running;
});

const random = (val: number) => {
  return Math.round(Math.random() * val * 1000);
};

watchEffect(() => {
  _arr.value = _arr.value.map(() => ({
    x: random(val.value),
    y: random(val.value),
  }));
});

onUnmounted(() => {
  clearInterval(running);
});
</script>

<template>
  <div
    class="grid grid-cols-8 sm:grid-cols-12 gap-0 bg-black/80 opacity-40 z-0 animate-fade-in"
  >
    <div
      class="text-xl font-mono text-green-400 animated-text"
      v-for="num in _arr"
      :style="{
        opacity: `${Math.random()}`,
      }"
    >
      {{ num.x }}, {{ num.y }}
    </div>
  </div>
</template>

<!-- then animate all the numbers to converge into a place where my name will appear -->
<style scoped>
.animated-text {
  transition: opacity 500ms ease-in-out;
}
</style>
