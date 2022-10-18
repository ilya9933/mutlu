<template>
  <div :class="$style.container">
    <div :class="$style.text">
      <h2 :class="$style.title">Доставка</h2>
      <ul :class="$style.nav">
        <li v-for="(tab, i) in tabs"
          :key="`tab-${i}`"
          :class="[{[$style.active]: id === tab.id}]"
          >
          <button :class="$style.button" @click.prevent="id = tab.id">
            {{tab.title}}
          </button>
        </li>
      </ul>
      <div :class="$style.des">{{text}}</div>
    </div>
    <transition name="list" mode="out-in">
      <img :class="$style.img" :src="img" alt="gazelle">
    </transition>
  </div>
</template>

<script>

  export default {
    name: 'DeliveryBlock',
    data() {
      return {
        id: 1,
      }
    },
     props: {
      tabs: {
        default: () => [],
        type: Array
      },
    },
    computed : {
      text() {
        let arr = this.tabs.find(item => item.id == this.id);
        return arr.text;
      },
      img() {
        let arr = this.tabs.find(item => item.id == this.id);
        return require(`../../assets/img/${arr.img}`)
      }
    },
    // methods: {
    //   next(id){
    //     this.index++;
    //     if(this.index >= this.slidesLength){
    //         this.index = 0;
    //     }
    //     this.slideDirection = 'slide-right';
    //   },
  } 
</script>

<style lang="scss" module>
  .container {
    @apply w-full flex;
    font-size: 16px;
  }

  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }

  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }


  .text {
    padding-top: 54px;
  }

  .img {
    width: 600px;
    margin: auto;
    padding-bottom: 20px;
  }

  .title {
    padding-bottom: 50px;
    font-size: 48px;
  }

  .nav {
    @apply w-full flex flex-row flex-nowrap border-b border-gray;
    gap: 25px;
    height: 43px;
    margin-bottom: 39px;
    overflow-x: auto;
    overflow-y: hidden;

    & li {
      @apply transition-all ease-in-out duration-300;
    }

    &:-webkit-scrollbar { 
      width: 0; 
    }

  }

  .active {
    @apply border-red;
    border-bottom-width: 2px;
    border-radius: 1px;
  }

  .button {
    @apply whitespace-nowrap;
  }
  
  @media screen and (max-width: 1000px) {

    .container {
      @apply flex-col;
    }

    .text {
      padding-top: 28px;
    }

    .title {
      padding-bottom: 31px;
      font-size: 32px;
    }

    .nav {
      height: 40px;
      margin-bottom: 20px;
    }

    .des {
      margin-bottom: 50px;
      font-size: 13px;
      line-height: 20px;
    }

  }
  
  
</style>