<template>
  <transition name="toast-bounce">
    <text class="toast" v-show="visible">
      {{ msg }}
    </text>
  </transition>
</template>
<script>
  export default {
    name: 'Toast',
    props: {
      msg: {
        required: true,
        type: String
      },
      visible: {
        required: true,
        type: Boolean
      }
    }
  }
</script>
<style scoped>
  .toast-bounce-enter, .toast-bounce-leave {
    opacity: 0;
  }
  .toast {
    position: fixed;
    max-width: 80%;
    left: 50%;
    top: 50%;
    padding: 10px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    box-sizing: border-box;
    text-align: center;
    transition: all .3s ease;
    transform: translate(-50%, -50%);
    text-align: center;
    line-height:1;
  }
</style>


