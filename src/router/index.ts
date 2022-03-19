import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

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
    path: "/blog",
    name: "ListView",
    component: List,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  {
    path: "/blog/:id",
    name: "Blog",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/views/Blog.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
