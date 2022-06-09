<script setup lang="ts">
import { onMounted, ref, unref, watch } from "vue";
import imgPlaceholder from "@/assets/PlaceholderImage.svg";
import { rawStringToFormattedDate } from "@/common/functions";
import { useRoute } from "vue-router";

import { butterCMS } from "@/buttercms";
interface BlogPost {
  slug: string;
  body: string;
  author: Author;
  title?: string;
  featured_image?: string;
  featured_image_alt: string;
  updated: string;
}

interface Meta {
  next_post: { slug: string; title: string };
  previous_post: { slug: string; title: string };
}

interface Author {
  last_name: string;
  first_name: string;
}

interface Data {
  data?: BlogPost;
  meta?: Meta;
}

const post = ref<Data>({});
const loaded = ref(false);
const route = useRoute();

onMounted(() => {
  getPost(route.params.slug as string);
});

watch(
  () => route.params.slug,
  (postSlug) => getPost(postSlug as string)
);

async function getPost(postSlug: string) {
  loaded.value = false;
  post.value = (await butterCMS.post.retrieve(postSlug)).data;
  document.title = unref(post)?.data?.title || "Blog";
  loaded.value = true;
}
</script>

<template>
  <div id="blog-post" v-if="loaded && post.data" class="text-white relative">
    <div
      class="h-80 lg:h-96 w-full bg-cover rounded-b-3xl lg:bg-center"
      :style="{
        backgroundImage: `url(${post.data.featured_image || imgPlaceholder})`,
      }"
    >
      <div class="w-full bg-black/50 h-full">
        <div
          class="w-full h-full flex flex-col justify-between items-start p-4 md:px-0 md:max-w-lg lg:max-w-3xl mx-auto"
        >
          <div @click="$router.back()" class="hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </div>

          <div class="flex flex-col">
            <div
              class="text-white text-3xl lg:text-4xl text-semibold tracking-wide"
            >
              {{ post.data.title }}
            </div>
            <div class="text-gray-300 text-xs lg:text-sm py-2">
              {{ rawStringToFormattedDate(post.data.updated) }}
              <span
                >- {{ post.data.author.first_name }}
                {{ post.data.author.last_name }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="px-4 text-left bg-black/70 p-2 pt-8 rounded-3xl min-h-screen">
      <div
        class="md:max-w-lg lg:max-w-3xl mx-auto pb-10"
        v-html="post.data.body"
      ></div>
    </div>
  </div>
</template>
