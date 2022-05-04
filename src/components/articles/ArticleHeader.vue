<script setup lang="ts">
interface Props {
    title?: string | string[];
    description?: string;
}

const props = defineProps<Props>();

</script>

<template>
    <header class="pt-16 mb-6 pb-2 sm:mb-10 sm:pb-6 border-b-2 border-neutral-200 text-gray-50">
        <h1 class="mb-4 text-3xl sm:text-4xl font-extrabold animate-fade-in-down">{{ props.title }}</h1>
        <p class="text-lg text-gray-300 animate-fade-in-down">{{ props.description }}</p>
    </header>
</template>

<style>
</style>