<script setup lang="ts">
import Header from '@/components/layout/Header.vue';

</script>

<template>
    <div>
        <Header />
        <div class="container mx-auto mt-4">
            <slot />
        </div>
    </div>
</template>


<style>
#content {
    display: flex;
}
</style>