<template>
  <div :class="$style.container">
    <div :class="$style.main">
      <h1 :class="$style.mainText">Аккумуляторы MUTLU оптом</h1>
      <div :class="$style.mainDescription">с бесплатной доставкой в 170 городов России</div>
      <VButton :class="$style.button">
        <span>Запросить каталог</span>
      </VButton>
    </div>
    <ul :class="$style.advantages">
      <li :class="$style.advantage">
          <div :class="$style.imgAdvantage">
            <img src="../../assets/svg/price.svg" alt="price">
          </div>
        <div :class="$style.taxtAdvantages">Оптовые цены напрямую<br>от официального дистрибьютора</div>
      </li>
      <li :class="$style.advantage">
        <div :class="$style.imgAdvantage">
          <img src="../../assets/svg/quantity.svg" alt="quantity">
        </div>
        <div :class="$style.taxtAdvantages">Более 8 000 артикулов MUTLU на популярные типы автомобилей в наличии</div>
      </li>
      <li :class="$style.advantage">
        <div :class="$style.imgAdvantage">
          <img :style="{ marginTop: '1px', marginLeft: '1px' }" src="../../assets/svg/delivery.svg" alt="delivery">
        </div>
        <div :class="$style.taxtAdvantages">Бесплатная доставка<br>с собственных складов<br>по России</div>
      </li>
      <li :class="$style.advantage">
        <div :class="$style.imgAdvantage">
          <img :style="{ marginTop: '-3px' }" src="../../assets/svg/calendar.svg" alt="calendar">
        </div>
        <div :class="$style.taxtAdvantages">Свежий срок выпуска аккумуляторов – не ранее 2022 года</div>
      </li>
    </ul>
    <div :class="$style.buttonBot">
      <VButton :class="$style.button" :style="{ margin: 'auto' }">
        <span>Получить консультацию</span>
      </VButton>
    </div>
    <img :class="$style.img" :style="{ transform: directionValue }" src="../../assets/img/akb.png" alt="АКБ">
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
    min-height: 900px;
    padding-bottom: 59px;
  }

  .main {
    @apply text-start;
    padding-top: 253px;
    padding-right: 450px;
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
    position: absolute;
    right: 16px;
    top: 207px;
    display: inline;
    z-index: -1;
  }

  .advantages {
    @apply flex rounded text-start w-full;
    max-width: 1198px;
    overflow: overlay;
    margin-top: 96px;
    z-index: 2;
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
    @apply mx-auto flex;
    margin-top: 39px;
  }
  

  @media screen and (max-width: 1000px) {
    .container {
      padding-bottom: 40px;
    }

    .main {
      padding-top: 121px;
      @apply px-11 text-center;
    }

    .mainText {
      font-size: 32px;
      line-height: 40px;
    }

    .mainDescription {
      font-size: 13px;
      margin-top: 6px;
      line-height: 20px;
    }

    .button {
      margin-top: 25px;
    }

    .advantages {
      @apply flex-col;
      margin-top: 234px;
    }

    .advantage {
      max-width: none;
      width: 100%;
      flex-direction: row;
      min-height: auto;
      @apply pt-6 pl-6;
      justify-content: flex-start;
      padding-bottom: 24px;
      background: linear-gradient(180deg, #FFFFFF 0%, #EFEFEE 100%);
    }

    .imgAdvantage {
      width: 32px;
      height: auto;
      margin-right: 28px;
      display: flex;

      & img {
        margin: auto;
      }
    }

    .taxtAdvantages {
      font-size: 13px;
      width: 100%;
      line-height: 20px;

      & br {
        display: none;
      }
    }

    .buttonBot {
      margin-top: 27px;
    }

    
  }

  @media screen and (max-width: 768px) {
    .img {
      width: 262px;
      height: auto;
      position: absolute;
      right: 0;
      left: 0;
      top: 357px;
      display: block;
      margin: 0 auto;
    }
  }



</style>