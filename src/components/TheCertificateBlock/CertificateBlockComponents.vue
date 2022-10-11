<template>
  <div :class="$style.container">
    <div :class="$style.main">
      <div>
        <h2 :class="$style.title">
          ABSELGROUP - один из крупнейших оптовых поставщиков автомобильных запчастей<br>и смазочных материалов в России и СНГ
        </h2>
        <VButton 
          :themeWhite=true
        >
          <span>Получить консультацию</span>
        </VButton>
      </div>
      <img src="../../assets/img/certificate.png" alt="certificate">
    </div>
    <ul :class="$style.info">
      <li :class="$style.infoBlock">
        <div :class="$style.infoTitle">27 лет</div>
        <div :class="$style.description">Мы поставляем качественные запчасти по всей России</div>
      </li>
      <li :class="$style.infoBlock">
        <div :class="$style.infoTitle">Доверие клиентов</div>
        <div :class="$style.description">Более 11 000 партнеров сотрудничают с нами </div>
      </li>
      <li :class="$style.infoBlock">
        <div :class="$style.infoTitle">Всегда в наличии</div>
        <div :class="$style.description">Бесперебойные поставки аккумуляторов MUTLU напрямую от производителя в кратчайшие сроки</div>
      </li>
      <li :class="$style.infoBlock">
        <div :class="$style.infoTitle">Бесплатная экспертиза</div>
        <div :class="$style.description">и обмен в случае заводского брака</div>
      </li>
    </ul>
    
  </div>
</template>

<script>
   import VButton from '../VComponent/VButton.vue'

  export default {
    name: 'CertificateBlockComponents',
    components: {
      VButton,
    },
  } 
</script>

<style lang="scss" module>
  .container {
    @apply w-full mx-auto max-w-xxl text-start text-white;
    padding-top: 60px;
    padding-right: 11px;
    padding-left: 15px;
    
  }

  .main {
    @apply flex justify-between;
    font-size: 32px;
  }

  .title {
    max-width: 690px;
    padding-top: 21px;
    line-height: 41.6px;
    padding-bottom: 35px;
  }

  .info {
    @apply flex border-t border-white;
    padding-top: 20px;
    font-size: 13px;
    margin-top: 32px;
    gap: 64px;
  }

  .infoBlock {
    max-width: 242px;
  }

  .infoTitle{
    font-size: 20px;
  }

  .description {
    padding-top: 9px;
  }
</style>