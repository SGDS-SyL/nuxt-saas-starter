<script setup lang="ts">
useHead({
  title: 'Welcome',
})
const heroData: IHero = {
  title: 'Speed Up Your SAAS Launch with Free NuxtJS Starter Kit',
  content: 'Save time, resources, and get your business off the ground swiftly and cost-effectively',
  notice: {
    title: 'News',
    content: 'We have launched in Product Hunt. 🚀 Give us a vote!',
    link: '/',
  },
  buttons: [{
    label: 'Download Now',
    link: '/',
    class: 'btn-primary',
  }, {
    label: 'See Docs',
    link: '/',
  }],
  image: {
    light: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png',
    dark: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png',
  },
  background: {
    light: 'https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg',
    dark: 'https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg',
  },
}

const hero3Data: IHero = { ...heroData,...{
    background: {
      light: 'https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg',
      dark: 'https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg',
    },
  } }
</script>

<template>
  <AppHero hero="Hero1" :data="heroData" />
  <AppHero hero="Hero2" :data="heroData" />
  <AppHero hero="Hero3" :data="hero3Data" />
</template>
