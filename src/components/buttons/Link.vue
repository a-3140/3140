<script setup lang="ts">
interface Props {
  link: string;
}
const props = defineProps<Props>();
</script>

<template>
  <a :href="props.link" target="_blank">
    <button
      type="button"
      class="border-2 hover:border-green-400 border-gray-600 text-green-400 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center transition-colors ease-in-out duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4 mr-2 -ml-1"
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="link"
        role="img"
        viewBox="0 0 496 512"
      >
        <path
          fill="currentColor"
          d="M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32L64 96c-35.35 0-64 28.65-64 64V448c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96C416 334.3 401.7 320 384 320zM488 0H352c-12.94 0-24.62 7.797-29.56 19.75c-4.969 11.97-2.219 25.72 6.938 34.88L370.8 96L169.4 297.4c-12.5 12.5-12.5 32.75 0 45.25C175.6 348.9 183.8 352 192 352s16.38-3.125 22.62-9.375L416 141.3l41.38 41.38c9.156 9.141 22.88 11.84 34.88 6.938C504.2 184.6 512 172.9 512 160V24C512 10.74 501.3 0 488 0z"
        />
      </svg>
      Link
    </button>
  </a>
</template>

<style scoped></style>
