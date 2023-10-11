<script lang="ts" setup>
const props = defineProps<{
  data: IHeader
}>()

const { logo, nav, cta } = props.data
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <header>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <!-- Logo -->
        <NuxtLink :to="logo.link" class="flex items-center gap-2">
          <ClientOnly>
            <img :src="isDark ? logo.dark : logo.light" class="h-10" :alt="logo.name">
          </ClientOnly>
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            {{ logo.name }}
          </span>
        </NuxtLink>

        <div class="flex items-center gap-3">
          <!-- Dark mode -->
          <button
            class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2"
            aria-label="Change color mode"
            @click="toggleDark()"
          >
            <ClientOnly>
              <svg v-if="isDark" id="dark-icon" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
              <svg v-else id="light-icon" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd" />
              </svg>
            </ClientOnly>
          </button>

          <!-- CTA -->
          <NuxtLink v-if="cta" :to="cta.path" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
            {{ cta.name }}
          </NuxtLink>
        </div>
      </div>
    </nav>

    <!-- Submenu -->
    <nav class="bg-gray-50 dark:bg-gray-700">
      <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <div class="flex items-center">
          <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
            <li v-for="item in nav" :key="item.path">
              <NuxtLink
                :to="item.path"
                class="text-gray-900 dark:text-white hover:underline"
                :aria-current="item.path === $route.path"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
