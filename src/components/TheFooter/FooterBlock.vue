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
          <div :class="$style.questionsUrl">mutlu@absel.ru</div>
        </div>
        <div :class="$style.button">
          <VButton >
            <span>Перезвонить мне</span>
          </VButton>
        </div>
      </div>
    </div>
    <div :class="$style.bottom">
      <div :class="$style.bottomFirst">
        <div>Политика конфиденциальности</div>
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
  } 
</script>

<style lang="scss" module>
  .container {
    @apply w-full mx-auto max-w-xxl text-start flex flex-col;
    height: 386px;
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
    @apply flex;
  
  }

  .questions {
    @apply text-white;
    font-size: 32px;
    margin-right: 51px;
  }
  
  .questionsTel {
    padding-bottom: 2px;
  }

  .questionsUrl {
    font-size: 24px;
    text-decoration: underline;
  }

  .button {
    padding-top: 9px;
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
</style>