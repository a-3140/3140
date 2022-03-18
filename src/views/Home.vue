<script setup lang="ts">
import { data } from '@/data/data'
import { dateToString } from '@/helpers/date'

const title = 'Blog';
const actionButton = 'Read';
const titleDescription = 'Recent blogs and researches regarding tech topics.';

</script>

<template>
    <div class="max-w-5xl mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
        <header class="pt-16 mb-6 pb-2 sm:mb-10 sm:pb-6 border-b-2 border-neutral-200">
            <h1 class="mb-4 text-3xl sm:text-4xl font-extrabold">{{ title }}</h1>
            <p class="text-lg text-gray-500">{{ titleDescription }}</p>
        </header>
        <div>
            <ol class="relative border-l border-gray-200 dark:border-gray-700">
                <div v-for="item in data">
                    <li class="mb-10 ml-4">
                        <div
                            class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                        ></div>
                        <time
                            class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                        >{{ dateToString(item.dateCreated) }}</time>
                        <h3
                            class="text-lg font-semibold text-gray-900 dark:text-white"
                        >{{ item.title }}</h3>
                        <p
                            class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
                        >{{ item.description }}</p>
                        <router-link
                            :to="{ name: 'Blog', params: { id: item.id } }"
                            class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            {{ actionButton }}
                            <svg
                                class="ml-2 w-3 h-3"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </router-link>
                    </li>
                </div>
            </ol>
        </div>
    </div>
</template>
