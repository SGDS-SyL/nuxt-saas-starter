<script lang="ts" setup>
const headerData: IHeader = {
  logo: {
    link: '/',
    name: 'SGDS',
    light: '/images/logo.svg',
    dark: '/images/logo-white.svg',
  },
  nav: [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Components',
      path: '/components',
    },
    {
      name: 'Pricing',
      path: '#pricing',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ],
  cta: {
    name: 'Download',
    path: '/',
  },
}
</script>

<template>
  <div class="min-h-screen dark:bg-gray-900">
    <AppHeader :data="headerData" header="Header1" />
    <div>
      <slot />
    </div>
  </div>
</template>
