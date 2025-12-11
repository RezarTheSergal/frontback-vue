<template>
  <div class="background-image" :style="{ backgroundImage: `url(${bgImage})` }">
    <slot />
  </div>
</template>

<script setup>
import bgImage from '@/images/horizontal-purple-mountains.jpg';
</script>

<style scoped>
.background-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}
</style>