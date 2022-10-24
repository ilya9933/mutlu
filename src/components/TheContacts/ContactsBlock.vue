<template>
  <div :class="$style.container">
    <div :class="$style.text">
      <h2 :class="$style.title">ABSELGROUP - ваш надежный<br> поставщик аккумуляторов MUTLU!</h2>
      <div :class="$style.description">Поможем с подбором и проконсультируем по всем вопросам сотрудничества.</div>
      <VButton :class="$style.button" @click.native="openModal()">
        <span>Оставить контакты</span>
      </VButton>
    </div>
    <div :class="$style.questions">
      <div :class="$style.questionsText">Задать вопрос:</div>
      <div :class="$style.questionsTel">8 800 350-87-08</div>
      <div :class="$style.questionsUrl">mutlu@absel.ru</div>
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
    @apply w-full mx-auto max-w-xxl text-start flex justify-between px-4;
    min-height: 380px;
    padding-top: 60px;
    
    
  }

  .text {
    padding-left: 33px;
  }
  

  .title {
    font-size: 33px;
    line-height: 40px;
    padding-bottom: 20px;
    letter-spacing: -0.5px;
    margin-right: 30px;
  }

  .description {
    font-size: 16px;
    max-width: 330px;
    line-height: 24px;
    padding-bottom: 43px;
  }

  .questions {
    width: 383px;
    height: 218px;
    background: linear-gradient(116.38deg, #FFFFFF 0%, #EFEFEE 100%);
    border: 1px solid #D8D8D8;
    border-radius: 4px;
    margin-right: 33px;
    padding: 22px 40px;
    font-size: 32px;
  }

  .questionsText {
    font-size: 16px;
    padding-bottom: 11px;
    @apply text-gray-g2;
    
  }

  .questionsTel {
    padding-bottom: 9px;
  }

  .questionsUrl {
    color: #0057FF;
    text-decoration: underline;

  }

  @media screen and (max-width: 1000px) {

    .container {
      @apply flex-col;
      padding-top: 36px;
    }

    .text {
      @apply flex flex-col;
      padding-left: 0;
      padding-bottom: 40px;
    }

    .title {
      font-size: 24px;
      line-height: 32px;
      letter-spacing: 0;
      padding-bottom: 7px;
      margin-right: 30px;

      & br {
        display: none;
      }
    }

    .description {
      font-size: 13px;
      line-height: 20px;
      padding-bottom: 19px;
    }

    .button {
      width: 100%;
      max-width: 350px;
      margin: 0 auto;
    }

    .questions {
      width: 100%;
      max-width: 350px;
      padding: 14px 15px;
      font-size: 24px;
      height: 139px;
      margin: 0 auto;
      margin-bottom: 40px;
    }

    .questionsText {
      padding-bottom: 7px;
    }

    .questionsTel {
      padding-bottom: 4px;
    }

  }
  
</style>