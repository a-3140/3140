<script setup lang="ts">
import work from '@/assets/work.jpg'
</script>

<template>
    <div class="relative bg-white overflow-hidden fullscreen">
        <div class="w-1/2 mx-auto">
            <div
                class="relative z-10 py-2 bg-white sm:py-16 md:py-20 lg:max-w-2xl lg:w-full lg:py-28 xl:py-32"
            >
                <main
                    class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 animate-fade-in-left"
                >
                    <div class="sm:text-center lg:text-left">
                        <h1
                            class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                        >
                            <span class="block xl:inline">a.atienza &nbsp;</span>
                            <span class="block text-red-500 xl:inline">3140</span>
                        </h1>
                        <p
                            class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                        >Currently working as a fulltime Fullstack Web Developer. I like writing/typing, reading and watching informational videos on my freetime.</p>
                    </div>
                </main>
            </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
                class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full animate-fade-in-right"
                :src="work"
            />
        </div>
    </div>
</template>

<style scoped>
.fullscreen {
    min-height: calc(100vh - 68px);
}
</style>