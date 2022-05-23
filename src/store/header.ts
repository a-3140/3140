import { reactive, ref } from 'vue';

export const isHeaderVisible = ref(false);
export const isLogoLoaded = ref(false);

export const header = reactive({
  showHeader() {
    isHeaderVisible.value = true;
  },
  hideHeader() {
    isHeaderVisible.value = false;
  },
  logoIsShown() {
    isLogoLoaded.value = true;
  },
});
