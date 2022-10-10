<template>
  <div :class="$style.container">
    <div :class="$style.main">
      <div>
        <div>
          ABSELGROUP - один из крупнейших оптовых поставщиков автомобильных запчастей и смазочных материалов в России и СНГ
        </div>
        <VButton 
          :themeWhite=true
        >
          <span>Запросить полный каталог</span>
        </VButton>
      </div>
      <img src="../../assets/img/certificate.png" alt="certificate">
    </div>
    
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
    
  }

  .main {
    @apply flex;
  }
</style>