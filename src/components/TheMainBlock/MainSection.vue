<template>
  <div :class="$style.container">
    <div :class="$style.main">
      <h1 :class="$style.mainText">Аккумуляторы MUTLU оптом</h1>
      <div :class="$style.mainDescription">с бесплатной доставкой в 170 городов России</div>
      <VButton :class="$style.button">
        <span>Запросить каталог</span>
      </VButton>
    </div>
    <img :class="$style.img" :style="{ transform: directionValue }" src="../../assets/img/akb.png" alt="АКБ">
    <ul :class="$style.advantages">
      <li :class="$style.advantage">
        <img :class="$style.imgAdvantage" src="../../assets/svg/price.svg" alt="price">
        <div :class="$style.taxtAdvantages">Оптовые цены напрямую<br>от официального дистрибьютора</div>
      </li>
      <li :class="$style.advantage">
        <img :class="$style.imgAdvantage" src="../../assets/svg/quantity.svg" alt="quantity">
        <div :class="$style.taxtAdvantages">Более 8 000 артикулов MUTLU на популярные типы автомобилей в наличии</div>
      </li>
      <li :class="$style.advantage">
        <img :class="$style.imgAdvantage" :style="{ marginTop: '1px', marginLeft: '1px' }" src="../../assets/svg/delivery.svg" alt="delivery">
        <div :class="$style.taxtAdvantages">Бесплатная доставка<br>с собственных складов<br>по России</div>
      </li>
      <li :class="$style.advantage">
        <img :class="$style.imgAdvantage" :style="{ marginTop: '-3px' }" src="../../assets/svg/calendar.svg" alt="calendar">
        <div :class="$style.taxtAdvantages">Свежий срок выпуска аккумуляторов – не ранее 2022 года</div>
      </li>
    </ul>
    <div :class="$style.buttonBot">
      <VButton :class="$style.button" :style="{ margin: 'auto' }">
        <span>Получить консультацию</span>
      </VButton>
    </div>
  </div>
</template>

<script>
  import VButton from '../VComponent/VButton.vue'

  export default {
    name: 'MainSection',
    components: {
      VButton,
    },
    data: () => ({
      imgPosition: 0,
      lastScrollPosition: 0,
    }),
    mounted() {
      this.lastScrollPosition = window.pageYOffset
      window.addEventListener('scroll', this.onScroll)
    },
    computed: {
      directionValue () {
        return `translateY(${this.imgPosition * 0.15}px)`
      }
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
      // Toggle if navigation is shown or hidden
      onScroll() {
        if (this.lastScrollPosition < 112) {
          
          this.imgPosition = this.lastScrollPosition
        }
        this.lastScrollPosition = window.pageYOffset
      },
    }
  } 
</script>

<style lang="scss" module>
  .container {
    @apply w-full mx-auto max-w-xxl text-white text-end relative px-4;
    height: 300px;
  }

  .main {
    @apply absolute text-start;
    margin-top: 253px;
    top: -600px;
  }

  .mainText {
    @apply text-5xl;
  }

  .mainDescription {
    @apply text-base;
    margin-top: 27px;
  }

  .button {
    @apply py-3 px-6 bg-red rounded;
    margin-top: 41px;
  }


  .img {
    width: 484px;
    height: 393px;
    position: relative;
    right: 0;
    bottom: 393px;
    display: inline;
  }

  .advantages {
    @apply flex absolute rounded text-start w-full;
    max-width: 1198px;
    overflow: overlay;
    bottom: 148px;
  }

  .advantage {
    @apply flex flex-col px-10 w-full justify-between;
    max-width: 300px;
    padding-top: 45px;
    padding-bottom: 40px;
    min-height: 212px;
    background: linear-gradient(116.38deg, #FFFFFF 0%, #EFEFEE 100%);
  }

  .imgAdvantage {
    @apply m-auto mt-0;
    margin-left: 4px
    
  }

  .taxtAdvantages {
    @apply text-base text-black;
  }

  .buttonBot {
    @apply absolute left-0 right-0 flex;
    bottom: 60px;
  }
  



</style>