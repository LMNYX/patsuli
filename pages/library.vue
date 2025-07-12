<template>
  <div class="page">
    <h1 class="page-title">{{ username }}'s Library</h1>
    <div class="readable-entities">
      <div class="card" 
      @mousemove="onMouseMove"
      @mouseleave="onMouseLeave">
        <div class="content">
          <NuxtImg src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30002-Cul4OeN7bYtn.jpg" class="card-background" />
          <p class="card-title">Berserk</p>
        </div>
      </div>
      <div class="card"
      @mousemove="onMouseMove"
      @mouseleave="onMouseLeave">
        <div class="content">
          <NuxtImg src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx106064-WBMhTOo7UQ20.png" class="card-background" />
          <p class="card-title">Mato Seihei no Slave</p>
        </div>
      </div>
      <div class="card" 
      @mousemove="onMouseMove"
      @mouseleave="onMouseLeave">
        <div class="content">
          <NuxtImg src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx86635-EdaLQmsn86Fy.png" class="card-background" />
          <p class="card-title">Kaguya-sama: Love is War</p>
        </div>
      </div>
      <div class="card new-card" 
      @mousemove="onMouseMove"
      @mouseleave="onMouseLeave">
        <div class="content">
          <p class="card-title always-visible icon-inside"><Icon name="stash:plus-solid" /></p>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
const username = "user"
const { onMouseMove, onMouseLeave } = useCardTilt()
</script>

<style lang="scss" scoped>
@import "~/assets/scss/colors.scss";

.readable-entities
{
  .card
  {
    display: inline-block;
    overflow: hidden;
    margin: 4px;
    position: relative;
    aspect-ratio: 7 / 10;
    background: $background-highlight;
    height: 300px;

    cursor: pointer;

    transition: 0.2s;

    &.new-card
    {
      background: $background;
      border-style: dashed;
      border-color: $background-highlight;

      &:hover
      {
        border-color: transparent;
      }
    }

    &:hover
    {
      border-radius: 12px;
      background: $background-highlight2;
      box-shadow: 0px 0px 200px 0px rgba(255,255,255,0.135125125);
      

      img.card-background
      {
        transform: scale(1.05);
        opacity: 0.55;
      }

      p.card-title
      {
        opacity: 1;
      }
    }

    .content
    {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    img.card-background
    {
      position: relative;
      width: 100%;
      height: 100%;
      object-fit: cover;

      pointer-events: none;
      
      transition: 0.2s;
    }

    p.card-title
    {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      max-width: 100%;
      text-align: center;
      word-wrap: break-word;
      font-weight: 600;
      opacity: 0;
      transition: 0.2s;

      &.always-visible
      {
        opacity: 1;
      }

      &.icon-inside
      {
        span
        {
          font-size: 48px;
        }
      }
    }
  }
}

</style>