<template>
  <div id="app">
    <HeaderComponent />
    <section class="mainBlock">
      <img class="imgSatellite" :style="{ transform: directionValue }" src="./assets/img/satellite.png" alt="satellite">
      <VParallax id="space"
      :speedFactor=0.3
      >
        <img src="./assets/img/space.png" alt="space">
      </VParallax>
      <MainSection />
    </section>
    <div class="relative parallaxFixed">
      <VParallax id="car"
        :sectionHeight=400
        >
        <img src="./assets/img/car.png" alt="car">
      </VParallax>

    </div>
    <section class="products">
      <ProductsSection />
    </section>
  </div>
</template>

<script>
  import HeaderComponent from './components/TheHeader/HeaderComponent.vue'
  import VParallax from './components/VComponent/VParallax.vue'
  import MainSection from './components/TheMainBlock/MainSection.vue'
  import ProductsSection from './components/TheProducts/ProductsSection.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    VParallax,
    MainSection,
    ProductsSection,
  },
  data: () => ({
      imgPosition: 0,
      lastScrollPosition: 0,
      scrollOffset: 40,
    }),
    mounted() {
      this.lastScrollPosition = window.pageYOffset
      window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.onScroll)
    },
    computed: {
      directionValue () {
        return `translate(${this.imgPosition * 0.9}px ,${this.imgPosition * 0.3}%)`
      }
    },
    methods: {
      // Toggle if navigation is shown or hidden
      onScroll() {
        if (this.lastScrollPosition < 250) {
          
          this.imgPosition = this.lastScrollPosition
        }
        this.lastScrollPosition = window.pageYOffset
      },
    }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 10000px;
}

.mainBlock {
  position: relative;
  height: 900px;
}

.parallaxFixed {
  overflow: overlay;
}

.imgSatellite {
  position: absolute;
  z-index: 0;
  top: 104px;
  left: 99px;
}


</style>
