<template>
  <div :class="$style.container">
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
    @apply w-full flex flex-col;
    font-size: 16px;
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