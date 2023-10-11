<script lang="ts" setup>
const props = defineProps<{
  data: IHero
}>()

const isDark = useDark()
const { notice, title, content, buttons, image } = props.data
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <!-- Notice -->
        <NuxtLink
          v-if="notice"
          :to="notice.link"
          class="notice notice-primary"
        >
          <span class="text-xs rounded-full px-4 py-1.5 mr-3 title">
            {{ notice.title }}
          </span>
          <span class="text-sm font-medium">
            {{ notice.content }}
          </span>
          <svg class="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
          </svg>
        </NuxtLink>

        <!-- Title -->
        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          {{ title }}
        </h1>

        <!-- Content -->
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          {{ content }}
        </p>

        <!-- Form -->
        <form class="w-full mb-8 max-w-md">
          <label for="default-email" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Email sign-up</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input id="default-email" type="email" class="form-input" placeholder="Enter your email here..." required>
            <button type="submit" class="absolute right-2.5 bottom-2.5 btn btn-primary btn-small">
              Sign up
            </button>
          </div>
        </form>

        <!-- Buttons -->
        <NuxtLink
          v-for="button in buttons"
          :key="button.label"
          :to="button.link"
          :class="button.class ? button.class : 'btn-outline'"
          class="btn mr-3"
        >
          {{ button.label }}
        </NuxtLink>
      </div>

      <!-- Image -->
      <div v-if="image" class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img :src="isDark ? image.dark : image?.light" :alt="title">
      </div>
    </div>
  </section>
</template>
