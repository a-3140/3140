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
      :data-index="index"
      class="bg-zinc-900 border-zinc-700 border-y mb-4 rounded-lg pb-4"
    >
      <router-link
        :to="{ name: 'BlogPost', params: { id: post.slug } }"
        class="relative"
      >
        <img
          class="max-h-52 w-full object-cover rounded-lg"
          :src="post.featured_image || imgPlaceholder"
          :alt="post.featured_image_alt"
        />
        <div class="p-2">
          <h5 class="mb-2 text-md font-semibold text-white">
            {{ post.title }}
          </h5>
          <p class="hidden text-xs text-gray-400 tracking-wide">
            {{ post.summary }}
          </p>
        </div>
        <p class="absolute -bottom-2 text-gray-500 text-xs left-2">
          {{ rawStringToFormattedDate(post.updated) }}
        </p>
      </router-link>
    </div>
  </div>
</template>
