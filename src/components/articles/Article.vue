<script setup lang="ts">
import { Blog, fetchArticleById, fetchBlogSummaries } from '@/firebase';
import { useRouter } from 'vue-router';

// TODO: Add animate on load
const name = useRouter().currentRoute.value.name;
const { id } = useRouter().currentRoute.value.params;
const doc = await fetchArticleById(id as string)

</script>

<template>
</template>