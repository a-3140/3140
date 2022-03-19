<script lang="ts">
import Header from '@/components/layout/Header.vue';
import { defineComponent } from 'vue';
import bg from '@/assets/bg.jpg';

export default defineComponent({
    components: { Header },
    data() {
        return {
            image: `url(${bg})`,
        }
    }
})

</script>

<template>
    <div id="wrapper" v-bind:style="{ 'background-image': image }">
        <Header />
        <div class="mx-auto content-wrapper">
            <slot />
        </div>
    </div>
</template>


<style>
#content {
    display: flex;
}
#wrapper {
    min-height: 100vh;
    background-repeat: no-repeat;
    background-position: right;
    background-attachment: fixed;
}
.content-wrapper {
    background: rgba(255, 255, 255, 0.9);
}
</style>