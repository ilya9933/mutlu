<template>
  <div :class="$style.container">
    <div :class="$style.text">
      <h2 :class="$style.title">ABSELGROUP - ваш надежный<br>поставщик аккумуляторов MUTLU!</h2>
      <div :class="$style.description">Поможем с подбором и проконсультируем по всем вопросам сотрудничества.</div>
      <VButton>
        <span>Оставить контакты</span>
      </VButton>
    </div>
    <div :class="$style.questions">
      <div>Задать вопрос:</div>
      <div>8 800 350-87-08</div>
      <div>mutlu@absel.ru</div>
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
    @apply w-full mx-auto max-w-xxl text-start flex justify-between;
    height: 380px;
    padding-top: 60px;
    
    
  }

  .text {
    padding-left: 48px;
  }
  

  .title {
    font-size: 33px;
    line-height: 40px;
    padding-bottom: 20px;
    letter-spacing: -0.5px;
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
    margin-right: 48px;
  }
  
  
  
</style>