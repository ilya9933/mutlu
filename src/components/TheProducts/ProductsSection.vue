<template>
  <div :class="$style.container">
    <div :class="$style.title">
      <div :class="$style.text">
        <h2 :class="$style.textH2">Популярные товары</h2>
        <div :class="$style.description">Компания ABSELGROUP является официальным дистрибьютором  аккумуляторных батарей MUTLU. Мы предлагаем широкий ассортимент с гарантией на аккумуляторы для легковых автомобилей 24 месяца (до 100 Ач, включительно), для грузовых - 12 месяцев.</div>
      </div>
      <VButton :class="$style.button">
        <span>Запросить полный каталог</span>
      </VButton>
    </div>
    <div :class="$style.products" >
        <VProduct
        v-for="(product, i) in products"
        :key="`${product.id}-product-${i}`"
        :products=product
         />
      
    </div>
    <VCarousel
    :class="$style.carousel"
    :slides="slides"
    />
  </div>
</template>

<script>
   import VButton from '../VComponent/VButton.vue'
   import VProduct from './TheProduct.vue'
   import VCarousel from '../VComponent/VCarousel.vue'

  export default {
    name: 'ProductsSection',
    components: {
      VButton,
      VProduct,
      VCarousel,
    },
    data: () => ({
      products: [
        {
          id: 1,
          img: "AGM.L5.95.090 1.png",
          title: "AGM.L5.95.090.A",
          article: "Аккумулятор  MUTLU  AGM TYPE  12V  95A/h  900A (353x175x190) ОП"
        },
        {
          id: 2,
          img: "D5.190.125 1.png",
          title: "D5.190.125.A",
          article: "Аккумулятор  MUTLU  HEAVY DUTY TYPE  SERIE 2  12V  190A/h  1250A  (513x223x223)  ОП"
        },
        {
          id: 3,
          img: "D5.190.125 1-2.png",
          title: "D6.225.140.B",
          article: "Аккумулятор  MUTLU  HEAVY DUTY TYPE  SERIE 2  12V  225A/h  1400A  (518x273x242)  ОП"
        },
        {
          id: 4,
          img: "D5.190.125 1-3.png",
          title: "L2.60.054.A",
          article: "Аккумулятор  MUTLU  DIN TYPE  SERIE 3  12V  60A/h  540A  (242x175x190)  ОП"
        },
        {
          id: 5,
          img: "image 130.png",
          title: "L2.60.054.B",
          article: "Аккумулятор  MUTLU  DIN TYPE  SERIE 3  12V  60A/h  540A  (242x175x190)  ПП"
        },
        {
          id: 6,
          img: "image 130-2.png",
          title: "L2.63.064.A",
          article: "Аккумулятор  MUTLU  DIN TYPE  SERIE 3  12V  63A/h  640A  (242x175x190)  ОП"
        },
        {
          id: 7,
          img: "image 130-3.png",
          title: "L3.75.072.A",
          article: "Аккумулятор  MUTLU  DIN TYPE  SERIE 3  12V  75A/h  720A  (278x175x190)  ОП"
        },
        {
          id: 8,
          img: "image 129.png",
          title: "L3.72.064.A",
          article: "Аккумулятор MUTLU DIN TYPE SERIE 2 12V 72A/h 640A (278x175x190) ОП"
        },
      ],
      slides: [
        { 
            id: 1,
            img: "carousel-1.png",
            title: "Компания Mutlu Battery работает с 1945 года и успешно сочетает свой опыт с новыми технологиями",
            svg: null,
        },
        {
            id: 2,
            img: "carousel-2.png",
            title: "Вся продукция сертифицирована в соответствии с международными стандартами качества",
            svg: [
                "1-svg-carousel-1.svg",
                "1-svg-carousel-2.svg",
                "1-svg-carousel-3.svg",
                "1-svg-carousel-4.svg",
            ],
        },
        {
            id: 3,
            img: "carousel-3.png",
            title: "Аккумуляторы MUTLU экспортируются в более чем 80 стран на 6 континентах",
            svg: null,
        },
      ]
    }),
  } 
</script>

<style lang="scss" module>
  .container {
    @apply w-full mx-auto max-w-xxl text-start px-4;
    padding-top: 47px;
    padding-bottom: 61px;
  }

  .title {
    @apply text-black flex justify-between;
    min-height: 148px;
  }

  .text {
    max-width: 687px;
  }

  .textH2 {
    @apply text-5xl mb-7;
  }

  .description {
    @apply text-base
  }

  .products {
    padding-top: 39px;
    display: grid;
    grid-template-columns: repeat(auto-fit, 282px);
    grid-auto-rows: 374px;
    justify-content: space-between;
  }

  .carousel {
    @apply border border-gray rounded;
    margin-top: 40px;
  }

  .button {
    @apply mt-auto;
  }
</style>