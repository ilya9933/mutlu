<template>
  <span :class="$style.container">
    <img :class="$style.svg" :src="svg" :alt="svgUrl">
  </span>
</template>

<script>

  export default {
    name: 'CarouselSvg',
    props: {
      svgUrl: {
        default: "",
        type: String
      },
    },
    data() {
    return {
      svg: null,
    }
    },
    mounted() {
      this.svg = require(`../../../assets/svg/${this.svgUrl}`)
    },
  } 
</script>

<style lang="scss" module>
  .container {
    @apply w-full flex;
    height: 56px;
  }
  
  
  
</style>