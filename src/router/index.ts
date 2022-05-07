import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Home from '@/views/Home.vue';
import TechArticle from '@/views/tech/TechArticle.vue';

import Collections from '../layouts/types/Collections.vue';

// * Lazyload
// TODO: Improve and organize naming
const TechBlogList = () => import("@/views/tech/TechArticles.vue");
const NotFound = () => import("@/views/NotFound.vue");

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/tech",
    name: "BlogList",
    component: TechBlogList,
    meta: {
      title: "Tech",
      layout: Collections,
      description: "Recent blogs and researches regarding tech topics.",
    },
  },
  {
    path: "/blog/:id",
    name: "Tech",
    component: TechArticle,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
