<script setup lang="ts">

import { useRoute } from 'vue-router';
import BaseLayout from '@/layouts/base/BaseLayout.vue';
import ArticleHeader from '@/components/articles/ArticleHeader.vue';

const route = useRoute()

const title = route.meta.title;
const description = route.meta.description;

</script>

<template>
    <base-layout>
        <div class="max-w-5xl mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl page-collection">
            <ArticleHeader :title="title" :description="description" />
            <slot></slot>
        </div>
    </base-layout>
</template>


<style>
.page-collection {
    min-height: calc(100vh - 68px);
}
</style>