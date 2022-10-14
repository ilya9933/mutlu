<template>
  <div :class="$style.container">
    <div :class="$style.logos">
      <div :class="$style.logo">
        <img src="../../assets/svg/logo-2.svg" alt="logo">
      </div>
      <div>
        <img src="../../assets/svg/mutlu.svg" alt="mutlu">
      </div>
    </div>
    <div :class="$style.info">
      <div :class="$style.adress">
        355042, Россия, г.Ставрополь,<br>ул. Доваторцев, 47/Б
      </div>
      <div :class="$style.infoQuestions">
        <div :class="$style.questions">
          <div :class="$style.questionsTel">8 (800) 350-87-08</div>
          <VButton :class="$style.button" @click.native="openModal()">
            <span>Перезвонить мне</span>
          </VButton>
        </div>
        <div :class="$style.questionsUrl">
          <div >mutlu@absel.ru</div>
        </div>
      </div>
    </div>
    <div :class="$style.bottom">
      <div :class="$style.bottomFirst">
        <div :class="$style.first" >Политика конфиденциальности</div>
        <div>(с)ABSELGROUP</div>
      </div>
      <div>2022</div>
    </div>
  </div>
</template>

<script>
  import VButton from '../VComponent/VButton.vue'

  export default {
    name: 'ContactsBlock',
      components: {
      VButton,
    },
    methods: {
      openModal() {
        this.$emit('open-modal')
      }
    }
  } 
</script>

<style lang="scss" module>
  .container {
    @apply w-full mx-auto max-w-xxl text-start flex flex-col;
    min-height: 386px;
    padding-top: 64px;
    padding-left: 15px;
    padding-right: 15px;
  }

  .logos {
    @apply flex;
    height: 38px;
  }

  .logo {
    @apply  border-black-d2 border-r;
    padding-right: 32px;
    margin-right: 32px;
  }

  .info {
    @apply flex flex-row justify-between items-center border-y border-black-d2;
    padding-top: 36px;
    padding-bottom: 38px;
    margin-top: 38px;
    margin-bottom: 20px;
  }

  .adress {
    @apply text-gray;
    padding-top: 2px;
  }

  .infoQuestions {
    @apply flex flex-col;
  
  }

  .questions {
    @apply text-white flex flex-row;
    font-size: 32px;
    gap: 51px;
  }
  
  .questionsTel {
    padding-bottom: 2px;
  }

  .questionsUrl {
    font-size: 24px;
    text-decoration: underline;
    @apply text-white;
  }

  .button {
    transform: translateY(9px);
  }

  .bottom {
    @apply flex justify-between text-gray-g2;
    font-size: 12px;
  }

  .bottomFirst {
    @apply flex justify-between;
  
    width: 100%;
    max-width: 395px;
  }

  .first {
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {

    .container {
      padding-top: 44px;
    }

    .logo {
      padding-right: 22px;
      margin-right: 22px;
    }

    .info {
      margin-top: 19px;
      padding-top: 21px;
      align-items: flex-start;
      flex-direction: column;
      gap: 18px;
      padding-bottom: 21px;
      margin-bottom: 12px;
    }

    .questions {
      @apply flex-col;
      gap: 6px;
    }

    .infoQuestions {
      gap: 18px;
    }

    .questionsTel {
      font-size: 24px;
    }

    .button {
      transform: translateY(0);
      width: 183px;
    }

    .questionsUrl {
      font-size: 20px;
    }

    .bottomFirst {
      @apply flex-col-reverse;
      gap: 13px;
    }

    .bottom {
      padding-bottom: 31px;
    }

  }

  
</style>