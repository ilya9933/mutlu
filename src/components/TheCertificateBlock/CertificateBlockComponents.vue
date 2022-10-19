<template>
  <div :class="$style.container">
    <div :class="$style.main">
      <div>
        <h2 :class="$style.title">
          ABSELGROUP - один из крупнейших оптовых поставщиков автомобильных запчастей<br>и смазочных материалов в России и СНГ
        </h2>
        <VButton 
          :themeWhite=true
          @click.native="openModal()"
        >
          <span>Получить консультацию</span>
        </VButton>
      </div>
      <div>
        <img :class="[$style.img, {[$style.show] : isShow}]" ref="img" src="../../assets/img/certificate.png" alt="certificate">
      </div>
    </div>
    <ul :class="$style.info" ref="info">
      <CertificateBlockInfo 
        v-for="info in infos"
        :key="info.id"
        :info="info"
        :ref="info.id"
      />
    </ul> 
  </div>
</template>

<script>
   import VButton from '../VComponent/VButton.vue'
   import CertificateBlockInfo from './CertificateBlockInfo.vue'

  export default {
    name: 'CertificateBlockComponents',
    components: {
      VButton,
      CertificateBlockInfo,

    },
    data: () => ({
      lastScrollPosition: 0,
      isShow: false,
      infos: [
        {
          id: "age",
          title: "27 лет",
          text: "Мы поставляем качественные запчасти по всей России"
        },
        {
          id: "trust",
          title: "Доверие клиентов",
          text: "Более 11 000 партнеров сотрудничают с нами"
        },
        {
          id: "availability",
          title: "Всегда в наличии",
          text: "Бесперебойные поставки аккумуляторов MUTLU напрямую от производителя в кратчайшие сроки"
        },
        {
          id: "expertise",
          title: "Бесплатная экспертиза",
          text: "и обмен в случае заводского брака"
        }
      ]
    }),
    methods: {
      openModal() {
        this.$emit('open-modal')
      },
      onScroll() {
        this.showImg()
        this.showInfo()

      },
      showImg() {
        const img = this.$refs.img.getBoundingClientRect()

        const isItemActive =  img.top - window.innerHeight + 200 < 0

        if (isItemActive) {
          this.isShow = true
        }
      },
      showInfo() {
        const info = this.$refs.info.getBoundingClientRect().top - window.innerHeight + 200 < 0
        if (info) {
          // eslint-disable-next-line
          const refsWithoutImageRef = Object.entries(this.$refs).filter(([key, value]) => key !== 'img' && key!=='info')
          let count = 0
          // eslint-disable-next-line
          refsWithoutImageRef.forEach(([key, value]) => {
            setTimeout(function(){
              value[0].isShow = true
            }, count);
            count += 1000
          })
        }
        // eslint-disable-next-line 
      }
    },
    mounted() {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.onScroll)
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
    margin: 0 auto auto;
    @apply opacity-0 translate-y-4;

    &.show {
      @apply opacity-100 translate-y-0 transition-all ease-in duration-700;
    }
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