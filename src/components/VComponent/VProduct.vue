<template>
  <div :class="$style.container">
    <div :class="$style.imgContainer">
      <img :class="$style.img" :src="img" :alt="products.title">
    </div>
    <div :class="$style.text">
      <div>
        <div :class="$style.title">
          <span>{{ products.title }}</span>
          <img src="../../assets/svg/cop.svg" alt="cop">
        </div>
        <div :class="$style.article">
          {{products.article}}
        </div>
      </div>
      <VButton :class="$style.button">
        <span>Запросить стоимость</span>
      </VButton>
    </div>
  </div>
</template>

<script>
   import VButton from './VButton.vue'

  export default {
    name: 'VProduct',
    components: {
      VButton,
    },
    props: {
      products: {
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
    this.img = require(`../../assets/img/${this.products.img}`)
  },
  } 
</script>

<style lang="scss" module>
  .container {
    @apply p-1 border border-gray-g1 rounded w-full transition-all ease-out duration-500;
    height: 350px;

    &:hover {
      @apply border-0 ease-in duration-200;
      height: 379px;
      box-shadow: 0px 16px 24px -8px rgba(0, 0, 0, 0.15);

      .img {
        transform: scale(0.9);
      }

      .button {
        @apply opacity-100 ease-in transition-opacity duration-500;
      }
    }
  }

  .imgContainer {
    @apply w-full bg-gray-g1 flex;
    height: 195px;
  }

  .img {
    @apply m-auto ease-in-out transition-all duration-300;
  }

  .text {
    @apply px-3 flex flex-col justify-between;
    padding-left: 11px;
    padding-block-start: 9px;
    padding-top: 21px;
    max-height: 162px;
    height: 100%;
  }

  .title {
    @apply flex text-black text-xl;
  }

  .article {
    @apply text-gray-g2;
    padding-top: 4px;
    font-size: 13px;
  }

  .button {
    @apply w-full opacity-0 transition-opacity ease-out duration-200;
  }

  
</style>