<template>
  <div :class="$style.containerOverlay" @click.self="closeModal()">
    <div :class="$style.container" >
      <div>
      </div>
      <div>
        
      </div>
      <div :class="$style.buttonClose" @click="closeModal()">
        <div :class="$style.cross"/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'VModal',

  data() {
    return {

    }
  },

  methods: {
    closeModal() {
      this.$emit('close-modal')
    }
  },
}
</script>

<style lang="scss" module>
.containerOverlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  transition: 0.3s;
}

.container {
  position: relative;
  text-align: center;
  background-color: white;
  height: calc(100vh - 100px);
  min-height: 500px;
  width: 100vw;
  max-width: 500px;
  margin: 100px 0 auto 0;
  padding: 60px 30px;
  border-radius: 20px;
}
.buttonClose {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background-color: #ac003e;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.cross {
  position: relative;
  width: 100%;
  height: 100%;
  transition: 1s;

  &::before {
    content: "";
    position: absolute;
    height: 2px;
    width: 15px;
    background-color: white;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 5px;
    transform: rotate(45deg);
  }

  &::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 15px;
    background-color: white;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 5px;
    transform: rotate(-45deg);
  }

  &:hover {
    transform: rotate(180deg);
  }
}

.wrapper {
  display: flex;
  position: relative;
  padding-left: 35px;
  margin-bottom: 6px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 16px;

  .checkmark {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto 0;
    height: 21px;
    width: 21px;
    border-radius: 5px;
    background-color: #eee;
    border: 1px solid #ccc;

    &::after {
      content: "";
      position: absolute;
      display: none;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      width: 8px;
      height: 8px;
      border-radius: 5px;
      background: white;
    }
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ .checkmark {
      background-color: #ac003e;
      
      &:after {
        display: block;
      }
    }
  }

  &:hover {
    input ~ .checkmark {
      background-color: #ccc;
    } 
  }
}




button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}
</style>