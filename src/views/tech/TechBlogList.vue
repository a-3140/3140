<script setup lang="ts">
import ArticleList from '@/components/articles/List.vue';
import Spinner from '@/components/loaders/Spinner.vue'
import { onErrorCaptured } from 'vue';

onErrorCaptured(err => {
    console.log('Error:', err)
    return true;
})

</script>

<template>
    <div class="max-w-5xl mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl bg-white/80 animate-fade-in-up">
        <ol class="relative border-l border-gray-200 dark:border-gray-700 animate-fade-in-up">
            <suspense>
                <template #default>
                    <ArticleList />
                </template>
                <template #fallback>
                    <Spinner />
                </template>
            </suspense>
        </ol>
    </div>
</template>
