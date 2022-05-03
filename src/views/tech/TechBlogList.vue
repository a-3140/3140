<script setup lang="ts">
import { defineAsyncComponent, } from 'vue';
import LoadingArticle from '@/components/loaders/LoadingArticle.vue';

const ArticleList = defineAsyncComponent({
    // TODO: Add an errorComponent
    suspensible: false,
    loadingComponent: LoadingArticle,
    loader: () => import('../../components/articles/List.vue'),
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
</script>

<template>
    <div class="max-w-5xl mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
        <KeepAlive>
            <Suspense>
                <component :is="ArticleList" />
                <template #fallback>
                    <LoadingArticle />
                </template>
            </Suspense>

        </KeepAlive>
    </div>
</template>
