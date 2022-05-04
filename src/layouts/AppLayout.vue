<script lang="ts">
import { useRoute } from 'vue-router'
import LayoutDefault from '@/layouts/types/Default.vue'
import { defineComponent, markRaw, shallowRef, watch } from 'vue'

export default defineComponent({
    name: 'AppLayout',
    setup() {
        const route = useRoute()
        const layout = shallowRef(LayoutDefault)

        watch(
            () => route.meta?.layout,
            async metaLayout => {
                try {
                    const layoutDir = './types'
                    const component = await import( /* @vite-ignore */ `${layoutDir}/${metaLayout || `./Default`}.vue`)
                    layout.value = markRaw(component?.default || LayoutDefault)
                } catch (e) {
                    layout.value = markRaw(LayoutDefault)
                }
            },
            { immediate: true }
        )
        return { layout }
    }
})
</script>

<template>
    <component :is="layout">
        <slot />
    </component>
</template>

