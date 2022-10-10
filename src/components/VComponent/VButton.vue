<template>
  <button :class="$style.button">
    <slot></slot>
  </button>
</template>

<script>

  export default {
    name: 'VButton',
  } 
</script>

<style lang="scss" module>
  .button {
    @apply py-3 px-6 bg-red rounded text-white whitespace-nowrap;
  }
</style>