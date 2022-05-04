<script setup lang="ts">
import NotFound from '@/views/NotFound.vue'
import { defineAsyncComponent } from 'vue';
import Spinner from '@/components/loaders/Spinner.vue';


const Article = defineAsyncComponent({
    suspensible: false,
    errorComponent: NotFound,
    loadingComponent: Spinner,
    loader: () => import('@/components/articles/Article.vue'),
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
                <component :is="Article">
                </component>

                <template #fallback>
                    <spinner />
                </template>

            </Suspense>
        </KeepAlive>
    </div>
</template>
