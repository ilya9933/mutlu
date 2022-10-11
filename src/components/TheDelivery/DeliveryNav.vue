<template>
  <div :class="$style.container">
    <div :class="$style.text">
      <h2 :class="$style.title">Доставка</h2>
      <ul :class="$style.nav">
        <li v-for="(tab, i) in tabs"
          :key="`tab-${i}`"
          :class="[$style.button, {[$style.active]: id === tab.id}]"
          >
          <button @click.prevent="id = tab.id">
            {{tab.title}}
          </button>
        </li>
      </ul>
      <div>{{text}}</div>
    </div>
    <img :class="$style.img" :src="img" alt="gazelle">
    
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


  .text {
    padding-left: 15px;
    padding-top: 54px;
  }

  .img {
    height: 330px;
    margin: auto 17px auto 0px;
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
  }

  .active {
    @apply border-red;
    border-bottom-width: 2px;
    border-radius: 1px;
  }
  
  
  
</style>