<template>
  <div :class="$style.container">
    <img :class="$style.img" :src="img" :alt="slide.img">
    <div :class="$style.info">
      <div v-if="slide.svg" :class="$style.svg">
        <CarouselSvg v-for="svg in slide.svg" :key="svg" 
          :svgUrl="svg"
        />
      </div>
      <div :class="$style.title">{{slide.title}}</div>
    </div>
  </div>
</template>

<script>
  import CarouselSvg from './CarouselSvg.vue'; 

  export default {
    name: 'CarouselImg',
     components: {
        CarouselSvg,
    },
    props: {
      slide: {
        default: () => {},
        type: Object
      },
    },
    data() {
    return {
      img: null,
    }
    },
    mounted() {
      this.img = require(`../../../assets/img/${this.slide.img}`)
    },
  } 
</script>

<style lang="scss" module>
  .container {
    @apply w-full h-full relative;
  }
  
  .img {
    @apply object-cover w-full;
    height: 100%;
  }

  .info {
    @apply p-10 absolute top-0 w-full h-full;
  }

  .svg {
    @apply pt-5 absolute top-10 flex;
  }

  .title {
    @apply absolute bottom-10 text-white;
    max-width: 675px;
    font-size: 32px;
    line-height: 40px;
    margin-right: 170px;
    z-index: 1;
  }

  @media screen and (max-width: 768px) {

    .info {
      padding: 16px;
    }

    .title {
      font-size: 20px;
      line-height: 26px;
      margin-right: 24px;
      bottom: 16px;
    }

    .svg {
      @apply pt-0;
      top: 32px;
    }
  }
  
</style>