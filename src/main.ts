import './index.css';
import 'flowbite';

import { createApp } from 'vue';
import VueGtag from 'vue-gtag';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);

app.use(
  VueGtag,
  {
    appName: "Personal Website",
    pageTrackerScreenviewEnabled: true,
    config: {
      id: "G-GZKKR415PF",
    },
  },
  router
);

app.mount("#app");
