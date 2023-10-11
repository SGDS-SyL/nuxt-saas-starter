<script lang="ts" setup>
const props = defineProps<{
  data: IHeader
  header: IAppHeader
}>()

const component = resolveComponent(props.header)
</script>

<template>
  <component :is="component" :data="data" />
</template>
