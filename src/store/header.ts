import { reactive } from 'vue';

export const header = reactive({
  isHeaderVisible: false,
  showHeader() {
    this.isHeaderVisible = true;
  },
  hideHeader() {
    this.isHeaderVisible = false;
  },
});
