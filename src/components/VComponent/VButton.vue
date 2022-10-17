<template>
  <button :disabled="disabled" :class="[$style.button, {[$style.themeWhite]: themeWhite, [$style.themeRed]: !themeWhite}]">
    <slot></slot>
  </button>
</template>

<script>

  export default {
    name: 'VButton',
    props: {
      themeWhite: {
        default: false,
        type: Boolean,
        required: false
      },
      type: {
        type: String,
        default: 'button',
        required: false
      },
      disabled: {
        type: Boolean,
        default: false,
        required: false
      }
    },
  } 
</script>

<style lang="scss" module>
  .button {
    @apply py-3 px-6 border rounded whitespace-nowrap ease-in-out transition-colors duration-300 w-auto h-auto;
    font-size: 16px;

  }

  .themeRed {
    @apply bg-red border border-red text-white;

    &:hover {
      @apply bg-red-r2 border-red-r2;
    }
    &:active {
      @apply bg-red-r1 border-red-r1;
    }
  }

  .themeWhite {
    @apply bg-white text-red border-white;

    &:hover {
      @apply bg-gray-g3 text-white border-white border;
    }
    &:active {
      @apply bg-gray-g4 text-white border-white border;
    }
  }
</style>