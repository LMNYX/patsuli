<template>
  <div class="card">
        <div class="content">
          <NuxtImg :src="cover" class="card-background" />
          <p class="card-title">{{ title }}</p>
        </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(['title', 'cover'])
</script>

<style lang="scss" scoped>
@import '~/assets/scss/card.scss';
</style>