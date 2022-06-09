<script setup lang="ts">
import imgPlaceholder from "@/assets/PlaceholderImage.svg";
import { rawStringToFormattedDate } from "@/common/functions";
import { Post } from "@/views/blog/BlogList.vue";

defineProps<{ posts: Post[] }>();
</script>

<template>
  <div class="flex flex-col basis-1/2">
    <div
      v-for="(post, index) in posts"
      :key="post.slug"
      class="mb-4 rounded-md hover:bg-zinc-800 ease-in-out transition-all duration-400 delay-100 lg:hover:scale-105"
    >
      <router-link
        :to="{ name: 'BlogPost', params: { slug: post.slug } }"
        class="relative"
      >
        <img
          class="max-h-52 lg:max-h-96 w-full object-cover rounded-md"
          :src="post.featured_image || imgPlaceholder"
          :alt="post.featured_image_alt"
        />
        <div class="p-2 lg:p-4">
          <h5 class="text-md lg:text-lg font-semibold text-white">
            {{ post.title }}
          </h5>
          <p
            class="hidden lg:block py-2 text-xs lg:text-md text-gray-400 tracking-wide"
          >
            {{ post.summary }}
          </p>
        </div>
        <p class="text-gray-500 text-xs w-full p-2">
          {{ rawStringToFormattedDate(post.updated) }}
        </p>
      </router-link>
    </div>
  </div>
</template>
