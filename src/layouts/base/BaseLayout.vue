<script setup lang="ts">
import bg from '@/assets/bg.png';
import Header from '@/components/layout/Header.vue';

const image = `url(${bg})`

</script>

<template>
    <div class="bg-black overflow-hidden fullscreen" id="wrapper" v-bind:style="{ 'background-image': image }">
        <Header />
        <div class="mx-auto content-wrapper bg-black/80">
            <slot></slot>
        </div>
    </div>
</template>


<style>
#content {
    display: flex;
}

#wrapper {
    min-height: calc(100vh - 68px);
    background-repeat: no-repeat;
    background-position: right;
    background-attachment: fixed;
}

.content-wrapper {
    min-height: calc(100vh - 68px);
}
</style>