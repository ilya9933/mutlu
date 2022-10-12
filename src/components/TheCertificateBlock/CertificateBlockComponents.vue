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
      <div>
        <img :class="$style.img" src="../../assets/img/certificate.png" alt="certificate">
      </div>
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
    margin-right: 30px;
  }

  .img {
    margin: 0 auto auto
  }

  .info {
    @apply flex border-t border-white;
    padding-top: 20px;
    font-size: 13px;
    margin-top: 32px;
    gap: 64px;
    padding-bottom: 60px;
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

  @media screen and (max-width: 1000px) {

    .container {
      padding-top: 20px
    }

    .main {
      @apply flex-col;
      font-size: 20px;
      row-gap: 38px;
    }

    .title {
      line-height: 26px;
      padding-bottom: 18px;
    }

    .info {
      @apply flex-col border-0 mt-0;
      padding-right: 5px;
      row-gap: 16px;
      padding-bottom: 39px;
    }

    .infoBlock {
      max-width: none;
      @apply border-b border-white border-opacity-40;
      padding-bottom: 16px;
    }
  }
</style>