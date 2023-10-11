<script lang="ts" setup>
const props = defineProps<{
  data: IHero
  hero: IAppHero
}>()

const component = resolveComponent(props.hero)
</script>

<template>
  <component :is="component" :data="data" />
</template>
