<template>
  <NuxtLayout :name="($route.path === '/') ? 'default' : 'logged'">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
</script>

