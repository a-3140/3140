<script lang="ts">
import { defineComponent, toRefs } from 'vue'

export default defineComponent({
    props: {
        blogId: String,
    },
    setup(props) {
        const { blogId } = toRefs(props);
        console.log('id', blogId);
    }
})
</script>

<template>
    <div class="container">
        <div
            class="w-3/4 mt-24 max-w-5xl mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl text-center"
        >
            <h1 class="text-3xl font-bold mb-4">Test Title Here</h1>
            <p
                class="text-gray-500 text-lg text-left leading-8 font-light"
            >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
    </div>
</template>
