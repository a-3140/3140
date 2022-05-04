<script setup lang="ts">
import LayoutDefault from '@/layouts/types/Default.vue'
</script>

<template>
    <component :is="$route.meta.layout || LayoutDefault">
        <slot />
    </component>
</template>

