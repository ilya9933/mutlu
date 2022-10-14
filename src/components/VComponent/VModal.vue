<template>
  <div :class="$style.containerOverlay" @click.self="closeModal()">
    <div :class="$style.container">
      <div :class="$style.contante">
        <div :class="[$style.info, $style.infoRight]"></div>
        <div :class="$style.info">
          <form @submit.prevent="clickButton" :class="$style.form">
            <VInput v-bind:id="form.name.id" :title="form.name.title" v-model="form.name.value"
            />
            <VInput
            v-model="form.telephone"
            title='Телефон'
            />
            <VInput
            v-model="form.city"
            title='Город'
            />
            <div>
              
            </div>
            <div>
              
            </div>
            <div>
              
            </div>
            <input type="submit"  value="Send message" :class="$style.button" />
          </form>
        </div>
      </div>
      <div :class="$style.buttonClose" @click="closeModal()">
        <div :class="$style.cross"/>
      </div>
    </div>
  </div>
</template>

<script>
import VInput from './VInput'

export default {
  name: 'VModal',
  components: {
    VInput,
  },

  data() {
    return {
      form: {
        name: {
          value: "",
          title: 'Имя',
          id: "name"
        },
        telephone: {
          value: "",
          title: 'Телефон',
          id: 'telephone'
        },
        city: {
          value: "",
          title: 'Город',
          id: 'city'
        }
      },
    }
  },

  methods: {
    closeModal() {
      this.$emit('close-modal')
    }
  },
}
</script>

<style lang="scss" module>
.containerOverlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background-color: rgba(23, 23, 23, 0.95);
  @apply transition-all duration-500 ease-in-out flex justify-center;
}

.container {
  position: relative;
  text-align: center;
  max-height: 352px;
  width: 100vw;
  max-width: 997px;
  margin: auto;
  overflow: hidden;
  @apply h-full w-full bg-white border border-gray m-auto rounded;
}

.contante {
  @apply flex w-full h-full;
}

.info {
  @apply w-full h-full
}

.infoRight {
  width: calc(100% + 50px);
}

.buttonClose {
  position: absolute;
  top: 37px;
  right: 36.5px;
  cursor: pointer;
  width: 28px;
  height: 28px;
}

.cross {
  position: relative;
  width: 100%;
  height: 100%;
  @apply transition-all duration-1000 ease-in-out;

  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 28px;
    margin: auto;
    @apply bg-black rounded top-0 bottom-0 left-0 right-0;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  &:hover {
    transform: rotate(180deg);
  }
}

</style>