<template>
  <div :class="$style.container">
    <div :class="$style.text">
      <h2 :class="$style.title">Доставка</h2>
      <DeliveryNav
        :tabs="tabsDelivery"
      />
    </div>
    <img :class="$style.img" src="../../assets/img/gazelle.png" alt="gazelle">
  </div>
</template>

<script>
  import DeliveryNav from './DeliveryNav.vue'

  export default {
    name: 'DeliveryBlock',
    components: {
    DeliveryNav,
    
  },
    data() {
      return {
        tabsDelivery: [
          {
            id: 1,
            title: 'Бесплатная доставка',
            text: "Мы БЕСПЛАТНО доставляем заказ “до двери” в 170 городов в регионах присутствия наших складов и филиалов: Москва и Московская область, Воронежская область, Краснодарский край, Ростовская область, Ставропольский край, Республики Северного Кавказа. Всю подробную информацию вы можете уточнить у нашего специалиста.",
          },
          {
            id: 2,
            title: 'Услуги транспортной компании',
            text: "Мы отправим заказ со склада любой из транспортных компаний на ваш выбор.",
          },
        ],
      }
    },
  } 
</script>

<style lang="scss" module>
  .container {
    @apply w-full mx-auto max-w-xxl text-start flex justify-between;
    height: 462px;
    font-size: 48px;
  }

  .text {
    padding-left: 15px;
    padding-top: 54px;
  }

  .img {
    height: 330px;
    margin: auto 17px auto 0px;
  }

  .title {
    padding-bottom: 50px;
  }
  
  
  
</style>