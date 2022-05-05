<script setup lang="ts">
import gsap from 'gsap';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { DocumentData } from 'firebase/firestore';
import BreadCrumb from '@/components/articles/Breadcrumb.vue'
import { Blog, fetchArticleById, getImageSrc } from '@/firebase';

const name = useRouter().currentRoute.value.name;
const { id } = useRouter().currentRoute.value.params;
const doc = ref({} as DocumentData | Blog | undefined);

await fetchArticleById(id as string).then(data => {
    doc.value = data
})

const articleImgTag = "articleImg"
getImageSrc(doc.value?.img, articleImgTag)

function onEnter(el: any, done: gsap.Callback) {
    gsap.to(el, {
        opacity: 1,
        y: '0px',
        onComplete: done,
    })
}
function onBeforeEnter(el: any) {
    gsap.from(el, {
        opacity: 0,
        y: '2em',
    })
}
</script>

<template>
    <Transition :css="false" @before-enter="onBeforeEnter" @enter="onEnter" tag="div" appear>
        <div>
            <bread-crumb :current-page="doc?.title" :sub-page="name" />

            <div class="container">
                <div class="mt-8 max-w-5xl mx-auto pb-28 xl:max-w-6xl text-center">
                    <div class="text-xl font-normal mb-1 text-blue-500">{{ doc?.category }}</div>
                    <h1 class="text-3xl text-gray-50 font-bold mb-4">{{ doc?.title }}</h1>
                    <div v-html="doc?.content" class="text-gray-200 text-left leading-8 font-light" />
                    <img :id="articleImgTag" class="w-full hidden" />
                </div>
            </div>

        </div>
    </Transition>
</template>

<style>
</style>