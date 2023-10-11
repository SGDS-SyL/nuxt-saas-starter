<script lang="ts" setup>
const props = defineProps<{
  data: IHero
}>()

const { notice, title, content, buttons, background } = props.data
</script>

<template>
  <section
    class="bg-white dark:bg-gray-900 relative bg-[image:var(--image-url)] dark:bg-[image:var(--dark-image-url)]"
    :style="`--image-url: url('${background?.light}'); --dark-image-url: url('${background?.dark}');`"
  >
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
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
      <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {{ title }}
      </h1>

      <!-- Content -->
      <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
        {{ content }}
      </p>

      <!-- Form -->
      <form class="w-full max-w-md mx-auto mb-10">
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

    <!-- Overlay Background -->
    <div class="bg-gradient-to-b from-primary-50 to-transparent dark:from-primary-900 w-full h-full absolute top-0 left-0 z-0" />
  </section>
</template>
