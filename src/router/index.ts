import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import { HeaderTitles, RouteNames } from '@/types/routers';
import Home from '@/views/Home.vue';
import TechArticle from '@/views/tech/TechArticle.vue';

import Collections from '../layouts/types/Collections.vue';

// * Lazyload
const NotFound = () => import("@/views/NotFound.vue");
const TechArticles = () => import("@/views/tech/TechArticles.vue");
const PortfolioList = () => import("@/views/portfolio/PortfolioList.vue");
const ExperienceList = () => import("@/views/experience/ExperienceList.vue");

export const RouteMap: Map<HeaderTitles, RouteNames> = new Map([
  [HeaderTitles.Tech, RouteNames.TechArticles],
  [HeaderTitles.Portfolio, RouteNames.Portfolios],
  [HeaderTitles.Experience, RouteNames.Experiences],
]);

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/tech",
    name: RouteNames.TechArticles,
    component: TechArticles,
    meta: {
      title: HeaderTitles.Tech,
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
    component: ExperienceList,
    meta: {
      title: HeaderTitles.Experience,
      layout: Collections,
      description: "Quick timeline of software development experience",
    },
  },
  {
    path: "/tech/:id",
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
