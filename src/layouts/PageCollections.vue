<script setup lang="ts">

import { useRoute } from 'vue-router';
import Default from '@/layouts/Default.vue'
import ArticleHeader from '@/components/articles/ArticleHeader.vue';

const route = useRoute()

const title = route.meta.title;
const description = route.meta.description;

</script>

<template>
    <Default>
        <div class="max-w-5xl mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl bg-white/80 page-collection">
            <ArticleHeader :title="title" :description="description" />
            <slot />
        </div>
    </Default>
</template>


<style>
.page-collection {
    min-height: calc(100vh - 68px);
}
</style>