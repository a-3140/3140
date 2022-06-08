<script setup lang="ts">
import { ref, onMounted } from "vue";
import { butterCMS } from "@/buttercms";
import { FadeLeft } from "@/common/animation";
import { sliceDateString } from "@/common/functions";
import imgPlaceholder from "@/assets/PlaceholderImage.svg";

interface Post {
  slug?: string;
  date?: string;
  title?: string;
  lastEdited?: string;
  updated: string;
  summary?: string;
  featured_image?: string;
  featured_image_alt: string;
  description?: string;
  categories?: Category[];
}

interface Category {
  name: string;
  slug: string;
}

const posts = ref<Post[]>([]);

onMounted(async () => {
  const response = (
    await butterCMS.post.list({
      page: 1,
      page_size: 10,
    })
  ).data;
  posts.value = response.data;
  console.log("posts", posts.value);
});
</script>

<template>
  <ul class="xl:max-w-6xl bg-black/80">
    <li
      v-for="(post, index) in posts"
      :key="post.slug"
      :data-index="index"
      class="bg-zinc-900 border-zinc-700 border-y mb-8 rounded-t-sm"
    >
      <router-link :to="{ name: 'BlogPost', params: { id: post.slug } }">
        <img
          class="max-h-64 w-full object-cover rounded-t-sm"
          :src="post.featured_image || imgPlaceholder"
          :alt="post.featured_image_alt"
        />
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-xl font-bold tracking-tight text-white font-mono"
            >
              {{ post.title }}
            </h5>
          </a>
          <p class="mb-3 text-sm text-gray-400 tracking-wide">
            {{ post.summary }}
          </p>
        </div>
      </router-link>
    </li>
  </ul>
</template>
