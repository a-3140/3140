// This can be directly added to any of your `.ts` files like `router.ts`
// It can also be added to a `.d.ts` file, in which case you will need to add an export
// to ensure it is treated as a module
export {};

import 'vue-router';

import { Component } from 'vue';

import { HeaderTitles } from '@/types/routers';

declare module "vue-router" {
  interface RouteMeta {
    layout?: Component;
    title: HeaderTitles;
    description: string;
  }
}
