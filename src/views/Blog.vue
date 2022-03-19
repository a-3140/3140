<script setup lang="ts">
import { useRouter } from 'vue-router';
import BreadCrumb from '@/components/blog/Breadcrumb.vue'
import NotFound from '@/views/NotFound.vue'
import { data } from '@/data/blog'

const { id } = useRouter().currentRoute.value.params;
const name = useRouter().currentRoute.value.name;

const content = data.filter(item => item.id === id)[0];
</script>

<template>
    <div class="mx-auto pt-4">
        <div
            class="max-w-5xl mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl text-center min-h-screen"
        >
            <bread-crumb :current-page="content.title" :sub-page="name" />

            <div v-if="content" class="container">
                <div class="mt-8 max-w-5xl mx-auto pb-28 xl:max-w-6xl text-center">
                    <h1 class="text-3xl font-bold mb-4">{{ content.title }}</h1>
                    <p
                        class="text-gray-500 text-lg text-left leading-8 font-light"
                    >{{ content.content }}</p>
                </div>
            </div>

            <not-found v-else />
        </div>
    </div>
</template>
