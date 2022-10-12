<template>
  <div id="app">
    <HeaderComponent />
    <section class="mainBlock">
      <img class="imgSatellite" :style="{ transform: directionValue }" src="./assets/img/satellite.png" alt="satellite">
      <div class="parallax">
        <VParallax id="space"
        :speedFactor=0.3
        >
        <img src="./assets/img/space.png" alt="space">
        </VParallax>
      </div>
      <MainSection />
    </section>
    <div class="relative parallaxFixed parallaxDeskt">
      <VParallax id="car"
        :sectionHeight=400
        >
        <img src="./assets/img/car.png" alt="car">
      </VParallax>
    </div>
    <img class="parallaxMob parallaxCar" src="./assets/img/car-mob.png" alt="car">
    <section id="products" class="products">
      <ProductsSection />
    </section>
    <section id="red" class="red">
      <CertificateBlockComponents />
    </section>
    <section id="delivery" class="delivery">
      <DeliveryBlock />
    </section>
    <div class="relative parallaxFixed parallaxDeskt">
      <VParallax id="car"
        :sectionHeight=540
        >
        <img src="./assets/img/bg.png" alt="bg">
      </VParallax>
    </div>
    <img class="parallaxMob parallaxMobBg" src="./assets/img/bg-2.png" alt="bg">
    <section id="contacts" class="contacts">
      <ContactsBlock/>
    </section>
    <footer id="footer" class="footer">
      <FooterBlock/>
    </footer>
  </div>
</template>

<script>
  import HeaderComponent from './components/TheHeader/HeaderComponent.vue'
  import VParallax from './components/VComponent/VParallax.vue'
  import MainSection from './components/TheMainBlock/MainSection.vue'
  import ProductsSection from './components/TheProducts/ProductsSection.vue'
  import CertificateBlockComponents from './components/TheCertificateBlock/CertificateBlockComponents.vue'
  import DeliveryBlock from './components/TheDelivery/DeliveryBlock.vue'
  import ContactsBlock from './components/TheContacts/ContactsBlock.vue'
  import FooterBlock from './components/TheFooter/FooterBlock.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    VParallax,
    MainSection,
    ProductsSection,
    CertificateBlockComponents,
    DeliveryBlock,
    ContactsBlock,
    FooterBlock,
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
}

.mainBlock {
  position: relative;
  /* min-height: 900px; */
}

.parallax {
  @apply absolute;
  width: 100%;
  height: 600px;
  z-index: -2;

}

.parallaxFixed {
  overflow: overlay;
}

.imgSatellite {
  position: absolute;
  z-index: -1;
  top: 104px;
  left: 99px;
}

.red {
  @apply bg-red;
  min-height: 567px;
}

.footer {
  @apply bg-black;
}

.parallaxCar {
  object-fit: cover;
  min-height: 261px;
  max-height: 373px;
  width: 100%;
}

.parallaxMobBg {
  min-height: 264px;
}

.parallaxMob {
  display: none;
}

@media screen and (max-width: 1000px) {
  .imgSatellite {
    position: absolute;
    z-index: 0;
    top: -9px;
    left: -80px;
  }
  .parallaxDeskt {
    display: none;
  }

  .parallaxMob {
    display: block;
    object-fit: cover;
    max-height: 373px;
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .imgSatellite {
    top: 50px;
    left: 153px;
  }
}
</style>
