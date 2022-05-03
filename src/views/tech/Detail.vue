<script setup lang="ts">
import { useRouter } from 'vue-router';
import NotFound from '@/views/NotFound.vue'
import flowchart from '@/assets/flowchart.svg'
import BreadCrumb from '@/components/articles/Breadcrumb.vue'
import { fetchArticleById } from '@/firebase';
import { defineAsyncComponent } from 'vue';
import Spinner from '../../components/loaders/Spinner.vue';


const Article = defineAsyncComponent({
    // TODO: Add an errorComponent
    suspensible: false,
    loadingComponent: Spinner,
    loader: () => import('../../components/articles/Article.vue'),
    onError: (error, retry, fail, attempts) => {
        if (attempts <= 3) {
            console.log('Error', error);
            retry();
        } else {
            console.log('Error', error);
            fail();
        }
    }
})

const name = useRouter().currentRoute.value.name;
const { id } = useRouter().currentRoute.value.params;
const doc = await fetchArticleById(id as string)

</script>

<template>
    <div class="mx-auto pt-4 bg-white/80">
        <div class="max-w-5xl mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl text-center min-h-screen">
            <bread-crumb :current-page="doc?.title" :sub-page="name" />

            <div v-if="doc" class="container">
                <div class="mt-8 max-w-5xl mx-auto pb-28 xl:max-w-6xl text-center">
                    <!-- <div class="text-xl font-normal mb-1 text-red-500">{{ moldedData.category }}</div> -->
                    <h1 class="text-3xl font-bold mb-4">{{ doc.title }}</h1>
                    <div v-html="doc.content" class="text-gray-500 text-left leading-8 font-light" />
                    <img :src="flowchart" class="w-full" />
                </div>
            </div>

            <not-found v-else />
        </div>
    </div>
</template>
