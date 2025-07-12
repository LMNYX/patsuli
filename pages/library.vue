<template>
  <div class="page">
    <h1 class="page-title">{{ username }}'s Library</h1>
    <div class="readable-entities">
      <Card title="Berserk" cover="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx161645-QLbzHXiYRgV2.jpg" @mousemove="onMouseMove" @mouseleave="onMouseLeave" />
      <Card title="Eromanga Sensei" cover="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/nx99026-5Eg650WAd9Rj.jpg" @mousemove="onMouseMove" @mouseleave="onMouseLeave" />
      <Card title="Kami no Tou" cover="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx113322-gwV3eakaVqZQ.png" @mousemove="onMouseMove" @mouseleave="onMouseLeave" />
      <CardNewElement @mousemove="onMouseMove" @mouseleave="onMouseLeave" />

    </div>
  </div>
</template>

<script lang="ts" setup>
const username = "user"
const { onMouseMove, onMouseLeave } = useCardTilt()
</script>

<style lang="scss" scoped>
</style>