<template>
  <li :class="[$style.infoBlock, {[$style.show] : isShow}]">
    <div :class="$style.infoTitle">{{info.title}}</div>
    <div :class="$style.description">{{info.text}}</div>
  </li>
</template>

<script>
  export default {
    name: 'CertificateBlockInfo',
    data: () => ({
      isShow: false
    }),
    props: {
      info: {
        default: () => {},
        type: Object
      }
    }
  } 
</script>

<style lang="scss" module>

  .infoBlock {
    max-width: 242px;
    @apply opacity-0 translate-y-4;

    &.show {
      @apply opacity-100 translate-y-0 transition-all ease-in duration-700;
    }
  }

  .infoTitle{
    font-size: 20px;
  }

  .description {
    padding-top: 9px;
  }

  @media screen and (max-width: 1000px) {

    .infoBlock {
      max-width: none;
      @apply border-b border-white border-opacity-40;
      padding-bottom: 16px;
    }
  }
</style>