<template>
  <div class="card" 
      @mousemove="onMouseMove"
      @mouseleave="onMouseLeave">
        <div class="content">
          <p class="card-title always-visible icon-inside"><Icon name="stash:plus-solid" /></p>
        </div>
  </div>
</template>
<style lang="scss" scoped>
@import '~/assets/scss/card.scss';
</style>