<template>
  <header :class="[$style.container, {[$style.isHidden]: !showHeader && !mobileHeaderMenu, [$style.mobileNavOpen]:  mobileHeaderMenu}]">
    <div :class="$style.logo">
      <img :class="$style.img" src="../../assets/svg/logo.svg" />
    </div>
    <ul :class="[$style.links, $style.desct, {[$style.mobileNav]:  mobileHeaderMenu}]">
      <li :class="[$style.linksButton, $style.hoverAnimation]">
        <a :class="[$style.text, $style.main]" href="#products">Продукция</a>
      </li>
      <li :class="[$style.linksButton, $style.hoverAnimation]">
        <a :class="$style.text" href="#carousel">О MUTLU</a>
      </li>
      <li :class="[$style.linksButton, $style.hoverAnimation]">
        <a :class="$style.text" href="#red">О нас</a>
      </li>
      <li :class="[$style.linksButton, $style.hoverAnimation]">
        <a :class="$style.text" href="#delivery">Доставка</a>
      </li>
    </ul>
    <div :class="$style.info">
      <div :class="[$style.content, $style.text, $style.tel]">8 (800) 350-87-08</div>
      <button :class="[$style.content, $style.hoverAnimation, $style.desct]" ><img :class="$style.img" src="../../assets/svg/union.svg" /></button>
      <button :class="[$style.content, $style.copy, $style.hoverAnimation, $style.desct]"><img :class="$style.img" src="../../assets/svg/message.svg" /></button>
      <button :class="[$style.burger, $style.mob, {[$style.active]: mobileHeaderMenu}]" @click="mobileHeaderMenu = !mobileHeaderMenu"></button>
    </div>
  </header>
</template>

<script>

  export default {
    name: 'HeaderComponent',
    data: () => ({
    mobileHeaderMenu: false,
    showHeader: true,
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
  methods: {
    // Toggle if navigation is shown or hidden
    onScroll() {
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < this.scrollOffset) {
        return
      }
      this.showHeader = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    },
  }

}
</script>

<style lang="scss" module>
  .container {
    @apply fixed flex inset-x-0 w-full mx-auto h-20 items-stretch justify-between bg-white rounded z-50 ease-in-out duration-1000 translate-x-0;
    max-width: 1198px;
    margin-top: 26px;
  }

  .isHidden {
    transform: translateY(-200%);
  }

  .main {
    @apply text-red;
  }

  .logo {
    @apply pl-6 flex transition-all duration-300 ease-in-out;
    cursor: grab;
  }

  .img {
    @apply m-auto;
  }

  .links {
    @apply uppercase flex items-center h-full;
    margin-right: -54px;
  }

  .linksButton {
    @apply px-4 cursor-pointer flex items-center h-full font-medium text-sm tracking-wide;
  }

  .text {
    @apply h-full flex items-center;
  }

  .info {
    @apply flex;
  }

  .content {
    @apply px-5 min-w-5 border-solid border-l border-gray h-full text-base font-bold;
  }

  .copy {
    cursor: copy;
  }

  .mob {
    display: none;
    
  }

  .burger {
    width: 49px;
    max-height: 60px;
    position: relative;

    &::after,
    &::before {
      display: block;
      position: absolute;
      width: 20px;
      height: 2px;
      border-radius: 3px;
      @apply bg-black duration-300 transition-all ease-in-out;

    }

    &::after {
      content: '';
      top: 24px;
      left: 11px;
    }

    &::before {
      content: '';
      top: 30px;
      left: 11px;
    }

  }

  .tel {
    @apply whitespace-nowrap;
  }

  .active.burger {


    &::after,
    &::before {
      width: 28px;
      transform: rotate(45deg);
    }

    &::before {
      top: 28px;
      left: 7px;
      transform: rotate(-45deg);
    }

    &::after {
      top: 28px;
      left: 7px;
    }

    

  }

  .hoverAnimation {
    @apply text-black-d1;
    transition: background 0.3s ease-in-out;
    &:hover {
      background: linear-gradient(180deg, rgba(239, 239, 238, 0) 0%, #EFEFEE 100%);
    }
  }


  @media screen and (max-width: 1000px) {
    .container {
      @apply mt-0 rounded-none;
      height: 56px;
    }

    .mobileNavOpen {
      height: 100vh;

      & .logo {
        display: none;
      }

      & .tel {
        height: 0;
        opacity: 0;
      }
      
      & .burger {
        width: 59px;
      }

    }

    .desct {
      display: none;
    }

    .logo {
      padding-left: 16px;
      width: 139px;
      max-height: 60px;
    }

    .tel {
      font-size: 14px;
      max-height: 60px;
      @apply border-0 pr-2 transition-all duration-300 ease-in-out;
    }

    .mob {
      display: block;
    }

    .mobileNav {
      @apply block flex-col w-full justify-between;
      margin-top: 50px;


      & .linksButton {
        @apply block border-b border-gray;
        height: auto;
        padding: 25px 15px;
      }

      & .text {
        font-size: 24px;
        text-transform: none;
      }
      
    }

  }

</style>