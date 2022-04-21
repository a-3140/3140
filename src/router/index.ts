import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Blog from '@/views/Blog.vue';
import Home from '@/views/Home.vue';
import List from '@/views/List.vue';
import NotFound from '@/views/NotFound.vue';

/*
 * Currently researching on when and not to lazy load page views.
 */

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:title",
    name: "ListView",
    component: List,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  {
    path: "/blog/:id",
    name: "blogs",
    component: Blog,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
