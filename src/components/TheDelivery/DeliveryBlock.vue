<template>
  <div :class="$style.container">
    <DeliveryNav
      :tabs="tabsDelivery"
    />
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
            img: "gazelle.png"
          },
          {
            id: 2,
            title: 'Услуги транспортной компании',
            text: "Мы отправим заказ со склада любой из транспортных компаний на ваш выбор.",
            img: "truck.png"
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
    
  }
 
</style>