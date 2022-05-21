<script setup lang="ts">
import { onBeforeMount, onMounted, ref, watchEffect } from "vue";

const val = ref(3.14);
const _arr = ref(
  new Array(500).fill({}).map(() => {
    return { x: 0, y: 0 };
  })
);

function test() {
  val.value = Math.random();
}

const running = setInterval(test, 350);
onBeforeMount(() => {
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

onMounted(() => {
  setTimeout(() => {
    clearInterval(running);
  }, 2000);
});
</script>

<template>
  <div
    class="grid grid-cols-8 sm:grid-cols-12 gap-0 bg-black/80 opacity-40 z-0 animate-fade-in-40 max-h-screen"
  >
    <div
      class="text-xl font-mono text-green-400 transition-opacity duration-500 ease-in-out"
      v-for="num in _arr"
      :style="{
        opacity: `${Math.random()}`,
      }"
    >
      {{ num.x }}, {{ num.y }}
    </div>
  </div>
</template>

<style scoped></style>
