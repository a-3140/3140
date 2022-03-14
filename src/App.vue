<script lang="ts">
import { defineComponent } from "vue";
import AppLayout from "./layouts/AppLayout.vue";

export default defineComponent({
  components: { AppLayout }
})

</script>

<template>
  <div id="app">
    <AppLayout>
      <router-view />
    </AppLayout>
  </div>
</template>

<style>
</style>
