<script lang="ts">
import List from '@/components/articles/List.vue';

export default {
    components: { List },
}

</script>

<template>
    <div class="max-w-5xl mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl bg-white/80">
        <ol class="relative border-l border-gray-200 dark:border-gray-700 animate-fade-in-up">
            <suspense>
                <List />
            </suspense>
        </ol>
    </div>
</template>
