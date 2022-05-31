import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import { HeaderTitles, RouteNames, RoutePair } from '@/types/routers';
import Home from '@/views/Home.vue';
import TechArticle from '@/views/tech/TechArticle.vue';

import Collections from '../layouts/types/Collections.vue';

// * Lazyload
const NotFound = () => import("@/views/NotFound.vue");
const TechArticles = () => import("@/views/tech/TechArticles.vue");
const PortfolioList = () => import("@/views/portfolio/PortfolioList.vue");
const Experience = () => import("@/views/experience/Experience.vue");

export const routeMap: RoutePair[] = [
  { name: "Portfolio", routeName: RouteNames.Portfolios },
  { name: "Experience", routeName: RouteNames.Experiences },
  { name: "Blog", routeName: RouteNames.Blogs },
];

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/blog",
    name: RouteNames.Blogs,
    component: TechArticles,
    meta: {
      title: HeaderTitles.Blog,
      layout: Collections,
      description: "Recent blogs and researches regarding tech topics.",
    },
  },
  {
    path: "/portfolio",
    name: RouteNames.Portfolios,
    component: PortfolioList,
    meta: {
      title: HeaderTitles.Portfolio,
      layout: Collections,
      description:
        "Short Descriptions of the things I have done outside of work",
    },
  },
  {
    path: "/experience",
    name: RouteNames.Experiences,
    component: Experience,
    meta: {
      title: HeaderTitles.Experience,
      description: "Quick timeline of software development experience",
    },
  },
  {
    path: "/blog/:id",
    name: "Blog",
    component: TechArticle,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
