<script setup lang="ts">
import { useRouter } from 'vue-router';
import { data } from '@/data/data'

const { id } = useRouter().currentRoute.value.params;

const content = data.filter(item => item.id === id)[0];
console.log('content', content);
</script>

<template>
    <div class="container">
        <div
            class="w-3/4 mt-24 max-w-5xl mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl text-center"
        >
            <h1 class="text-3xl font-bold mb-4">Test Title Here: {{ id }}</h1>
            <p class="text-gray-500 text-lg text-left leading-8 font-light">{{ content.content }}</p>
        </div>
    </div>
</template>
