<template>
  <div :class="$style.container">
    <div class="input-group">
      <input type="text" :value="value" :id="id" class="form-input" @input="handleInput">
      <label :for="id">{{ title }}</label>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'VInput',
    model: {
      prop: 'value',
      event: 'input'
    },
    prop: {
      value: {
        type: [String, Number],
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      id: {
        type: String,
        default: ''
      },
    },

    methods: {
      handleInput (e) {
        let value = e.target.value
        this.$emit('input', value)
      }
    }
  } 
</script>

<style lang="scss" module>
  .container {
    @apply w-full mx-auto max-w-xxl text-start flex justify-between px-4;
  }
  
</style>