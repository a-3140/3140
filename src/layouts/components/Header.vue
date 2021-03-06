<script setup lang="ts">
import { ref } from "vue";
import { routeMap } from "@/router";
import Burger from "@/components/icons/Burger.vue";
import Close from "../../components/icons/Close.vue";
import { isHeaderVisible, header, isLogoLoaded } from "@/store/header";

const showMenu = ref(false);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

const correctText = "3140";
const charmap = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];

const value = ref("");
const currentChar = ref("");
const charIndex = ref(0);
const matched = ref("");
const index = ref(0);

function checkCurrentCharAtIndex(currentChar: string, correctChar: string) {
  return currentChar === correctChar;
}

if (isLogoLoaded)
  setTimeout(() => {
    const running = setInterval(checkChars, 10);

    function checkChars() {
      if (charIndex.value === 4) {
        currentChar.value = "";
        header.logoIsShown();
        clearInterval(running);
      }

      value.value = `${matched.value}${currentChar.value}`;
      currentChar.value = charmap[index.value];
      if (
        checkCurrentCharAtIndex(
          currentChar.value,
          correctText.charAt(charIndex.value)
        )
      ) {
        value.value += currentChar.value;
        matched.value = `${matched.value}${currentChar.value}`;
        charIndex.value++;
        index.value = 0;
      }
      index.value++;
    }
  }, 3200);
</script>

<template>
  <keep-alive>
    <nav
      v-if="isHeaderVisible"
      class="mx-auto px-2 md:px-8 xl:px-12 py-5 font-medium shadow-sm bg-black/90 text-white font-mono"
    >
      <div
        class="container flex flex-wrap justify-between items-center mx-auto xl:max-w-6xl"
      >
        <router-link :to="{ name: 'Home' }" class="flex items-center">
          <span
            class="self-center text-xl font-semibold whitespace-nowrap text-green-400 hover:scale-110 transition-all ease-in-out duration-300"
            >{{ isLogoLoaded ? correctText : value }}</span
          >
        </router-link>
        <button
          type="button"
          @click="toggleMenu"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 z-10"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <close v-if="showMenu" />
          <burger v-else />
        </button>
        <div
          :class="showMenu ? '' : 'hidden'"
          class="w-full md:block md:w-auto"
        >
          <ul
            class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
          >
            <li v-for="route in routeMap" :key="route.name">
              <router-link
                :to="{ name: route.routeName }"
                class="block py-2 pr-6 pl-5 text-white rounded md:bg-transparent md:p-0 dark:text-white hover:scale-110 transition-all ease-in-out duration-300"
                :class="isLogoLoaded ? '' : 'animate-fade-in-down'"
                aria-current="page"
              >
                {{ route.name }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </keep-alive>
</template>
