<template>
  <div :class="$style.container">
    <!-- <input-mask v-if="type === 'tel'" :type="type" v-model="maskedInputValue" mask="+7 (999) 99 99" maskChar="_" :id="id" :class="[$style.input, {[$style.hasValue]: hasValue, [$style.noValidation]: !validation}]" @input="handleInput"></input-mask> -->
    <input :type="type" :value="value" :id="id" :disabled="disabled" :class="[$style.input, {[$style.hasValue]: hasValue, [$style.noValidation]: !validation}]" @input="handleInput">
    <label :for="id" :class="$style.label">{{ title }}</label>
  </div>
</template>

<script>
// import InputMask from 'vue-input-mask';

  export default {
    name: 'VInput',
    components: {
    // InputMask
  },
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      value: {
        type: String,
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
      type: {
        type: String,
        default: 'text',
        required: false
      },
      validation: {
        type: Boolean,
        default: true,
        required: false
      },
      disabled: {
        type: Boolean,
        default: false,
        required: false
      }
    },
    data() {
      return {
        maskedInputValue: ""
      }
    },
    mounted () {
      this.maskedInputValue = this.value
    },
    methods: {
      handleInput (e) {
        let value = e.target.value
        this.$emit('input', value)
      }
    },
    computed: {
      hasValue() {
        if (this.value) {
          return true
        }
        return false
      }
    }
  } 
</script>

<style lang="scss" module>
  .container {
    @apply w-full mx-auto relative;
  }

  .label {
    @apply absolute inline-block transition-all duration-500 ease-in-out;
    position: absolute;
    display: inline-block;
    background: transparent;
    left: 16px;
    top: 50%;
    padding: 0 4px;
    font-size: 12px;
    transform: translatey(-50%);
  }

  .input {
    @apply block border border-gray rounded transition-colors duration-300 ease-in-out text-black w-full;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 19px;
    font-size: 12px;
    outline: none;
    box-sizing: border-box;

    &:focus,
    &:active {
      @apply border-gray-g2;
    }

    &:hover {
      @apply border-gray-g2;
    }

    &:focus ~ .label,
    &:active ~ .label {

      @apply text-black-d2 bg-white;
      top: -3px;
    }
  }

  .hasValue ~ .label {
    @apply bg-white;
    top: -3px;
  }

  .noValidation {
    @apply border-red;

    & ~ .label {
      @apply text-red bg-white;
      top: -3px;
    }
  }

  
</style>