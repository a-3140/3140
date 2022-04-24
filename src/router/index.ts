import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';
import Detail from '@/views/tech/Detail.vue';
import TechBlogList from '@/views/tech/TechBlogList.vue';

// * Currently researching on when and not to lazy load page views.

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
      layout: "PageCollections",
      description: "Recent blogs and researches regarding tech topics.",
    },
  },
  {
    path: "/blog/:id",
    name: "blogs",
    component: Detail,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
