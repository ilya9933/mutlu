<template>
  <div :class="$style.containerOverlay" @click.self="closeModal()">
    <div :class="$style.container">
      <div :class="$style.contante">
        <div :class="[$style.info, $style.infoRight]">
          <div :class="$style.title">Оставьте контакты</div>
          <div :class="$style.text">с вами свяжется наш специалист</div>
          <img :class="$style.img" src="../../assets/img/modal-img.png" alt="modal-img">
        </div>
        <div :class="$style.info">
          <form @submit.prevent="clickButton" :class="$style.form">
            <VInput v-for="(input, i) in form"
              :key="`${input.id}-input-${i}`" 
              :id="input.id" 
              :title="input.title"
              :type="input.type"
              :validation="input.validation"
              v-model="input.value"
            />
            <VButton type='submit' :class="$style.button">
              <span>Отправить заявку</span>
            </VButton>
            <!-- <input type="submit"  value="Отправить заявку" :class="$style.button" /> -->
            <div v-if="emptyField">*Все поля должны быть заполнены</div>
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
import VButton from './VButton.vue'

export default {
  name: 'VModal',
  components: {
    VInput,
    VButton
  },

  data() {
    return {
      form: {
        name: {
          value: "",
          title: 'Имя',
          id: "name",
          validation: true,
        },
        telephone: {
          value: "",
          title: 'Телефон',
          id: 'telephone',
          type: 'tel',
          validation: true,
        },
        city: {
          value: "",
          title: 'Город',
          id: 'city',
          validation: true,
        }
      },
      emptyField: false,
    }
  },

  methods: {
    closeModal() {
      this.$emit('close-modal')
    },
    clickButton() {
      this.emptyField = false
      for (var key in this.form) {
        if (!this.form[key].value) {
          this.form[key].validation = false
        } else {
          this.form[key].validation = true
        }
      }
      for (var validation in this.form) {
        if (!this.form[validation].validation) {
          this.emptyField = true
        }
      }

      if (this.emptyField) {
        return
      }
       
      this.submitForm()
    },
    async submitForm() {
      this.closeModal()
    },
  },
}
</script>

<style lang="scss" module>
.containerOverlay {
  z-index: 99;
  background-color: rgba(23, 23, 23, 0.95);
  @apply fixed top-0 right-0 bottom-0 left-0 transition-all duration-500 ease-in-out flex justify-center;
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
  @apply h-full;
  padding-left: 104px;
  padding-right: 100px;
  padding-top: 47px;
  width: 88%;
}

.infoRight {
  width: calc(100% + 50px);
  padding-left: 60px;
  padding-right: 67px;
  padding-top: 35px;
  background: radial-gradient(93.25% 227.71% at 93.25% 23.7%, #EFEFEE 0%, #FFFFFF 100%);
  @apply text-start relative;
}

.img {
  @apply absolute bottom-0 left-0;
}
.title {
  font-size: 40px;
}

.text {
  @apply text-gray-g2;
  font-size: 16px;
  line-height: 14px;
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

.form {
  @apply flex flex-col h-full;
  row-gap: 14px;
}

.button {
  width: min-content;
}

</style>