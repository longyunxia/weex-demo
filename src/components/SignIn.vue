<template>
  <div>
    <div class="signin-wrap">
      <div class="coins">
        <text class="f-color">福利币:</text>
        <image class="icon-coin" :src="require('../images/index/icon-coin.png')"></image>
        <text class="welfare-coins">{{user.welfareScore}}</text>
        <div class="earnmore">
          <text class="f-color">赚更多</text>
          <text class="iconfont icon-more">&#xe63c;</text>
        </div>
      </div>

      <text v-if="user.isSignIn" class="sign-in">已签到</text>
      <text @click="signIn" v-else class="sign-in">签到</text>
    </div>
  </div>
</template>
<script>
  const modal = weex.requireModule('modal')
  var event = weex.requireModule('event')
  var navigator = weex.requireModule('navigator')
  import util from '@/assets/util'
  export default{
    props: ['user'],
    data(){
      return {
        activeIndex: null
      }

    },
    methods: {
      signIn(){
        this.$emit('signIn')
      },
      onchange (event) {
        this.activeIndex = event.index;
      },
      jumpUrl (url) {
        if (url == '') rerun;
        event.openURL(url);

      }
    }
  }
</script>
<style scoped>
  .iconfont {
    font-family: iconfont;
  }

  .signin-wrap {
    padding-left: 30px;
    padding-right: 15px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #f7f7f7;
    margin: 45px auto 0 auto;
    width: 690px;
    height: 80px;
  }

  .coins {
    flex-direction: row;
    align-items: center;

  }

  .icon-coin {
    margin-left: 10px;
    width: 22px;
    height: 28px;
  }

  .welfare-coins {
    margin-left: 10px;
    color: #333;
    font-size: 36px;
  }

  .earnmore {
    margin-left: 30px;
    flex-direction: row;
    align-items: center;
  }

  .f-color {
    color: #666;
    font-size: 24px;
  }

  .icon-more {
    margin-left: 3px;
    color: rgba(0, 0, 0, 0.47);
    font-size: 28px;
  }

  .sign-in {
    height: 48px;
    line-height: 48px;
    padding: 0 14px;
    color: #97CC00;
    background: none;
    font-size: 24px;
    border-radius: 40px;
    border-style:solid;
    border-width: 1px;
    border-color: #97CC00;
  }


</style>