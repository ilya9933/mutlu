<template>
  <header :class="[$style.container, {[$style.isHidden]: !showHeader }]">
    <div :class="$style.logo">
      <img :class="$style.img" src="../../assets/svg/logo.svg" />
    </div>
    <ul :class="$style.links">
      <li :class="[$style.linksButton, $style.main, $style.hoverAnimation]">
        <a :class="$style.text">Продукция</a>
      </li>
      <li :class="[$style.linksButton, $style.hoverAnimation]">
        <a :class="$style.text">О MUTLU</a>
      </li>
      <li :class="[$style.linksButton, $style.hoverAnimation]">
        <a :class="$style.text">О нас</a>
      </li>
      <li :class="[$style.linksButton, $style.hoverAnimation]">
        <a :class="$style.text">Доставка</a>
      </li>
    </ul>
    <div :class="$style.info">
      <div :class="[$style.content, $style.text]">8 (800) 350-87-08</div>
      <button :class="[$style.content, $style.hoverAnimation]" ><img :class="$style.img" src="../../assets/svg/union.svg" /></button>
      <button :class="[$style.content, $style.hoverAnimation]"><img :class="$style.img" src="../../assets/svg/message.svg" /></button>
    </div>
  </header>
</template>

<script>

  export default {
    name: 'HeaderComponent',
    data: () => ({
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
    @apply fixed flex inset-x-0 w-full mx-auto h-20 items-stretch justify-between bg-white rounded z-10 ease-in-out duration-1000 translate-x-0;
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
    @apply pl-6 flex;
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

  .hoverAnimation {
    @apply text-black-d1;
    transition: background 0.3s ease-in-out;
    &:hover {
      background: linear-gradient(180deg, rgba(239, 239, 238, 0) 0%, #EFEFEE 100%);
    }
  }

</style>