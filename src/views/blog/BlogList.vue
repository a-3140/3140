<script setup lang="ts">
import { ref, onMounted } from "vue";
import { butterCMS } from "@/buttercms";
import BlogCard from "@/modules/blog/components/BlogCard.vue";

export interface Post {
  slug?: string;
  date?: string;
  title?: string;
  lastEdited?: string;
  updated: string;
  summary?: string;
  featured_image?: string;
  featured_image_alt: string;
  description?: string;
}

interface Category {
  name: string;
  slug: string;
}

const firstColumnPosts = ref<Post[]>([]);
const secondColumnPosts = ref<Post[]>([]);

onMounted(async () => {
  const response: { data: [] } = (
    await butterCMS.post.list({
      page: 1,
      page_size: 10,
    })
  ).data;
  firstColumnPosts.value = response.data.filter((val: Post, idx: number) => {
    if (!(idx % 2)) return val;
  });
  secondColumnPosts.value = response.data.filter((val: Post, idx: number) => {
    if (idx % 2) return val;
  });
});
</script>

<template>
  <div class="container m-auto mt-8">
    <div class="xl:max-w-6xl bg-black/80 flex space-x-3 mx-2">
      <div class="flex flex-col basis-1/2">
        <BlogCard :posts="firstColumnPosts" />
      </div>
      <div class="flex flex-col basis-1/2">
        <BlogCard :posts="secondColumnPosts" />
      </div>
    </div>
  </div>
</template>
